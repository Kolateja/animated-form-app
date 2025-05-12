import React, { useState } from 'react';
import { Button, Form, Input, Alert, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './ForgotPassword.css';
import ApiService from '../services/ApiService';

const { Title, Paragraph } = Typography;

const ForgotPassword: React.FC = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            const response = await ApiService.post('/webPageRoutes/forgot-password', { email });  // Pass email in the body
            setSubmitted(true);
            setErrorMessage(null);
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
        <div style={{
            height: '100vh',
            width: '100vw',
            background: 'linear-gradient(to right,rgb(116, 144, 156),rgb(109, 147, 160),rgb(111, 162, 184))',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '50px',
                borderRadius: '12px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                width: '100%',
                maxWidth: '500px',
            }}>
                <Title level={2} style={{ textAlign: 'center' }}>Recover Account</Title>
                <Paragraph style={{ textAlign: 'center', marginBottom: 30 }}>
                    <strong>Enter the email</strong> you used when signing up to receive a <strong>password reset link.</strong>
                </Paragraph>

                {errorMessage && <Alert message={errorMessage} type="warning" showIcon style={{ marginBottom: 20 }} />}
                {submitted ? (
                    <Alert message="Password reset link sent successfully!" type="success" showIcon />
                ) : (
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Invalid email address!' }]}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                )}

                {/* 🔗 Login/Signup Link */}
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Link
                        to="/auth/login-signup"
                        className={location.pathname === '/auth/login-signup' ? 'active' : ''}
                        style={{ color: '#1890ff' }}
                    >
                        Login / Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
