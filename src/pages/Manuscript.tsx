
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

const manuscriptSubjects = [
    "Medical Manuscripts",
    "Engineering Papers",
    "Humanities Research",
    "Journal Formatting",
    "Thesis Writing",
    "Plagiarism Removal",
    "Peer Review Assistance",
    "Research Proposals",
    "Editing & Proofreading",
    "Scientific Writing",
];

const reviews: Review[] = [
    { name: 'Meera', orderId: 'MSW - 1001', text: 'The editors refined my manuscript perfectly for journal submission.', rating: 5 },
    { name: 'Rohan', orderId: 'MSW - 1002', text: 'Excellent manuscript writing support. Very professional and timely.', rating: 5 },
    { name: 'Simran', orderId: 'MSW - 1003', text: 'Their team polished my thesis with great attention to detail.', rating: 5 },
    { name: 'Amit', orderId: 'MSW - 1004', text: 'Got my manuscript ready for peer review without any hassle.', rating: 5 },
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
        message: 'I help researchers express their ideas clearly and concisely in their manuscripts.',
        rating: 5,
    },
    {
        name: 'Ritika',
        education: 'MSc in Technical Writing',
        completedOrders: 190,
        message: 'Transforming research into publishable manuscripts is what I love doing.',
        rating: 5,
    },
    {
        name: 'Vikram',
        education: 'MPhil in Linguistics',
        completedOrders: 230,
        message: 'Whether it’s a thesis or journal article, I ensure it meets scholarly standards.',
        rating: 5,
    },
    {
        name: 'Sneha',
        education: 'MSc in English',
        completedOrders: 210,
        message: 'From grammar to structure, I ensure manuscripts are publication-ready.',
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
        title: 'Expert Academic Writers',
        description: 'Our team includes PhD-level writers experienced in various disciplines and publication standards.',
        icon: 'https://img.icons8.com/ios-filled/100/edit-document.png',
    },
    {
        title: 'Plagiarism-Free Content',
        description: 'We ensure original writing with thorough plagiarism checks.',
        icon: 'https://img.icons8.com/ios-filled/100/no-idea.png',
    },
    {
        title: 'Journal-Specific Formatting',
        description: 'Your manuscript will match target journal guidelines exactly.',
        icon: 'https://img.icons8.com/ios-filled/100/maintenance.png',
    },
    {
        title: 'Language & Grammar Perfection',
        description: 'We refine grammar, tone, and language for academic precision.',
        icon: 'https://img.icons8.com/ios-filled/100/spell-check.png',
    },
    {
        title: 'Confidential Service',
        description: 'Your work and ideas remain secure with strict confidentiality.',
        icon: 'https://img.icons8.com/ios-filled/100/lock-2.png',
    },
    {
        title: 'Timely Delivery',
        description: 'We meet deadlines without compromising quality.',
        icon: 'https://img.icons8.com/ios-filled/100/alarm-clock.png',
    },
];

const ManuscriptWritingService = () => {
    return (
        <div className={styles.container}>
            <div className="research-section">
                <div className="research-header">
                    <h1>Manuscript Writing Services</h1>
                    <p>Academic manuscript writing, editing, and formatting tailored for journal publication and thesis submission.
                    </p>
                    <p className="trusted">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card">
                    <FreeQuote />
                </div>
            </div>
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Meet Our Manuscript Experts</h2>
                <p>Qualified professionals ensuring clarity, originality, and publication readiness.</p>
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How to Request a Manuscript Writing Service?</Title>
                <HowItWorks />
            </section>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our Manuscript Writing Services?</h2>
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
                    {manuscriptSubjects.map((subject, index) => (
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

export default ManuscriptWritingService;
