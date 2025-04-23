import React from "react";
import { Row, Col, Form, Input, Button, Select, Typography } from "antd";
import {
    PhoneOutlined,
    MailOutlined,
    WhatsAppOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;
const { Option } = Select;

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

const Footer: React.FC = () => {
    const handleFinish = (values: any) => {
        console.log("Footer Contact Form Submitted:", values);
    };

    return (
        <footer style={{ background: "#001529", color: "#fff", padding: "40px 20px" }}>
            <div className="container">
                <Row gutter={[32, 32]}>
                    <Col xs={24} md={8}>
                        <Title level={4} style={{ color: "#fff" }}>Our Policies</Title>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            {[
                                ["Privacy Policy", "/privacypolicy"],
                                ["Terms & Conditions", "/terms&conditions"],
                                ["Payment & Secured Policy", "/payment&securedpolicy"],
                                ["Refund Policy", "/refundpolicy"],
                                ["Copyright Policy", "/copyrightpolicy"],
                                ["Fair Use Policy", "/fairusepolicy"],
                                ["Satisfaction Policy", "/satisfactionpolicy"],
                                ["Value for Money", "/valueformoney"],
                            ].map(([text, link]) => (
                                <li key={link}>
                                    <a href={link} style={{ color: "#fff" }}>› {text}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col xs={24} md={12}>
                        <Title level={4} style={{ color: "#fff" }}>Contact Us</Title>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Paragraph>
                                    <EnvironmentOutlined /> <strong>Address:</strong><br />
                                    MIG 797, Sitamahalakshmi Apartments,<br />
                                    Ground Floor Back Side,<br />
                                    Near Bhuvana Vijayam Grounds,<br />
                                    KPHB Phase 2, Pincode 500072
                                </Paragraph>
                                <Paragraph>
                                    <PhoneOutlined /> <strong>Phone:</strong><br />
                                    <a href="tel:+918309368958" style={{ color: "#fff" }}>+91 8309368958</a>
                                </Paragraph>
                                <Paragraph>
                                    <WhatsAppOutlined /> <strong>Whatsapp:</strong><br />
                                    <a href="https://wa.me/+61494311801" style={{ color: "#fff" }}>+61 494311801</a>
                                </Paragraph>
                                <Paragraph>
                                    <MailOutlined /> <strong>Email:</strong><br />
                                    <a href="mailto:assignmentlinkers@gmail.com" style={{ color: "#fff" }}>assignmentlinkers@gmail.com</a>
                                </Paragraph>
                                <div style={{ marginTop: 16 }}>
                                    {[
                                        ["https://wa.me/+61494311801", "/assets/img/socialmedialogos/Digital_Stacked_Green.png"],
                                        ["https://www.instagram.com/assignmentlinkers/", "/assets/img/socialmedialogos/Instagram_Glyph_Gradient.png"],
                                        ["https://www.facebook.com/profile.php?id=61556511496784", "/assets/img/socialmedialogos/Facebook_Logo_Primary.png"],
                                        ["https://www.linkedin.com/in/assignmentlinkers/", "/assets/img/socialmedialogos/LI-In-Bug.png"],
                                        ["https://x.com/AssignmentsLink", "/assets/img/socialmedialogos/logo-black.png"],
                                        ["https://in.pinterest.com/assignmentlinkers/", "/assets/img/socialmedialogos/pinterest-logo.png"],
                                        ["https://youtube.com/@assignmentlinkers?si=IvE9VbV4XTnGXs6A", "/assets/img/socialmedialogos/yt_logo_rgb_light.png"],
                                    ].map(([href, src], idx) => (
                                        <a href={href} key={idx} style={{ marginRight: 8 }} target="_blank" rel="noopener noreferrer">
                                            <img src={src} width={30} alt="social logo" />
                                        </a>
                                    ))}
                                </div>
                            </Col>

                            <Col span={12}>
                                <Form layout="vertical" onFinish={handleFinish}>
                                    <Form.Item name="fcname" rules={[{ required: true }]} label="Your Name">
                                        <Input placeholder="Your Name" />
                                    </Form.Item>
                                    <Form.Item name="fcemail" rules={[{ required: true, type: "email" }]} label="Your Email">
                                        <Input placeholder="Your Email" />
                                    </Form.Item>
                                    <Form.Item label="Mobile Number" required>
                                        <Input.Group compact>
                                            <Form.Item name="countrycode" noStyle rules={[{ required: true }]}>
                                                <Select placeholder="Code" style={{ width: "30%" }}>
                                                    {countryCodes.map(({ label, value }) => (
                                                        <Option key={value} value={value}>{label}</Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                            <Form.Item name="mobilenumber" noStyle rules={[{ required: true }]}>
                                                <Input type="number" placeholder="Mobile Number" style={{ width: "70%" }} />
                                            </Form.Item>
                                        </Input.Group>
                                    </Form.Item>
                                    <Form.Item name="message" rules={[{ required: true }]} label="Message">
                                        <TextArea rows={3} placeholder="Your Message" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block>
                                            Send Message
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={24} md={4}>
                        <Title level={4} style={{ color: "#fff" }}>Global Presence</Title>
                        <img
                            src="/assets/img/worldmap.png"
                            alt="world map"
                            style={{ width: "100%", maxHeight: 400, objectFit: "cover" }}
                        />
                    </Col>
                </Row>

                <Row justify="center" style={{ marginTop: 40, textAlign: "center" }}>
                    <Col xs={24}>
                        <p style={{ color: "#10e06d", fontSize: 18 }}>100% Secure Payment</p>
                        <img
                            src="/assets/img/paymentcardsimage.png"
                            alt="payment methods"
                            style={{ maxWidth: "100%" }}
                        />
                    </Col>
                </Row>
            </div>

            <section style={{ marginTop: 30, textAlign: "center", color: "#fff" }}>
                <p>&copy; Copyright <strong>Assignment Linkers</strong>. All Rights Reserved</p>
            </section>
        </footer>
    );
};

export default Footer;
