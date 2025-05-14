import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Typography,
  Divider,
  Space,
  Tooltip,
  Card,
} from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "../assets/css/contact.css";
import ApiService from "../services/ApiService";

const { TextArea } = Input;
const { Title, Text } = Typography;

const countryCodes = [
  { label: "+61 (Australia)", value: "+61" },
  { label: "+1 (USA)", value: "+1" },
  { label: "+91 (India)", value: "+91" },
  { label: "+44 (UK)", value: "+44" },
  { label: "+81 (Japan)", value: "+81" },
  { label: "+49 (Germany)", value: "+49" },
  { label: "+33 (France)", value: "+33" },
  { label: "+39 (Italy)", value: "+39" },
  { label: "+86 (China)", value: "+86" },
  { label: "+7 (Russia)", value: "+7" },
  { label: "+55 (Brazil)", value: "+55" },
  { label: "+34 (Spain)", value: "+34" },
  { label: "+52 (Mexico)", value: "+52" },
  { label: "+62 (Indonesia)", value: "+62" },
  { label: "+27 (South Africa)", value: "+27" },
  { label: "+82 (South Korea)", value: "+82" },
  { label: "+90 (Turkey)", value: "+90" },
  { label: "+60 (Malaysia)", value: "+60" },
  { label: "+64 (New Zealand)", value: "+64" },
  { label: "+41 (Switzerland)", value: "+41" },
  { label: "+31 (Netherlands)", value: "+31" },
  { label: "+46 (Sweden)", value: "+46" },
  { label: "+63 (Philippines)", value: "+63" },
  { label: "+966 (Saudi Arabia)", value: "+966" },
  { label: "+47 (Norway)", value: "+47" },
  { label: "+32 (Belgium)", value: "+32" },
  { label: "+94 (Sri Lanka)", value: "+94" },
  { label: "+65 (Singapore)", value: "+65" },
  { label: "+98 (Iran)", value: "+98" },
  { label: "+234 (Nigeria)", value: "+234" },
];

const socialLinks = [
  {
    href: "https://wa.me/+61494311801",
    icon: "/assets/img/socialmedialogos/Digital_Stacked_Green.png",
    alt: "WhatsApp",
  },
  {
    href: "https://www.instagram.com/assignmentlinkers/",
    icon: "/assets/img/socialmedialogos/Instagram_Glyph_Gradient.png",
    alt: "Instagram",
  },
  {
    href: "https://www.facebook.com/people/Assignment-Linkers/61556511496784/",
    icon: "/assets/img/socialmedialogos/Facebook_Logo_Primary.png",
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/assignmentlinkers/",
    icon: "/assets/img/socialmedialogos/LI-In-Bug.png",
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/i/flow/login?redirect_after_login=%2FAssignmentsLink",
    icon: "/assets/img/socialmedialogos/logo-black.png",
    alt: "Twitter",
  },
  {
    href: "https://in.pinterest.com/assignmentlinkers/",
    icon: "/assets/img/socialmedialogos/pinterest-logo.png",
    alt: "Pinterest",
  },
];

const ContactForm: React.FC = () => {
  const onFinish = async (values: any) => {
    const { name, email, message, countrycode, number } = values;

    try {
      const response: any = await ApiService.post("/webPageRoutes/getintouch", {
        body: JSON.stringify({
          name,
          email,
          message,
          countrycode,
          mobilenumber: number,
        }),
      });
      alert("message created successfully!");
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error.errors?.[0]?.message;
        if (errorMessage) {
          alert(errorMessage); // Display the specific error message
        } else {
          alert("Error creating user"); // Fallback message
        }
      } else {
        alert("Error creating user");
      }
    }
  };

  return (
    <div
      style={{
        padding: "2rem 1rem 4rem",
        width: "100vw",
        background: "linear-gradient(to right, #f0f4f8, #d9e2ec)",
        minHeight: "100vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title
          level={2}
          style={{ textAlign: "center", marginBottom: 10, color: "#0d74b0" }}
        >
          Let's Get in Touch!
        </Title>
        <Text
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: 40,
            color: "#333",
          }}
        >
          Fill out the form or reach us directly through our contact methods
          below.
        </Text>
      </motion.div>

      <div className="contact-form-social">
        {socialLinks.map((item, index) => (
          <Tooltip title={item.alt} key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <motion.img
                whileHover={{ scale: 1.3 }}
                src={item.icon}
                alt={item.alt}
                className="contact-form-social-icon"
              />
            </a>
          </Tooltip>
        ))}
      </div>

      <div className="contact-form-quickinfo">
        <Text strong>
          <PhoneOutlined /> <a href="tel:+918309368958">8309368958</a>
        </Text>
        <Text strong>
          <WhatsAppOutlined />{" "}
          <a href="https://wa.me/+61494311801">+61494311801</a>
        </Text>
        <Text strong>
          <MailOutlined />{" "}
          <a href="mailto:assignmentlinkers@gmail.com">
            assignmentlinkers@gmail.com
          </a>
        </Text>
      </div>

      {/* <div className=""> */}
      <h2 className="contact-form-heading">Get in Touch</h2>

      <Form layout="vertical" onFinish={onFinish} className="contact-form-form">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input size="large" placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input size="large" placeholder="you@example.com" />
        </Form.Item>

        <Form.Item label="Phone">
          <div style={{ display: "flex", gap: "5px", flexDirection: "row" }}>
            <Form.Item
              name="countrycode"
              noStyle
              rules={[{ required: true, message: "Code required" }]}
            >
              <Select
                size="large"
                style={{ width: "30%" }}
                options={countryCodes}
                defaultValue="+61"
              />
            </Form.Item>
            <Form.Item
              name="number"
              noStyle
              rules={[{ required: true, message: "Number required" }]}
            >
              <Input
                size="large"
                style={{ width: "70%" }}
                placeholder="Mobile Number"
              />
            </Form.Item>
          </div>
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: "Please enter a message" }]}
        >
          <TextArea rows={4} size="large" placeholder="How can we help you?" />
        </Form.Item>

        <Form.Item className="contact-form-submit">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="contact-form-submit-button"
            >
              Send Message
            </Button>
          </motion.div>
        </Form.Item>
      </Form>
      {/* </div> */}
    </div>
  );
};

export default ContactForm;
