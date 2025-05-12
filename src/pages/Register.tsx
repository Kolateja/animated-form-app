// src/pages/Register.tsx
import React from 'react';
import { Form, Input, Button, Card, Typography, Row, Col } from 'antd';
import AnimatedPage from '../components/AnimatedPage';
import './AuthForm.css'; // We'll create this for custom styles
import ApiService from '../services/ApiService';

const { Title } = Typography;

interface RegisterProps {
  onToggleForm: () => void;
}


const Register: React.FC<RegisterProps> = ({ onToggleForm }) => {
  const onFinish = async (values: any) => {
    try {
      // Sending data using POST method to create the user
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
    <AnimatedPage>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Card
          className="auth-card"
          bordered={false}
          style={{
            backgroundColor: '#fff',
            padding: '50px',
            borderRadius: '12px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>
            Create an Account
          </Title>
          <Form layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please enter your username' }]}
                >
                  <Input placeholder="Enter your username" />
                </Form.Item>
              </Col>
              <Col span={12}>
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
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please create a password' }]}
                >
                  <Input.Password placeholder="Create a password" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large">
                Register
              </Button>
            </Form.Item>
          </Form>

          <p style={{ textAlign: 'center', marginTop: 20 }}>
            Already have an account?{' '}
            <button
              type="button"
              onClick={onToggleForm}
              style={{
                background: 'none',
                border: 'none',
                color: '#1890ff',
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0,
                fontSize: '1rem',
              }}
            >
              Login here
            </button>
          </p>
        </Card>
      </div>
    </AnimatedPage>

  );
};

export default Register;
