// src/pages/Register.tsx
import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import AnimatedPage from '../components/AnimatedPage';
import './AuthForm.css'; // We'll create this for custom styles

const { Title } = Typography;

const Register: React.FC = () => {
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
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Username" name="username" rules={[{ required: true }]}>
              <Input placeholder="Enter your username" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true }]}>
              <Input.Password placeholder="Create a password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </AnimatedPage>
  );
};

export default Register;
