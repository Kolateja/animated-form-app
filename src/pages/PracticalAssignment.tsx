import React from 'react';
import {
    Card,
    Input,
    Button,
    Select,
    Checkbox,
    Col,
    Row,
    Space,
    Divider,
    Rate,
    Typography,
} from 'antd';
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

const assignmentSubjects = [
    "Medical Assignments",
    "Engineering Projects",
    "Humanities Essays",
    "Lab Reports",
    "Case Studies",
    "Plagiarism Removal",
    "Presentation Preparation",
    "Research Proposals",
    "Editing & Proofreading",
    "Technical Reports",
];

const reviews: Review[] = [
    { name: 'Meera', orderId: 'PAW - 1001', text: 'The writer delivered an excellent medical assignment that helped me score high.', rating: 5 },
    { name: 'Rohan', orderId: 'PAW - 1002', text: 'Timely and well-structured engineering project report. Very impressed!', rating: 5 },
    { name: 'Simran', orderId: 'PAW - 1003', text: 'They handled my research proposal professionally and met the deadline.', rating: 5 },
    { name: 'Amit', orderId: 'PAW - 1004', text: 'Accurate referencing and deep analysis. Perfect for my humanities assignment.', rating: 5 },
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
        education: 'PhD in Literature',
        completedOrders: 220,
        message: 'Helping students communicate their arguments effectively in academic writing.',
        rating: 5,
    },
    {
        name: 'Ritika',
        education: 'MSc in Technical Writing',
        completedOrders: 190,
        message: 'I transform complex ideas into well-written assignments.',
        rating: 5,
    },
    {
        name: 'Vikram',
        education: 'MPhil in Linguistics',
        completedOrders: 230,
        message: 'Ensuring every assignment meets university standards and originality.',
        rating: 5,
    },
    {
        name: 'Sneha',
        education: 'MSc in English',
        completedOrders: 210,
        message: 'From formatting to clarity, I make assignments submission-ready.',
        rating: 5,
    },
];

interface CoreValue {
    title: string;
    description: string;
    icon: string;
}

const coreValues: CoreValue[] = [
    // {
    //     title: 'Qualified Academic Writers',
    //     description: 'Postgraduates and PhDs across fields write your assignments to academic standards.',
    //     icon: 'https://img.icons8.com/ios-filled/100/edit-document.png',
    // },
    {
        title: 'Plagiarism-Free Work',
        description: 'Every assignment is written from scratch and checked with plagiarism tools.',
        icon: 'https://img.icons8.com/ios-filled/100/no-idea.png',
    },
    {
        title: 'Subject-Specific Expertise',
        description: 'We match your topic with writers who specialize in that discipline.',
        icon: 'https://img.icons8.com/ios-filled/100/maintenance.png',
    },
    // {
    //     title: 'Flawless Grammar & Style',
    //     description: 'Proofread and polished assignments that meet academic tone and clarity.',
    //     icon: 'https://img.icons8.com/ios-filled/100/spell-check.png',
    // },
    {
        title: 'Confidential & Secure',
        description: 'All student data and content are kept confidential with strict policies.',
        icon: 'https://img.icons8.com/ios-filled/100/lock-2.png',
    },
    {
        title: 'Deadline-Oriented Delivery',
        description: 'We value your submission timelines and always deliver on time.',
        icon: 'https://img.icons8.com/ios-filled/100/alarm-clock.png',
    },
];

const PracticalAssignmentWriting = () => {
    return (
        <div className={styles.container}>
            <div className="research-section">
                <div className="research-header">
                    <h1>Practical Assignment Writing Help</h1>
                    <p>Academic assignment writing, editing, and formatting tailored for students and professionals.
                    </p>
                    <p className="trusted">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card">
                    <FreeQuote />
                </div>
            </div>

            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Meet Our Assignment Experts</h2>
                <p>Professionals committed to academic excellence and support.</p>
                <div style={{ display: 'flex', overflowX: 'auto', gap: 16, paddingBottom: 16 }}>
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
                                    Completed Assignments: {feedback.completedOrders}
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How to Request Assignment Help?</Title>
                <HowItWorks />
            </section>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our Assignment Writing Services?</h2>
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

            <div style={{ padding: '40px 20px', backgroundColor: '#fff', marginBottom: '40px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Subjects We Cover</Title>
                <Row gutter={[16, 16]} justify="center">
                    {assignmentSubjects.map((subject, index) => (
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

export default PracticalAssignmentWriting;
