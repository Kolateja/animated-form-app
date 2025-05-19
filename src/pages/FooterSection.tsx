// import React from "react";
// import { Row, Col, Form, Input, Button, Select, Typography } from "antd";
// import {
//     PhoneOutlined,
//     MailOutlined,
//     WhatsAppOutlined,
//     EnvironmentOutlined,
// } from "@ant-design/icons";
// import ApiService from "../services/ApiService";

// const { TextArea } = Input;
// const { Title, Paragraph } = Typography;
// const { Option } = Select;



// const Footer: React.FC = () => {


//     const onFinish = async (values: any) => {
//         const { name, email, message, countrycode, number } = values;

//         try {
//             const response: any = await ApiService.post("/webPageRoutes/getintouch", {
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     message,
//                     countrycode,
//                     mobilenumber: number,
//                 }),
//             });
//             alert('message created successfully!');

//             // const data = await response.json();

//             // if (response.ok && data.success) {
//             //     message.success("Thank you for contacting us!");
//             // } else {
//             //     throw new Error(data.message || "Submission failed");
//             // }
//         } catch (error: any) {
//             console.error(error);
//             if (error.response && error.response.data && error.response.data.error) {
//                 const errorMessage = error.response.data.error.errors?.[0]?.message;
//                 if (errorMessage) {
//                     alert(errorMessage);  // Display the specific error message
//                 } else {
//                     alert('Error creating user');  // Fallback message
//                 }
//             } else {
//                 alert('Error creating user');
//             }
//         }
//     };

//     return (
//         <footer style={{ background: "#001529", color: "#fff", padding: "40px 20px" }}>
//             <div className="container">
//                 <Row gutter={[32, 32]}>
//                     {/* Our Policies Section */}
//                     <Col xs={24} md={8} style={{ padding: '20px' }}>
//                         <Title level={4} style={{ color: "#fff", fontWeight: 600, fontSize: '24px', marginBottom: '16px' }}>Our Policies</Title>
//                         <ul style={{ listStyle: "none", padding: 0, color: "#ccc" }}>
//                             {[
//                                 ["Privacy Policy", "/privacypolicy"],
//                                 ["Terms & Conditions", "/terms&conditions"],
//                                 ["Payment & Secured Policy", "/payment&securedpolicy"],
//                                 ["Refund Policy", "/refundpolicy"],
//                                 ["Copyright Policy", "/copyrightpolicy"],
//                                 ["Fair Use Policy", "/fairusepolicy"],
//                                 ["Satisfaction Policy", "/satisfactionpolicy"],
//                                 ["Value for Money", "/valueformoney"],
//                             ].map(([text, link]) => (
//                                 <li key={link} style={{ marginBottom: '10px' }}>
//                                     <a href={link} style={{ color: "#00bfae", fontSize: '16px', textDecoration: 'none' }}>› {text}</a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </Col>

//                     {/* Contact Us Section */}
//                     <Col xs={24} md={12} style={{ padding: '20px' }}>
//                         <Title level={4} style={{ color: "#fff", fontWeight: 600, fontSize: '24px', marginBottom: '16px' }}>Contact Us</Title>
//                         <Row gutter={16}>
//                             <Col span={12}>
//                                 <div style={{ marginTop: 16 }}>
//                                     {[
//                                         ["https://wa.me/+61494311801", "/assets/img/socialmedialogos/Digital_Stacked_Green.png"],
//                                         ["https://www.instagram.com/assignmentlinkers/", "/assets/img/socialmedialogos/Instagram_Glyph_Gradient.png"],
//                                         ["https://www.facebook.com/profile.php?id=61556511496784", "/assets/img/socialmedialogos/Facebook_Logo_Primary.png"],
//                                         ["https://www.linkedin.com/in/assignmentlinkers/", "/assets/img/socialmedialogos/LI-In-Bug.png"],
//                                         ["https://x.com/AssignmentsLink", "/assets/img/socialmedialogos/logo-black.png"],
//                                         ["https://in.pinterest.com/assignmentlinkers/", "/assets/img/socialmedialogos/pinterest-logo.png"],
//                                         ["https://youtube.com/@assignmentlinkers?si=IvE9VbV4XTnGXs6A", "/assets/img/socialmedialogos/yt_logo_rgb_light.png"]
//                                     ].map(([href, src], idx) => (
//                                         <a href={href} key={idx} style={{ marginRight: 8 }} target="_blank" rel="noopener noreferrer">
//                                             <img src={src} width={30} alt="social logo" />
//                                         </a>
//                                     ))}
//                                 </div>
//                                 <Paragraph style={{ color: "#ccc", fontSize: '16px', lineHeight: '1.6' }}>
//                                     <EnvironmentOutlined style={{ color: "#00bfae" }} /> <strong>Address:</strong><br />
//                                     MIG 797, Sitamahalakshmi Apartments,<br />
//                                     Ground Floor Back Side,<br />
//                                     Near Bhuvana Vijayam Grounds,<br />
//                                     KPHB Phase 2, Pincode 500072
//                                 </Paragraph>
//                                 <Paragraph style={{ color: "#ccc", fontSize: '16px', lineHeight: '1.6' }}>
//                                     <PhoneOutlined style={{ color: "#00bfae" }} /> <strong>Phone:</strong><br />
//                                     <a href="tel:+918309368958" style={{ color: "#00bfae" }}>+91 8309368958</a>
//                                 </Paragraph>
//                                 <Paragraph style={{ color: "#ccc", fontSize: '16px', lineHeight: '1.6' }}>
//                                     <WhatsAppOutlined style={{ color: "#25D366" }} /> <strong>Whatsapp:</strong><br />
//                                     <a href="https://wa.me/+61494311801" style={{ color: "#25D366" }}>+61 494311801</a>
//                                 </Paragraph>
//                                 <Paragraph style={{ color: "#ccc", fontSize: '16px', lineHeight: '1.6' }}>
//                                     <MailOutlined style={{ color: "#ff7300" }} /> <strong>Email:</strong><br />
//                                     <a href="mailto:assignmentlinkers@gmail.com" style={{ color: "#ff7300" }}>assignmentlinkers@gmail.com</a>
//                                 </Paragraph>

