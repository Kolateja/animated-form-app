import React from 'react';
import { Typography, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface Step {
    title: string;
    desc: string;
    image: string;
}

const steps: Step[] = [
    {
        title: 'Fill Order Form',
        desc: 'Share your assignment requirements, like the deadline, word count, etc., to receive a customized solution.',
        image: 'https://img.icons8.com/ios-filled/100/000000/order-history.png',
    },
    {
        title: 'Complete Payment',
        desc: 'Use any of the available payment methods we offer (e.g., PayPal, Apple Pay) to pay for your order.',
        image: 'https://img.icons8.com/ios-filled/100/000000/money-transfer.png',
    },
    {
        title: 'Receive Assignment',
        desc: 'View or download the completed assignment from your account as soon as our writers are done with it.',
        image: 'https://img.icons8.com/ios-filled/100/000000/downloads.png',
    },
];

const HowItWorks: React.FC = () => {
    return (
        <div style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
            {/* <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
                How It Works
            </Title> */}
            <Row justify="center" align="middle">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <Col xs={24} sm={24} md={6} style={{ textAlign: 'center' }}>
                            <img
                                src={step.image}
                                alt={step.title}
                                style={{ width: '60px', height: '60px', marginBottom: '20px' }}
                            />
                            <Title level={4}>{step.title}</Title>
                            <Paragraph>{step.desc}</Paragraph>
                        </Col>
                        {index < steps.length - 1 && (
                            <Col xs={0} sm={0} md={1} style={{ textAlign: 'center' }}>
                                <ArrowRightOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                            </Col>
                        )}
                    </React.Fragment>
                ))}
            </Row>
        </div>
    );
};

export default HowItWorks;
