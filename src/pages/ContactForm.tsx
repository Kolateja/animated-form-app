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

      // const data = await response.json();

      // if (response.ok && data.success) {
      //     message.success("Thank you for contacting us!");
      // } else {
      //     throw new Error(data.message || "Submission failed");
      // }
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error.errors?.[0]?.message;
        if (errorMessage) {
          alert(errorMessage); // Display the specific error message
        } else {
          alert("Error creating user"); // Fallback message
        }
    };

    return (

        // <div id="contact-form-section" style={{ padding: '2rem 1rem 4rem', width: '100vw' }}>
        //     <motion.div
        //         initial={{ opacity: 0, y: -20 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.6 }}
        //     // className="transparent"
        //     >
        //         <Title level={2} style={{ textAlign: 'center', marginBottom: 10 }}>
        //             Let's Get in Touch!
        //         </Title>
        //         <Text style={{ display: 'block', textAlign: 'center', marginBottom: 40 }}>
        //             Fill out the form or reach us directly through our contact methods below.
        //         </Text>
        //     </motion.div>
        //     <div style={{ textAlign: 'center', padding: '40px 0px' }}>
        //         {/* Social Links Row */}
        //         <div className="social-media-wrapper social-links" style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        //             {socialLinks.map((item, index) => (
        //                 <Tooltip title={item.alt} key={index}>
        //                     <a href={item.href} target="_blank" rel="noopener noreferrer">
        //                         <motion.img
        //                             whileHover={{ scale: 1.3 }}
        //                             src={item.icon}
        //                             alt={item.alt}
        //                             width={40}
        //                             height={40}
        //                             style={{ verticalAlign: 'middle' }}
        //                         />
        //                     </a>
        //                 </Tooltip>
        //             ))}
        //         </div>

        //         {/* Contact Details */}
        //         <div className="call-us-wrapper"
        //             style={{
        //                 display: 'flex',
        //                 justifyContent: 'center',
        //                 alignItems: 'center',
        //                 flexWrap: 'wrap',
        //                 gap: '2rem',
        //                 color: '#2476a6',
        //                 fontSize: 16,
        //                 maxWidth: '700px',
        //                 margin: '0 auto',
        //             }}
        //         >
        //             <Text strong>
        //                 <PhoneOutlined style={{ marginRight: 8, color: '#0d74b0' }} />
        //                 <a href="tel:+918309368958" style={{ color: '#0d74b0' }}>8309368958</a>
        //             </Text>
        //             <Text strong>
        //                 <WhatsAppOutlined style={{ marginRight: 8, color: '#25D366' }} />
        //                 <a href="https://wa.me/+61494311801" style={{ color: '#25D366' }}>+61494311801</a>
        //             </Text>
        //             <Text strong>
        //                 <MailOutlined style={{ marginRight: 8, color: '#f5222d' }} />
        //                 <a href="mailto:assignmentlinkers@gmail.com" style={{ color: '#f5222d' }}>assignmentlinkers@gmail.com</a>
        //             </Text>
        //         </div>
        //     </div>

        //     <Row justify="center" style={{ padding: '1rem 0rem' }}>
        //         <Col xs={24} sm={22} md={20} lg={16} xl={16}>
        //             <motion.div
        //                 initial={{ opacity: 0, y: 30 }}
        //                 animate={{ opacity: 1, y: 0 }}
        //                 transition={{ duration: 0.8, delay: 0.3 }}
        //             >
        //                 <motion.div
        //                     initial={{ opacity: 0, scale: 0.95 }}
        //                     animate={{ opacity: 1, scale: 1 }}
        //                     transition={{ duration: 0.5 }}
        //                     style={{ padding: '0rem' }} // keep some spacing
        //                 >
        //                     <Form layout="vertical" onFinish={onFinish}>
        //                         <Row gutter={[16, 16]}>
        //                             <Col xs={24} md={12}>
        //                                 <Form.Item
        //                                     name="name"
        //                                     label={<strong style={{ color: '#0d74b0' }}>Name</strong>}
        //                                     rules={[{ required: true, message: 'Please enter your name', }]}
        //                                 >
        //                                     <Input size="large" placeholder="Please enter your name" />
        //                                 </Form.Item>

        //                                 <Form.Item
        //                                     name="email"
        //                                     label={<strong style={{ color: '#0d74b0' }}>Email</strong>}
        //                                     rules={[{ required: true, message: 'Please enter your email' }]}
        //                                 >
        //                                     <Input size="large" placeholder="you@example.com" />
        //                                 </Form.Item>
        //                             </Col>

        //                             <Col xs={24} md={12}>
        //                                 <Form.Item label={<strong style={{ color: '#0d74b0' }}>Phone</strong>}>
        //                                     <Input.Group compact>
        //                                         <Form.Item name="countrycode" noStyle rules={[{ required: true }]}>
        //                                             <Select
        //                                                 style={{ width: '35%' }}
        //                                                 size="large"
        //                                                 options={countryCodes}
        //                                                 defaultValue="+61"
        //                                             />
        //                                         </Form.Item>
        //                                         <Form.Item name="number" noStyle rules={[{ required: true }]}>
        //                                             <Input size="large" style={{ width: '65%' }} placeholder="Mobile Number" />
        //                                         </Form.Item>
        //                                     </Input.Group>
        //                                 </Form.Item>

        //                                 <Form.Item
        //                                     name="message"
        //                                     label={<strong style={{ color: '#0d74b0' }}>Message</strong>}
        //                                     rules={[{ required: true, message: 'Please enter a message' }]}
        //                                 >
        //                                     <TextArea rows={4} size="large" placeholder="How can we help you?" />
        //                                 </Form.Item>
        //                             </Col>
        //                         </Row>

        //                         <Form.Item style={{ textAlign: 'center', marginTop: '2rem' }}>
        //                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        //                                 <Button
        //                                     type="primary"
        //                                     htmlType="submit"
        //                                     size="large"
        //                                     style={{
        //                                         padding: '0 2rem',
        //                                         background: '#0d74b0',
        //                                         borderRadius: 8,
        //                                         boxShadow: '0 4px 14px rgba(13, 116, 176, 0.4)'
        //                                     }}
        //                                 >
        //                                     Send Message
        //                                 </Button>
        //                             </motion.div>
        //                         </Form.Item>
        //                     </Form>
        //                 </motion.div>
        //             </motion.div>
        //         </Col>
        //     </Row>


        // </div>
        <div
            style={{
                padding: '2rem 1rem 4rem',
                width: '100vw',
                background: 'linear-gradient(to right, #f0f4f8, #d9e2ec)',
                minHeight: '100vh',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Title level={2} style={{ textAlign: 'center', marginBottom: 10, color: '#0d74b0' }}>
                    Let's Get in Touch!
                </Title>
                <Text style={{ display: 'block', textAlign: 'center', marginBottom: 40, color: '#333' }}>
                    Fill out the form or reach us directly through our contact methods below.
                </Text>
            </motion.div>

            <div style={{ textAlign: 'center', padding: '40px 0px' }}>
                <div
                    style={{
                        marginBottom: 10,
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}
                >
                    {socialLinks.map((item, index) => (
                        <Tooltip title={item.alt} key={index}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <motion.img
                                    whileHover={{ scale: 1.3 }}
                                    src={item.icon}
                                    alt={item.alt}
                                    width={40}
                                    height={40}
                                    style={{
                                        verticalAlign: 'middle',
                                        backgroundColor: '#fff',
                                        borderRadius: '50%',
                                        padding: 6,
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    }}
                                />
                            </a>
                        </Tooltip>
                    ))}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        color: '#2476a6',
                        fontSize: 16,
                        maxWidth: '700px',
                        margin: '0 auto',
                        paddingTop: '1rem',
                    }}
                >
                    <Text strong>
                        <PhoneOutlined style={{ marginRight: 8, color: '#0d74b0' }} />
                        <a href="tel:+918309368958" style={{ color: '#0d74b0' }}>8309368958</a>
                    </Text>
                    <Text strong>
                        <WhatsAppOutlined style={{ marginRight: 8, color: '#25D366' }} />
                        <a href="https://wa.me/+61494311801" style={{ color: '#25D366' }}>+61494311801</a>
                    </Text>
                    <Text strong>
                        <MailOutlined style={{ marginRight: 8, color: '#f5222d' }} />
                        <a href="mailto:assignmentlinkers@gmail.com" style={{ color: '#f5222d' }}>assignmentlinkers@gmail.com</a>
                    </Text>
                </div>
            </div>

            <Row justify="center" style={{ padding: '1rem 0rem' }}>
                <Col xs={24} sm={22} md={20} lg={16} xl={16}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                padding: '2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: '12px',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Form layout="vertical" onFinish={onFinish}>
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="name"
                                            label={<strong style={{ color: '#0d74b0' }}>Name</strong>}
                                            rules={[{ required: true, message: 'Please enter your name' }]}
                                        >
                                            <Input size="large" placeholder="Please enter your name" />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            label={<strong style={{ color: '#0d74b0' }}>Email</strong>}
                                            rules={[{ required: true, message: 'Please enter your email' }]}
                                        >
                                            <Input size="large" placeholder="you@example.com" />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} md={12}>
                                        <Form.Item label={<strong style={{ color: '#0d74b0' }}>Phone</strong>}>
                                            <Input.Group compact>
                                                <Form.Item name="countrycode" noStyle rules={[{ required: true }]}>
                                                    <Select
                                                        style={{ width: '35%' }}
                                                        size="large"
                                                        options={countryCodes}
                                                        defaultValue="+61"
                                                    />
                                                </Form.Item>
                                                <Form.Item name="number" noStyle rules={[{ required: true }]}>
                                                    <Input size="large" style={{ width: '65%' }} placeholder="Mobile Number" />
                                                </Form.Item>
                                            </Input.Group>
                                        </Form.Item>

                                        <Form.Item
                                            name="message"
                                            label={<strong style={{ color: '#0d74b0' }}>Message</strong>}
                                            rules={[{ required: true, message: 'Please enter a message' }]}
                                        >
                                            <TextArea rows={4} size="large" placeholder="How can we help you?" />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item style={{ textAlign: 'center', marginTop: '2rem' }}>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            size="large"
                                            style={{
                                                padding: '0 2rem',
                                                background: '#0d74b0',
                                                borderRadius: 8,
                                                boxShadow: '0 4px 14px rgba(13, 116, 176, 0.4)',
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </motion.div>
                                </Form.Item>
                            </Form>
                        </motion.div>
                    </motion.div>
                </Col>
            </Row>
        </div>

        {/* Contact Details */}
        <div
          className="call-us-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            color: "#2476a6",
            fontSize: 16,
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <Text strong>
            <PhoneOutlined style={{ marginRight: 8, color: "#0d74b0" }} />
            <a href="tel:+918309368958" style={{ color: "#0d74b0" }}>
              8309368958
            </a>
          </Text>
          <Text strong>
            <WhatsAppOutlined style={{ marginRight: 8, color: "#25D366" }} />
            <a href="https://wa.me/+61494311801" style={{ color: "#25D366" }}>
              +61494311801
            </a>
          </Text>
          <Text strong>
            <MailOutlined style={{ marginRight: 8, color: "#f5222d" }} />
            <a
              href="mailto:assignmentlinkers@gmail.com"
              style={{ color: "#f5222d" }}
            >
              assignmentlinkers@gmail.com
            </a>
          </Text>
        </div>
      </div>

      <Row justify="center" style={{ padding: "1rem 0rem" }}>
        <Col xs={24} sm={22} md={20} lg={16} xl={16}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ padding: "0rem" }} // keep some spacing
            >
              <Form layout="vertical" onFinish={onFinish}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="name"
                      label={<strong style={{ color: "#0d74b0" }}>Name</strong>}
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Please enter your name"
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label={
                        <strong style={{ color: "#0d74b0" }}>Email</strong>
                      }
                      rules={[
                        { required: true, message: "Please enter your email" },
                      ]}
                    >
                      <Input size="large" placeholder="you@example.com" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      label={
                        <strong style={{ color: "#0d74b0" }}>Phone</strong>
                      }
                    >
                      <Input.Group compact>
                        <Form.Item
                          name="countrycode"
                          noStyle
                          rules={[{ required: true }]}
                        >
                          <Select
                            style={{ width: "35%" }}
                            size="large"
                            options={countryCodes}
                            defaultValue="+61"
                          />
                        </Form.Item>
                        <Form.Item
                          name="number"
                          noStyle
                          rules={[{ required: true }]}
                        >
                          <Input
                            size="large"
                            style={{ width: "65%" }}
                            placeholder="Mobile Number"
                          />
                        </Form.Item>
                      </Input.Group>
                    </Form.Item>

                    <Form.Item
                      name="message"
                      label={
                        <strong style={{ color: "#0d74b0" }}>Message</strong>
                      }
                      rules={[
                        { required: true, message: "Please enter a message" },
                      ]}
                    >
                      <TextArea
                        rows={4}
                        size="large"
                        placeholder="How can we help you?"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item style={{ textAlign: "center", marginTop: "2rem" }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      style={{
                        padding: "0 2rem",
                        background: "#0d74b0",
                        borderRadius: 8,
                        boxShadow: "0 4px 14px rgba(13, 116, 176, 0.4)",
                      }}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </Form.Item>
              </Form>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
