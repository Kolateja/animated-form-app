import React from 'react';
import { Card, Typography, Rate, Row, Col, Divider, Space } from 'antd';
import FreeQuote from './getFreeQuote';
import HowItWorks from './HowItWorks';
import './ResearchPaper.css';
import styles from './AcademicWritingPage.module.css';

const { Text, Paragraph, Title } = Typography;

interface Review {
    name: string;
    orderId: string;
    text: string;
    rating: number;
}

const reviews: Review[] = [
    { name: 'Anjali', orderId: 'SPC-1011', text: 'They crafted a perfect wedding speech! Emotional and eloquent.', rating: 5 },
    { name: 'Karan', orderId: 'SPC-1012', text: 'My keynote speech received a standing ovation. Thank you!', rating: 5 },
    { name: 'Sanya', orderId: 'SPC-1013', text: 'Professional tone, well-structured, and impactful. Highly recommend!', rating: 5 },
    { name: 'Rahul', orderId: 'SPC-1014', text: 'Saved me before a big event! Amazing speech delivered promptly.', rating: 5 },
];

const speechTypes = [
    'Wedding Speech',
    'Formal Speech',
    'Inspirational Speech',
    'Persuasive Speech',
    'Business Presentation',
    'Toast Speech',
    'Farewell Speech',
    'Welcome Speech',
    'Keynote Address',
    'Debate Speech',
    'Eulogy',
    'Graduation Speech',
];

const experts = [
    {
        name: 'Aarav',
        education: 'MA in English Literature',
        completedOrders: 300,
        message: 'I believe every speech should resonate emotionally and intellectually.',
        rating: 5,
    },
    {
        name: 'Priya',
        education: 'BA in Communication Studies',
        completedOrders: 250,
        message: 'My goal is to help you express your message with clarity and power.',
        rating: 5,
    },
    {
        name: 'Neha',
        education: 'MFA in Creative Writing',
        completedOrders: 270,
        message: 'Whether persuasive or personal, I craft speeches that stick with the audience.',
        rating: 5,
    },
    {
        name: 'Rajat',
        education: 'MA in Journalism',
        completedOrders: 220,
        message: 'A well-written speech is half the delivery. I help you get that right.',
        rating: 5,
    },
];

const SpeechWritingComponent = () => {
    return (
        <div className={styles.container}>
            <div className="research-section">
                <div className="research-header">
                    <h1>Speech Writing Services</h1>
                    <p>Elevate your words. Captivate your audience. Let us write a compelling speech for your special occasion or professional event.
                    </p>
                    <p className="trusted">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card">
                    <FreeQuote />
                </div>
            </div>

            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Meet Our Speech Experts</h2>
                <p>Crafting impactful speeches with flair and professionalism.</p>
                <div style={{ display: 'flex', overflowX: 'auto', gap: 16, paddingBottom: 16 }}>
                    {experts.map((expert, index) => (
                        <Card key={index} bordered style={{ borderRadius: '10px', flex: '0 0 300px', minWidth: 300 }}>
                            <Space direction="vertical" size={4}>
                                <Text strong style={{ fontSize: 16 }}>{expert.name}</Text>
                                <Text type="secondary" style={{ fontSize: '13px' }}>{expert.education}</Text>
                                <Text type="secondary" style={{ fontSize: '13px' }}>Completed Speeches: {expert.completedOrders}</Text>
                            </Space>
                            <Divider />
                            <Paragraph style={{ fontSize: '13px' }}>{expert.message}</Paragraph>
                            <Rate disabled defaultValue={expert.rating} />
                        </Card>
                    ))}
                </div>
            </div>

            <section style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How to Get Your Speech Written?</Title>
                <HowItWorks />
            </section>

            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Client Reviews</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20 }}>
                    {reviews.map((review, index) => (
                        <Card key={index} style={{ width: 300 }}>
                            <Text strong>{review.name}</Text>
                            <p style={{ marginBottom: 4 }}>{review.orderId}</p>
                            <Paragraph style={{ fontSize: '13px' }}>{review.text}</Paragraph>
                            <Rate disabled defaultValue={review.rating} />
                        </Card>
                    ))}
                </div>
            </div>

            <div style={{ padding: '40px 20px', backgroundColor: '#fff', marginBottom: '40px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Types of Speeches We Offer</Title>
                <Row gutter={[16, 16]} justify="center">
                    {speechTypes.map((type, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <Card
                                bordered
                                hoverable
                                style={{
                                    borderRadius: '8px',
                                    height: '100%',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                <Paragraph strong style={{ fontSize: '15px', margin: 0 }}>{type}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default SpeechWritingComponent;