//                                 {/* Social Media Links */}

//                             </Col>

//                             {/* Contact Form Section */}
//                             <Col span={12}>
//                                 <Form layout="vertical" onFinish={onFinish}>
//                                     <Form.Item name="name" rules={[{ required: true }]} label={<span style={{ color: "#fff" }}>Your Name</span>}>
//                                         <Input placeholder="Your Name" style={{ borderRadius: '8px', padding: '12px' }} />
//                                     </Form.Item>
//                                     <Form.Item name="email" rules={[{ required: true, type: "email" }]} label={<span style={{ color: "#fff" }}>Your Email</span>}>
//                                         <Input placeholder="Your Email" style={{ borderRadius: '8px', padding: '12px' }} />
//                                     </Form.Item>
//                                     <Form.Item label={<span style={{ color: "#fff" }}>Mobile Number</span>} required>
//                                         <Input.Group compact>
//                                             <Form.Item name="countrycode" noStyle rules={[{ required: true }]}>
//                                                 <Select placeholder="Code" style={{ width: "30%", borderRadius: '8px' }}>
//                                                     {countryCodes.map(({ label, value }) => (
//                                                         <Option key={value} value={value}>{label}</Option>
//                                                     ))}
//                                                 </Select>
//                                             </Form.Item>
//                                             <Form.Item name="Phone" noStyle rules={[{ required: true }]}>
//                                                 <Input type="number" placeholder="Mobile Number" style={{ width: "70%", borderRadius: '8px' }} />
//                                             </Form.Item>
//                                         </Input.Group>
//                                     </Form.Item>
//                                     <Form.Item name="message" rules={[{ required: true }]} label={<span style={{ color: "#fff" }}>Message</span>}>
//                                         <TextArea rows={3} placeholder="Your Message" style={{ borderRadius: '8px', padding: '12px' }} />
//                                     </Form.Item>
//                                     <Form.Item>
//                                         <Button type="primary" htmlType="submit" block style={{ borderRadius: '8px', padding: '12px' }}>
//                                             Send Message
//                                         </Button>
//                                     </Form.Item>
//                                 </Form>
//                             </Col>
//                         </Row>
//                     </Col>

//                     {/* Global Presence Section */}
// <Col xs={24} md={4} style={{ padding: '20px' }}>
//     <Title level={4} style={{ color: "#fff", fontWeight: 600, fontSize: '24px', marginBottom: '16px' }}>Global Presence</Title>
//     <img
//         src="/assets/img/worldmap.png"
//         alt="world map"
//         style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
//     />
// </Col>
//                 </Row>


//     <Row justify="center" style={{ marginTop: 40, textAlign: "center" }}>
//         <Col xs={24}>
//             <p style={{ color: "#10e06d", fontSize: 18 }}>100% Secure Payment</p>
//             <img
//                 src="/assets/img/paymentcardsimage.png"
//                 alt="payment methods"
//                 style={{ maxWidth: "100%" }}
//             />
//         </Col>
//     </Row>
// </div>


//         </footer>
//     );
// };

