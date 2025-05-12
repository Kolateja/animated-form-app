import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Alert, Typography } from 'antd';
import './ResetPassword.css';
import ApiService from '../services/ApiService';

const { Title } = Typography;

const ResetPassword: React.FC = () => {
    const navigate = useNavigate();
    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token');

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!token) {
            setErrorMessage("Reset token missing from URL");
            return;
        }

        try {
            const response = await ApiService.post('/auth/reset-link', {
                body: JSON.stringify({ token, newPassword, confirmPassword }),
            });
            setSuccessMessage('Password changed successfully!');
            setErrorMessage(null);
            setTimeout(() => navigate('/auth/login-signup'), 2000);
        } catch (error: any) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.error) {
                const errorMessage = error.response.data.error.errors?.[0]?.message;
                if (errorMessage) {
                    alert(errorMessage);  // Display the specific error message
                } else {
                    alert('Error creating user');  // Fallback message
                }
            } else {
                alert('Error creating user');
            }
        }
    };

    return (
        <div className="reset-password-container" style={{ padding: '60px 20px', backgroundColor: '#001529', minHeight: '100vh' }}>
            <div style={{ maxWidth: 500, margin: '0 auto', backgroundColor: '#fff', padding: 30, borderRadius: 8 }}>
                <Title level={2} style={{ textAlign: 'center' }}>Reset Your Password</Title>

                {errorMessage && <Alert message={errorMessage} type="error" showIcon style={{ marginBottom: 20 }} />}
                {successMessage && <Alert message={successMessage} type="success" showIcon style={{ marginBottom: 20 }} />}

                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="New Password"
                        name="newPassword"
                        rules={[{ required: true, message: 'Please enter your new password!' }]}
                    >
                        <Input.Password value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                    >
                        <Input.Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;
