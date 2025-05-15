import React, { useState } from "react";
import { Button, Form, Input, Alert, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./ForgotPassword.css";
import ApiService from "../services/ApiService";
// import forgotImage from "../assets/img/login.png"; // Reusing same image

const { Title, Paragraph } = Typography;

const ForgotPassword: React.FC = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await ApiService.post("/webPageRoutes/forgot-password", {
        email,
      });
      setSubmitted(true);
      setErrorMessage(null);
    } catch (error: any) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.error?.errors?.[0]?.message ||
        "Something went wrong";
      alert(errorMessage);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-wrapper">
        <div className="forgot-left">
          <img
            src="/assets/img/login-page2.jpg"
            alt="Forgot Password"
            className="forgot-image"
          />
        </div>

        <div className="forgot-right">
          <Title level={2} className="forgot-title">
            Recover Account
          </Title>
          <Paragraph className="forgot-subtitle">
            <strong>Enter the email</strong> you used when signing up to receive
            a <strong>password reset link.</strong>
          </Paragraph>

          {errorMessage && (
            <Alert
              message={errorMessage}
              type="warning"
              showIcon
              className="forgot-alert"
            />
          )}

          {submitted ? (
            <Alert
              message="Password reset link sent successfully!"
              type="success"
              showIcon
              className="forgot-alert"
            />
          ) : (
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Invalid email address!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="forgot-input"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="forgot-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}

          <div className="forgot-login-link">
            <Link
              to="/auth/login-signup"
              className={
                location.pathname === "/auth/login-signup" ? "active" : ""
              }
            >
              Login / Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
