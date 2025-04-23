import React, { useState } from 'react';
import { Button, Form, Input, Alert, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './ForgotPassword.css';

const { Title, Paragraph } = Typography;

const ForgotPassword: React.FC = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            const response = await fetch('/auth/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong.');
            }

            setSubmitted(true);
            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage(error.message || 'An error occurred');
        }
    };

    return (
        <div className="forgot-password-container" style={{ padding: '60px 20px', backgroundColor: '#001529', minHeight: '100vh' }}>
            <div className="form-wrapper" style={{ maxWidth: 500, margin: '0 auto', backgroundColor: '#fff', padding: 30, borderRadius: 8 }}>
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
