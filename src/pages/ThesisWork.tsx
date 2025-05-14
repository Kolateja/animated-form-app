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
        title: 'Comprehensive Support',
        description:
            'We offer complete guidance across all subjects with end-to-end case study solutions. Get everything you need in one place with expert assistance.',
        icon: 'https://img.icons8.com/ios-filled/100/help.png', // Support icon
    },
    {
        title: 'FREE Reports',
        description:
            'Access complimentary plagiarism reports, samples, and drafts with every order. Enjoy full transparency in our case study help services.',
        icon: 'https://img.icons8.com/ios-filled/100/document--v1.png', // Free report/documents icon
    },
    {
        title: 'Direct Communication',
        description:
            'Speak directly with your assigned expert. Skip the hassle and clarify your requirements instantly for a seamless case study writing experience.',
        icon: 'https://img.icons8.com/ios-filled/100/communication.png', // Communication icon
    },
    {
        title: 'Unlimited Revisions',
        description:
            'Not satisfied with the draft? Request as many revisions as you need until it’s perfect. We’re here to meet your expectations every time.',
        icon: 'https://img.icons8.com/ios-filled/100/refresh.png', // Revision icon
    },
    {
        title: 'Low Rates & Offers',
        description:
            'Get premium-quality case study help at student-friendly prices. Enjoy exclusive discounts, seasonal offers, and loyalty rewards.',
        icon: 'https://img.icons8.com/ios-filled/100/discount.png', // Discount icon
    },
    {
        title: '24/7 Support',
        description:
            'Have a query or need help urgently? Our dedicated support team is available around the clock to assist you instantly.',
        icon: 'https://img.icons8.com/ios-filled/100/online-support.png', // 24/7 customer support icon
    }
];


const Thesis = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            {/* First Section */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '20px',
                    // marginBottom: '60px',
                    padding: '0 20px',
                }}
            >
                {/* Left Section - Heading and Description */}
                <div style={{ flex: 1, minWidth: 300, maxWidth: '600px' }}>
                    <h1
                        style={{
                            fontSize: '78px',
                            lineHeight: 1.2,
                            background: 'linear-gradient(to right, #ff6600, #800080)',
                            WebkitBackgroundClip: 'text',
                            color: '#ee174e',
                            marginBottom: '20px',
                        }}
                    >
                        Thesis Help By PhD Experts
                    </h1>
                    <p style={{ fontSize: '20px', color: '#444', marginBottom: '10px' }}>
                        The Best Thesis Writing Service in the UK from Professionals in a Click
                    </p>
                    <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#222' }}>
                        Trusted by 1.5M+ happy customers
                    </p>
                </div>

                {/* Right Section - Form Card */}
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


            {/* Second Section */}
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Meet Our Team of Thesis Writers</h2>
                <p>Here are our Top-Rated Writers.</p>
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>Access Online Case Study Help EfficientlyGet Professional Thesis Writing Service in 3 Easy Steps
                </Title>
                <HowItWorks />
            </section>


            {/* Third Section - Services */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our Thesis Writing Service?</h2>
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
                    What Subjects Are Covered in our Online Thesis Writing Service?
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
                    <li style={{ marginBottom: '10px' }}>✔️  Language & Literature</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Applied Mathematics</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Data Science & Analytics</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Natural Sciences</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Social Sciences</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Law</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Management</li>
                    <li style={{ marginBottom: '10px' }}>✔️ Nursing</li>
                    <li style={{ marginBottom: '10px' }}>✔️  Engineering
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Thesis;
