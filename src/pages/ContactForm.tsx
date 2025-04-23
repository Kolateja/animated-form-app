import React from 'react';
import { Form, Input, Button, Select, Row, Col, Typography } from 'antd';
import {
    PhoneOutlined,
    MailOutlined,
    WhatsAppOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;
const { Title } = Typography;

const countryCodes = [
    { label: '+61 (Australia)', value: '+61' },
    { label: '+1 (USA)', value: '+1' },
    { label: '+91 (India)', value: '+91' },
    { label: '+44 (UK)', value: '+44' },
    { label: '+81 (Japan)', value: '+81' },
    { label: '+49 (Germany)', value: '+49' },
    { label: '+33 (France)', value: '+33' },
    { label: '+39 (Italy)', value: '+39' },
    { label: '+86 (China)', value: '+86' },
    { label: '+7 (Russia)', value: '+7' },
    { label: '+55 (Brazil)', value: '+55' },
    { label: '+34 (Spain)', value: '+34' },
    { label: '+52 (Mexico)', value: '+52' },
    { label: '+62 (Indonesia)', value: '+62' },
    { label: '+27 (South Africa)', value: '+27' },
    { label: '+82 (South Korea)', value: '+82' },
    { label: '+90 (Turkey)', value: '+90' },
    { label: '+60 (Malaysia)', value: '+60' },
    { label: '+64 (New Zealand)', value: '+64' },
    { label: '+41 (Switzerland)', value: '+41' },
    { label: '+31 (Netherlands)', value: '+31' },
    { label: '+46 (Sweden)', value: '+46' },
    { label: '+63 (Philippines)', value: '+63' },
    { label: '+966 (Saudi Arabia)', value: '+966' },
    { label: '+47 (Norway)', value: '+47' },
    { label: '+32 (Belgium)', value: '+32' },
    { label: '+94 (Sri Lanka)', value: '+94' },
    { label: '+65 (Singapore)', value: '+65' },
    { label: '+98 (Iran)', value: '+98' },
    { label: '+234 (Nigeria)', value: '+234' },
];

const ContactForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Form Values:', values);
    };

    return (
        <div style={{ padding: '2rem', background: '#f0f2f5' }}>
            <Title level={3} style={{ textAlign: 'center' }}>Contact Us</Title>

            <Row justify="center" gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <div style={{ textAlign: 'center' }}>
                        <a href="https://wa.me/+61494311801" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/socialmedialogos/Digital_Stacked_Green.png" alt="WhatsApp" width={30} />
                        </a>
                        <a href="https://www.instagram.com/assignmentlinkers/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/socialmedialogos/Instagram_Glyph_Gradient.png" alt="Instagram" width={30} />
                        </a>
                        <a href="https://www.facebook.com/people/Assignment-Linkers/61556511496784/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/socialmedialogos/Facebook_Logo_Primary.png" alt="Facebook" width={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/assignmentlinkers/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/socialmedialogos/LI-In-Bug.png" alt="LinkedIn" width={30} />
                        </a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2FAssignmentsLink" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/socialmedialogos/logo-black.png" alt="Twitter" width={30} />
                        </a>
                        <a href="https://in.pinterest.com/assignmentlinkers/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/img/socialmedialogos/pinterest-logo.png" alt="Pinterest" width={30} />
                        </a>
                    </div>
                </Col>
            </Row>

            <Row justify="center" gutter={[16, 16]} style={{ marginTop: 20 }}>
                <Col xs={24} sm={12} md={6}>
                    <div style={{ color: '#000' }}>
                        <PhoneOutlined /> <a href="tel:+918309368958">8309368958</a>
                        <br />
                        <WhatsAppOutlined /> <a href="https://wa.me/+61494311801">+61494311801</a>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <MailOutlined /> <a href="mailto:assignmentlinkers@gmail.com">assignmentlinkers@gmail.com</a>
                </Col>
            </Row>

            <Row justify="center" style={{ marginTop: 30 }}>
                <Col xs={24} sm={20} md={12}>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                                    <Input placeholder="Your Name" />
                                </Form.Item>
                                <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                                    <Input type="email" placeholder="Your Email" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    <Input.Group compact>
                                        <Form.Item name="countrycode" noStyle rules={[{ required: true, message: 'Country code required' }]}>
                                            <Select style={{ width: '30%' }} options={countryCodes} defaultValue="+61" />
                                        </Form.Item>
                                        <Form.Item name="number" noStyle rules={[{ required: true, message: 'Please enter number' }]}>
                                            <Input type="number" style={{ width: '70%' }} placeholder="Mobile Number" />
                                        </Form.Item>
                                    </Input.Group>
                                </Form.Item>
                                <Form.Item name="message">
                                    <TextArea rows={3} placeholder="Message" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Button type="primary" htmlType="submit">Send Message</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ContactForm;