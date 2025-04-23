import React from 'react';
import { Form, Input, Button, Card, Typography, Select } from 'antd';
import AnimatedPage from '../components/AnimatedPage';
import './AuthForm.css'; // Your custom styles

const { Title } = Typography;
const { Option } = Select;

const AddUser: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form Submitted:', values);
    };

    return (
        <AnimatedPage>
            <div className="auth-container">
                <Card className="auth-card" bordered={false}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>
                        Create an Account
                    </Title>
                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: 'Please select a role' }]}
                    >
                        <Select placeholder="Select a role">
                            <Option value="student">Student</Option>
                            <Option value="admin">Admin</Option>
                            <Option value="writer">Writer</Option>
                        </Select>
                    </Form.Item>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please enter your username' }]}
                        >
                            <Input placeholder="Enter your username" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[{ required: true, message: 'Please enter your phone number' }]}
                        >
                            <Input placeholder="Enter your phone number" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please create a password' }]}
                        >
                            <Input.Password placeholder="Create a password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                AddUser
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </AnimatedPage>
    );
};

export default AddUser;
