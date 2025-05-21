import React from 'react';
import { Card, Input, Button, Select, Checkbox, Col, Row, Space, Divider, Rate, Typography } from 'antd';
import FreeQuote from './getFreeQuote';
import HowItWorks from './HowItWorks';
import './ResearchPaper.css';
import styles from './AcademicWritingPage.module.css';

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
        title: 'Undisputed Quality:',
        description:
            'We hire only PhD-qualified experts at MyAssignmenthelp. So, if you hire a professional coursework writer from us, we ensure top quality..',
        icon: 'https://img.icons8.com/ios-filled/100/medal2.png', // Represents high quality and achievement
    },
    {
        title: 'Original Contents:',
        description:
            'Our professional coursework writers write custom papers from scratch, using AI-based tools to ensure unique papers every time.',
        icon: 'https://img.icons8.com/ios-filled/100/idea.png', // Represents originality and unique thinking
    },
    {
        title: 'Free Samples:',
        description:
            'Along with help with coursework papers, you can access a vast collection of free samples, which you can even download for future use..',
        icon: 'https://img.icons8.com/ios-filled/100/documents.png', // Represents multiple downloadable samples
    },
    {
        title: 'Anytime Availability:',
        description:
            'We understand that students need coursework service even after midnight. So, you can find someone for writing assignments anytime..',
        icon: 'https://img.icons8.com/ios-filled/100/around-the-clock.png', // Represents 24/7 service
    },
    {
        title: 'Free Edits:',
        description:
            'You can trust our reliable coursework writing service to do unlimited edits for you. We do not charge anything for this extra service!',
        icon: 'https://img.icons8.com/ios-filled/100/edit--v1.png', // Represents editing/revision
    },
    {
        title: 'Exciting Offers',
        description:
            'We offer exciting offers and discounts round the year. So, you can find a coursework writer from us, even if you are low on budget..',
        icon: 'https://img.icons8.com/ios-filled/100/sale--v1.png', // Represents offers and discounts
    }
];


const CourseWork = () => {
    return (
        <div className={styles.container}>
            {/* First Section */}

            {/* Left Section - Heading and Description */}
            <div className="research-section">
                <div className="research-header">
                    <h1>Coursework Help Services: Boost Your Academic Success</h1>
                    <p>Meet Top  Get A-Rated Professional Coursework Services Without Breaking the Bank
                    </p>
                    <p className="trusted">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card">
                    <FreeQuote />
                </div>
            </div>
            {/* Second Section */}
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Our Top Coursework Writers Ready to Help You</h2>
                <p>Choose Our Expert Coursework Writers for Coursework Writing Service.</p>
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How Does Our Coursework Help Services Work?
                </Title>
                <HowItWorks />
            </section>


            {/* Third Section - Services */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Advantages of Opting for Our Online Coursework Service</h2>
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
                                <Title level={4} style={{ color: '#0f52ba' }}>
                                    {value.title}
                                </Title>
                                <Paragraph style={{ color: '#555' }}>{value.description}</Paragraph>
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

            {/* Fifth Section - Subjects */}
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
                    Types of Services We Offer:
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
                    <li style={{ marginBottom: '10px' }}>✔️  Term paper</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Thesis</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Research paper</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Academic essay</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Report project</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Dissertations</li>

                </ul>
            </div>

        </div>
    );
};

export default CourseWork;
