import React from 'react';
import { Card, Input, Button, Select, Checkbox, Col, Row, Space, Divider, Rate, Typography } from 'antd';
import FreeQuote from './getFreeQuote';
import HowItWorks from './HowItWorks';
import './HomeWork.css';

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
    { name: 'Arjun', orderId: 'ALO - 4568', text: 'Excellent service...', rating: 4 },
    { name: 'Aishwarya', orderId: 'ALO - 4567', text: 'Assignment Linkers exceeded...', rating: 4 },
    { name: 'Aditya', orderId: 'ALO - 1478', text: 'Superb support from...', rating: 4 },
    { name: 'Kavya', orderId: 'ALO - 45678', text: 'Impressive work...', rating: 4 },
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
        name: 'Kavya',
        education: 'M.Sc. Economics',
        completedOrders: 300,
        message:
            'As a writer at Assignment Junction, I take pride in delivering high-quality, well-researched academic content. We ensure every assignment meets the highest standards.',
        rating: 5,
    },
    {
        name: 'Karthik',
        education: 'M.Sc. Economics',
        completedOrders: 300,
        message:
            'At Assignment Junction, I’ve had the opportunity to help hundreds of students succeed academically. Our commitment to excellence sets us apart.',
        rating: 5,
    },
    {
        name: 'Divya',
        education: 'M.Sc. Economics',
        completedOrders: 300,
        message:
            'Working with Assignment Junction allows me to apply my academic expertise to real-world challenges. I strive to deliver clarity, depth, and accuracy in every project.',
        rating: 5,
    },
    {
        name: 'Priya',
        education: 'M.Sc. Economics',
        completedOrders: 300,
        message:
            'Being part of the Assignment Junction team has been incredibly fulfilling. We prioritize quality, timely delivery, and student success in all our work.',
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
        title: '100% Original Papers',
        description:
            'All our assessments are crafted from scratch to ensure originality and zero plagiarism, backed by proper research and academic integrity.',
        icon: 'https://img.icons8.com/material-sharp/96/certificate.png', // Represents originality and certification
    },
    {
        title: '24×7 Availability:',
        description:
            'Our team is available around the clock to resolve your queries and provide academic help whenever you need it.',
        icon: 'https://img.icons8.com/fluency-systems-filled/96/online-support.png', // Represents support/availability
    },
    {
        title: 'Amazing Referral Bonus:',
        description:
            'Invite friends and earn exciting referral rewards. Share the benefits and get bonuses directly into your wallet.',
        icon: 'https://img.icons8.com/ios-filled/96/gift.png', // Represents gift/referral
    },
    {
        title: 'Best Industry Price:',
        description:
            'Get top-quality writing services at the most competitive rates in the industry, tailored to fit every student’s budget.',
        icon: 'https://img.icons8.com/ios-filled/96/cheap-2.png', // Represents affordability
    },
    {
        title: 'Solutions On Time:',
        description:
            'We value deadlines and ensure timely delivery of every order, even under tight schedules — no delays, guaranteed.',
        icon: 'https://img.icons8.com/ios-filled/96/time.png', // Represents punctuality
    },
    {
        title: 'Samples and Blogs:',
        description:
            'Access a rich library of free samples and expert-written blogs to support your academic journey and writing development.',
        icon: 'https://img.icons8.com/ios-filled/96/blog.png', // Represents blog/samples
    },
];


const HomeWork = () => {
    return (
     

        <div className="homework-container">
            <div className="first-section">
                <div className="heading-section">
                    <h1 className="heading-title">Homework Help Online</h1>
                    <p className="heading-description">
                        Get homework help online today and revamp your career like never before!
                    </p>
                    <p className="heading-subtext">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card-container">
                    <div className="form-card">
                        <FreeQuote />
                    </div>
                </div>
            </div>

            <div className="helpers-section">
                <h2>Top Homework Helpers</h2>
                <p>Know Our Certified Writers Before You Hire Them.</p>
                <div className="helpers-cards">
                    {feedbackData.map((feedback, index) => (
                        <Card key={index} className="helper-card" bodyStyle={{ padding: '16px' }}>
                            <Space direction="vertical" size={4}>
                                <Text className="helper-name">{feedback.name}</Text>
                                <Text type="secondary" className="helper-text">{feedback.education}</Text>
                                <Text type="secondary" className="helper-text">Completed Orders: {feedback.completedOrders}</Text>
                            </Space>
                            <Divider style={{ margin: '12px 0' }} />
                            <Paragraph className="helper-text">{feedback.message}</Paragraph>
                            <Rate disabled defaultValue={feedback.rating} />
                        </Card>
                    ))}
                </div>
            </div>

            <section className="how-it-works-section">
                <Title level={2} className="how-it-works-title">Get Online Homework Help in 3 Steps</Title>
                <HowItWorks />
            </section>

            <div className="services-section">
                <h2 className="services-title">Get Expert Help with Homework Online</h2>
                <Row gutter={[24, 24]} justify="center">
                    {coreValues.map((value, index) => (
                        <Col xs={24} sm={12} md={12} lg={6} key={index}>
                            <Card bordered={false} hoverable className="card-service">
                                <img src={value.icon} alt={value.title} className="card-service-icon" />
                                <Title level={4} className="card-service-title">{value.title}</Title>
                                <Paragraph className="card-service-desc">{value.description}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="reviews-section">
                <h2>Student Reviews</h2>
                <div className="review-cards">
                    {reviews.map((review, index) => (
                        <Card key={index} className="review-card">
                            <Text strong>{review.name}</Text>
                            <p>{review.orderId}</p>
                            <Paragraph className="helper-text">{review.text}</Paragraph>
                            <Rate disabled defaultValue={review.rating} />
                        </Card>
                    ))}
                </div>
            </div>
            <div className="subjects-section">

                <h2>Subjects We Cover</h2>
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
                    <li style={{ marginBottom: '10px' }}>✔️  Unlimited Revision</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Essay Type Tool</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Grammar Checker</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Plagiarism Check</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Referencing Generator</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Spell Checker</li>

                </ul>
            </div>
        </div>

    );
};

export default HomeWork;
