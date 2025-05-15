// src/pages/Register.tsx
import React from "react";
import { Form, Input, Button, Typography, Row, Col } from "antd";
import AnimatedPage from "../components/AnimatedPage";
import ApiService from "../services/ApiService";
// import registerImage from "../assets/img/login.png"; // Reusing the image
import "./Register.css";

const { Title } = Typography;

interface RegisterProps {
  onToggleForm: () => void;
}

const Register: React.FC<RegisterProps> = ({ onToggleForm }) => {
  const onFinish = async (values: any) => {
    try {
      const response = await ApiService.post("/users/create", {
        role: values.role,
        username: values.username,
        email: values.email,
        phone: values.phone,
        password: values.password,
      });

      alert("User created successfully!");
    } catch (error: any) {
      console.error("Error creating user:", error);

      const message =
        error?.response?.data?.error?.errors?.[0]?.message ||
        "Error creating user";
      alert(message);
    }
  };

  return (
    <AnimatedPage>
      <div className="register-container">
        <div className="register-wrapper">
          <div className="register-left">
            <img
              src="/assets/img/login-page2.jpg"
              alt="Register Illustration"
              className="register-image"
            />
          </div>

          <div className="register-right">
            <Title level={2} className="register-title">
              Create an Account
            </Title>

            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      { required: true, message: "Please enter your username" },
                    ]}
                  >
                    <Input
                      placeholder="Enter your username"
                      className="register-input"
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter your phone number"
                      className="register-input"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Enter a valid email",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter your email"
                      className="register-input"
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      { required: true, message: "Please create a password" },
                    ]}
                  >
                    <Input.Password
                      placeholder="Create a password"
                      className="register-input"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  className="register-button"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>

            <p className="register-login-text">
              Already have an account?{" "}
              <button onClick={onToggleForm} className="register-login-button">
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Register;
