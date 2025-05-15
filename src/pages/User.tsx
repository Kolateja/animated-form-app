import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Typography, Select, Row, Col, Card } from 'antd';
import AnimatedPage from '../components/AnimatedPage';
import ApiService from '../services/ApiService';

const { Title } = Typography;
const { Option } = Select;

const AddUser: React.FC = () => {
    const [availableRoles, setAvailableRoles] = useState<string[]>([]);

    useEffect(() => {
        const loggedInRole = localStorage.getItem('role');
        if (loggedInRole === 'super admin') {
            setAvailableRoles(['admin', 'student', 'writer']);
        } else if (loggedInRole === 'admin') {
            setAvailableRoles(['student']); // only student for admin
        }
    }, []);

    const onFinish = async (values: any) => {
        try {
            const response = await ApiService.post('/users/create', {
                role: values.role,
                username: values.username,
                email: values.email,
                phone: values.phone,
                password: values.password,
            });

            alert('User created successfully!');
        } catch (error: any) {
            console.error('Error creating user:', error);

            const errorMessage = error.response?.data?.error?.errors?.[0]?.message;
            alert(errorMessage || 'Error creating user');
        }
    };

    return (
       
            <div
            >
                <Card     style={{
                    maxWidth: 800,
                    margin: '40px auto',
                    padding: 24,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    borderRadius: 12,
                }}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>
                        Create an Account
                    </Title>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Row gutter={24}>
                            <Col span={8} offset={2}>
                                <Form.Item
                                    label="Role"
                                    name="role"
                                    rules={[{ required: true, message: 'Please select a role' }]}
                                >
                                    <Select placeholder="Select a role">
                                        {availableRoles.map(role => (
                                            <Option key={role} value={role}>
                                                {role.charAt(0).toUpperCase() + role.slice(1)}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8} offset={2}>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please enter your username' }]}
                                >
                                    <Input placeholder="Enter your username" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={8} offset={2}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                                >
                                    <Input placeholder="Enter your email" />
                                </Form.Item>
                            </Col>
                            <Col span={8} offset={2}>
                                <Form.Item
                                    label="Phone Number"
                                    name="phone"
                                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                                >
                                    <Input placeholder="Enter your phone number" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={8} offset={2}>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please create a password' }]}
                                >
                                    <Input.Password placeholder="Create a password" />
                                </Form.Item>
                            </Col>

                            <Col span={8} offset={2} style={{ marginTop: '30px' }}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Add User
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>
       
    );
};

export default AddUser;