// export default Footer;import React from "react";
import { Row, Col, Form, Input, Button, Select, Typography } from "antd";
import {
    PhoneOutlined,
    MailOutlined,
    WhatsAppOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";
import ApiService from "../services/ApiService";
import "../assets/css/FooterSection.css";

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
    const onFinish = async (values: any) => {
        const { name, email, message, countrycode, number } = values;
        try {
            await ApiService.post("/webPageRoutes/getintouch", {
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    countrycode,
                    mobilenumber: number,
                }),
            });
            alert("Message created successfully!");
        } catch (error: any) {
            const msg = error?.response?.data?.error?.errors?.[0]?.message;
            alert(msg || "Error creating user");
        }
    };

    return (
        <>
            <div className="footer-container">
                <Row className="footer-main-section" gutter={[32, 32]}>
                    {/* Our Policies */}

                    <Col xs={24} md={12} lg={6} className="footer-section footer-policies">
                        <Title level={4} className="footer-title">Our Policies</Title>
                        <ul className="footer-list">
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
                                <li key={link} className="footer-list-item">
                                    <a href={link} className="footer-link" aria-label={text}>
                                        &rsaquo; {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Contact Section */}
                    <Col xs={24} md={24} lg={12} className="footer-section footer-contact">
                        <Title level={4} className="footer-title">Contact Us</Title>
                        <Row>
                            <Col xs={24} md={12} className="footer-social">
                                <div className="footer-social-links">
                                    {[
                                        ["https://wa.me/+61494311801", "/assets/img/socialmedialogos/Digital_Stacked_Green.png"],
                                        ["https://www.instagram.com/assignmentsjunction/", "/assets/img/socialmedialogos/Instagram_Glyph_Gradient.png"],
                                        ["https://www.facebook.com/assignmentsjunction/", "/assets/img/socialmedialogos/Facebook_Logo_Primary.png"],
                                        ["https://www.linkedin.com/in/assignments-junction-07703a2b7/", "/assets/img/socialmedialogos/LI-In-Bug.png"],
                                        ["https://x.com/AssignmentsLink", "/assets/img/socialmedialogos/logo-black.png"],
                                        ["https://in.pinterest.com/assignmentsjunction/?actingBusinessId=912682818142934960s", "/assets/img/socialmedialogos/pinterest-logo.png"],
                                        ["https://www.youtube.com/@AssignmentsJunction", "/assets/img/socialmedialogos/yt_logo_rgb_light.png"]
                                    ].map(([href, src], idx) => (
                                        <a href={href} key={idx} target="_blank" rel="noopener noreferrer">
                                            <img src={src} width={30} alt="social logo" />
                                        </a>
                                    ))}
                                </div>

                                <div className="footer-address">
                                    <Paragraph><EnvironmentOutlined /> <strong>Address:</strong><br />
                                        146, Masjid Banda Main Rd,<br />
                                        Masjid Banda, Sri Maruthi Nagar Colony,<br />
                                        Serilingampalle (M), Shivalik Block 504,<br />
                                        Telangana 500019
                                    </Paragraph>

                                    <Paragraph>
                                        <PhoneOutlined /> <strong>Phone:</strong><br />
                                        <a href="tel:+9177801 80946">+91 77801 80946</a>
                                    </Paragraph>
                                    <Paragraph>
                                        <WhatsAppOutlined /> <strong>Whatsapp:</strong><br />
                                        <a href="https://wa.me/+61494311801">+61 494 311 801</a>
                                    </Paragraph>
                                </div>
                            </Col>

                            <Col xs={24} md={12} className="footer-form">
                                <Form layout="vertical" onFinish={onFinish} size="small">
                                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                        <Input placeholder="Enter your name" />
                                    </Form.Item>
                                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                                        <Input type="email" placeholder="Enter your email" />
                                    </Form.Item>
                                    <Form.Item label="Mobile Number" required>
                                        <Input.Group compact>
                                            <Form.Item
                                                name="countrycode"
                                                noStyle
                                                rules={[{ required: true, message: "Country code required" }]}
                                            >
                                                <Select placeholder="Code" style={{ width: "35%" }}>
                                                    {countryCodes.map(({ label, value }) => (
                                                        <Option key={value} value={value}>
                                                            {label}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                name="number"
                                                noStyle
                                                rules={[{ required: true, message: "Phone number required" }]}
                                            >
                                                <Input placeholder="Mobile Number" style={{ width: "65%" }} />
                                            </Form.Item>
                                        </Input.Group>
                                    </Form.Item>
                                    <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                                        <TextArea rows={4} placeholder="Your message" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Send Message
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>

                    {/* Global Presence */}
                    <Col xs={24} md={12} lg={6} className="footer-section footer-map">
                        <Title level={4} className="footer-title">Global Presence</Title>
                        <img
                            src="/assets/img/worldmap.png"
                            alt="world map"
                            className="footer-world-map"
                        />
                    </Col>
                </Row>

                <Row justify="center" className="footer-bottom">
                    <Col xs={24}>
                        <p className="footer-payment-title">100% Secure Payment</p>
                        <img
                            src="/assets/img/paymentcardsimage.png"
                            alt="payment methods"
                            className="footer-payment-img"
                        />
                    </Col>
                </Row>


            </div>
            <section style={{ marginTop: 30, textAlign: "center", }}>
                <p>&copy; Copyright <strong>Assignment Linkers</strong>. All Rights Reserved</p>
                <p>
                    Designed by <strong style={{ color: 'green' }}>LEADXPO IT SOLUTIONS</strong>
                </p>
            </section>

        </>
    );
};

export default Footer;
