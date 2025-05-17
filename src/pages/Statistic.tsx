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
const statisticalSubjects = [
    "Descriptive Statistics",
    "Inferential Statistics",
    "Regression Analysis",
    "Time Series Analysis",
    "Hypothesis Testing",
    "ANOVA",
    "Probability Distributions",
    "Statistical Software (SPSS, R, SAS, Python)",
    "Bayesian Analysis",
    "Non-parametric Tests",
    "Multivariate Statistics",
    "Data Visualization Techniques",
];

const reviews: Review[] = [
    { name: 'Meera', orderId: 'STA - 1001', text: 'Their analysis helped me crack my thesis. Extremely reliable.', rating: 5 },
    { name: 'Rohan', orderId: 'STA - 1002', text: 'Great statistical insights. Helped me validate all my hypotheses.', rating: 5 },
    { name: 'Simran', orderId: 'STA - 1003', text: 'Delivered accurate and well-documented results. Impressive!', rating: 5 },
    { name: 'Amit', orderId: 'STA - 1004', text: 'Professional, quick turnaround, and excellent results interpretation.', rating: 5 },
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
        name: 'Dr. Ananya',
        education: 'PhD in Statistics',
        completedOrders: 220,
        message: 'Every dataset has a story. My job is to bring that to light using advanced analysis techniques.',
        rating: 5,
    },
    {
        name: 'Ritika',
        education: 'MSc in Data Science',
        completedOrders: 190,
        message: 'I love turning raw data into meaningful insights that drive decisions.',
        rating: 5,
    },
    {
        name: 'Vikram',
        education: 'MPhil in Quantitative Methods',
        completedOrders: 230,
        message: 'From regression to time-series, I make sure your analysis is statistically sound.',
        rating: 5,
    },
    {
        name: 'Sneha',
        education: 'MSc in Applied Statistics',
        completedOrders: 210,
        message: 'Statistics is about precision and clarity. I ensure both in every report.',
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
        title: 'Expert Statisticians',
        description: 'Our team is comprised of professionals with deep expertise in statistics, data science, and analytics.',
        icon: 'https://img.icons8.com/ios-filled/100/statistics.png',
    },
    {
        title: 'Accurate Analysis',
        description: 'We provide precise and valid statistical results that hold up to academic and professional scrutiny.',
        icon: 'https://img.icons8.com/ios-filled/100/checklist.png',
    },
    {
        title: 'Advanced Tools',
        description: 'We use SPSS, R, Python, and more to ensure your analysis is cutting-edge and efficient.',
        icon: 'https://img.icons8.com/ios-filled/100/combo-chart.png',
    },
    {
        title: 'Tailored Reports',
        description: 'Get customized statistical reports aligned to your project or research needs.',
        icon: 'https://img.icons8.com/ios-filled/100/report-card.png',
    },
    {
        title: 'Confidential & Secure',
        description: 'Your data is safe with us. We ensure complete confidentiality and data protection.',
        icon: 'https://img.icons8.com/ios-filled/100/lock-2.png',
    },
    {
        title: 'Timely Delivery',
        description: 'Deadlines are crucial. We always deliver on time without compromising quality.',
        icon: 'https://img.icons8.com/ios-filled/100/alarm-clock.png',
    },
];

const StatisticalAnalysis = () => {
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
                        Statistical Analysis Services
                    </h1>
                    <p style={{ fontSize: '20px', color: '#444', marginBottom: '10px' }}>
                        Delivering accurate, insightful, and comprehensive statistical analysis for academic and professional use.
                    </p>
                    <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#222' }}>
                        Trusted by thousands of researchers and students globally
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
                <h2>Meet Our Data Experts</h2>
                <p>Qualified statisticians delivering reliable and accurate results.</p>
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
                                    Completed Projects: {feedback.completedOrders}
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How to Request a Statistical Analysis?</Title>
                <HowItWorks />
            </section>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our Statistical Analysis Services?</h2>
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

            {/* Reviews */}
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Subjects We Cover</Title>
                <Row gutter={[16, 16]} justify="center">
                    {statisticalSubjects.map((subject, index) => (
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
                                <Paragraph strong style={{ fontSize: '15px', margin: 0 }}>{subject}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    );
};

export default StatisticalAnalysis;
