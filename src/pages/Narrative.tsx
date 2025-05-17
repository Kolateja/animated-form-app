import React from 'react';
import { Card, Input, Button, Select, Checkbox, Col, Row, Space, Divider, Rate, Typography } from 'antd';
import FreeQuote from './getFreeQuote';
import HowItWorks from './HowItWorks';

const { TextArea } = Input;
const { Option } = Select;
const { Text, Paragraph, Title } = Typography;

interface Review {
    name: string;
    orderId: string;
    text: string;
    rating: number;
}

const reviews: Review[] = [
    { name: 'Meera', orderId: 'NRW - 1001', text: 'The narrative had such a personal touch. Felt like my own story beautifully expressed.', rating: 5 },
    { name: 'Rohan', orderId: 'NRW - 1002', text: 'Fantastic storytelling. Truly captured the essence of my experience.', rating: 5 },
    { name: 'Simran', orderId: 'NRW - 1003', text: 'Touched my emotions and exceeded expectations.', rating: 5 },
    { name: 'Amit', orderId: 'NRW - 1004', text: 'The story structure was compelling and vivid.', rating: 5 },
];

type Feedback = {
    name: string;
    education: string;
    completedOrders: number;
    message: string;
    rating: number;
};

const feedbackData: Feedback[] = [
    {
        name: 'Ananya',
        education: 'MFA in Creative Writing',
        completedOrders: 150,
        message: 'Writing narratives is about painting emotions with words. Every assignment is a new voice to channel, and I cherish every one of them.',
        rating: 5,
    },
    {
        name: 'Ritika',
        education: 'MA in Literature',
        completedOrders: 200,
        message: 'Crafting a story that resonates with the reader is an art. I aim to make every narrative powerful and relatable.',
        rating: 5,
    },
    {
        name: 'Vikram',
        education: 'PhD in English',
        completedOrders: 250,
        message: 'Narrative writing is storytelling with purpose. My goal is to turn every brief into a captivating journey.',
        rating: 5,
    },
    {
        name: 'Sneha',
        education: 'MA in Journalism',
        completedOrders: 180,
        message: 'I believe stories shape the world. I strive to breathe life into every narrative I write.',
        rating: 5,
    },
];

interface CoreValue {
    title: string;
    description: string;
    icon: string;
}

const coreValues: CoreValue[] = [
    {
        title: 'Authentic Storytelling',
        description: 'We craft deeply personal and emotionally engaging narratives that reflect your true experiences.',
        icon: 'https://img.icons8.com/ios-filled/100/help.png',
    },
    {
        title: 'Expert Writers',
        description: 'Our team consists of professional storytellers with backgrounds in literature, journalism, and creative writing.',
        icon: 'https://img.icons8.com/ios-filled/100/student-male--v1.png',
    },
    {
        title: 'Emotionally Resonant',
        description: 'Our narratives aim to connect with readers on a deep emotional level.',
        icon: 'https://img.icons8.com/ios-filled/100/heart-with-pulse.png',
    },
    {
        title: 'Original Content',
        description: 'Every narrative is crafted from scratch, ensuring complete originality and authenticity.',
        icon: 'https://img.icons8.com/ios-filled/100/certificate.png',
    },
    {
        title: 'Timely Delivery',
        description: 'Deadlines matter. We ensure your story reaches you on time, every time.',
        icon: 'https://img.icons8.com/ios-filled/100/alarm-clock.png',
    },
    {
        title: 'Client Satisfaction',
        description: 'Our focus is on delivering narratives that satisfy and inspire. Your voice, our words.',
        icon: 'https://img.icons8.com/ios-filled/100/handshake.png',
    },
];

const Narrative = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '0 20px',
                }}
            >
                <div style={{ flex: 1, minWidth: 300, maxWidth: '600px' }}>
                    <h1
                        style={{
                            fontSize: '72px',
                            lineHeight: 1.2,
                            background: 'linear-gradient(to right, #2b5876, #4e4376)',
                            WebkitBackgroundClip: 'text',
                            color: '#4e4376',
                            marginBottom: '20px',
                        }}
                    >
                        Narrative Writing Services
                    </h1>
                    <p style={{ fontSize: '20px', color: '#444', marginBottom: '10px' }}>
                        Let your story be told with clarity, emotion, and depth by expert storytellers.
                    </p>
                    <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#222' }}>
                        Loved by thousands of students and professionals worldwide
                    </p>
                </div>

                <div style={{ flex: '0 0 700px' }}>
                    <div
                        style={{
                            padding: '30px',
                            borderRadius: '12px',
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <FreeQuote />
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Our Expert Narrative Writers</h2>
                <p>Writers who turn your ideas into compelling stories.</p>
                <div
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 16,
                        paddingBottom: 16,
                    }}
                >
                    {feedbackData.map((feedback, index) => (
                        <Card
                            key={index}
                            bordered
                            style={{
                                borderRadius: '10px',
                                flex: '0 0 300px',
                                minWidth: 300,
                                height: '100%',
                            }}
                            bodyStyle={{ padding: '16px' }}
                        >
                            <Space direction="vertical" size={4}>
                                <Text strong style={{ fontSize: 16 }}>{feedback.name}</Text>
                                <Text type="secondary" style={{ fontSize: '13px' }}>
                                    {feedback.education}
                                </Text>
                                <Text type="secondary" style={{ fontSize: '13px' }}>
                                    Completed Orders: {feedback.completedOrders}
                                </Text>
                            </Space>
                            <Divider style={{ margin: '12px 0' }} />
                            <Paragraph style={{ fontSize: '13px' }}>{feedback.message}</Paragraph>
                            <Rate disabled defaultValue={feedback.rating} />
                        </Card>
                    ))}
                </div>
            </div>

            <section style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How to Place Your Narrative Writing Order?</Title>
                <HowItWorks />
            </section>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our Narrative Writing Services?</h2>
                <Row gutter={[24, 24]} justify="center">
                    {coreValues.map((value, index) => (
                        <Col xs={24} sm={12} md={12} lg={6} key={index}>
                            <Card
                                bordered={false}
                                hoverable
                                style={{
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    minHeight: '300px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <img
                                    src={value.icon}
                                    alt={value.title}
                                    style={{ width: '64px', height: '64px', marginBottom: '1rem' }}
                                />
                                <Title level={4} style={{ color: '#333' }}>{value.title}</Title>
                                <Paragraph style={{ textAlign: 'center' }}>{value.description}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Fourth Section - Reviews */}
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Student Reviews</h2>
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
            <div
                style={{
                    marginBottom: '60px',
                    padding: '40px 20px',
                    background: '#f9f9f9',
                    borderRadius: '12px',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: '30px',
                        fontWeight: '700',
                        fontSize: '28px',
                        color: '#2c3e50'
                    }}
                >
                    What Subjects Are Covered in our Online Narrative Writing Service?
                </h2>
                <ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        maxWidth: '600px',
                        margin: '0 auto',
                        textAlign: 'left',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        color: '#34495e'
                    }}
                >
                    <ul>
                        <li>✔️ Personal Narratives</li>
                        <li>✔️ Memoirs</li>
                        <li>✔️ Creative Non-Fiction</li>
                        <li>✔️ Reflective Essays</li>
                        <li>✔️ Biographical Sketches</li>
                        <li>✔️ Fictional Storytelling</li>
                        <li>✔️ Descriptive Essays</li>
                        <li>✔️ Travelogues</li>
                        <li>✔️ Character Development</li>
                        <li>✔️ Dialogue Writing</li>
                    </ul>

                </ul>
            </div>
        </div>
    );
};

export default Narrative;