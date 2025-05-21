import React from 'react';
import {
    Card,
    Typography,
    Rate,
    Row,
    Col,
    Space,
    Divider,
} from 'antd';
import FreeQuote from './getFreeQuote';
import HowItWorks from './HowItWorks';
import './ResearchPaper.css';
import styles from './AcademicWritingPage.module.css';

const { Title, Text, Paragraph } = Typography;

interface Review {
    name: string;
    orderId: string;
    text: string;
    rating: number;
}

interface Feedback {
    name: string;
    education: string;
    completedOrders: number;
    message: string;
    rating: number;
}

interface CoreValue {
    title: string;
    description: string;
    icon: string;
}

const videoTopics: string[] = [
    "How to Write Career Episodes",
    "Summary Statement Walkthrough",
    "CPD Requirements Explained",
    "Stage 1 & 2 Competency Claims Guide",
    "Avoiding Plagiarism in CDR",
    "CDR Review & Editing Process",
    "RPL Video Guide for ACS",
    "KAO & KSA Explained with Examples",
    "Engineering Discipline Specific CDR Videos",
    "How to Build a Professional Engineering CV",
];

const reviews: Review[] = [
    { name: 'Meera', orderId: 'Video - 1001', text: 'The video on Career Episodes was incredibly detailed and clear!', rating: 5 },
    { name: 'Rohan', orderId: 'Video - 1002', text: 'Loved the explanation about avoiding plagiarism in CDRs. Very helpful.', rating: 5 },
    { name: 'Simran', orderId: 'Video - 1003', text: 'Their ACS RPL guide video made the whole process stress-free.', rating: 5 },
    { name: 'Amit', orderId: 'Video - 1004', text: 'Great visual examples and clear narration. Best CDR content I’ve seen!', rating: 5 },
];

const videoExperts: Feedback[] = [
    {
        name: 'Dr. Ananya',
        education: 'PhD in Civil Engineering',
        completedOrders: 180,
        message: 'Creating instructional CDR videos to help engineers get EA approval with ease.',
        rating: 5,
    },
    {
        name: 'Ritika',
        education: 'MSc in Engineering Management',
        completedOrders: 150,
        message: 'Breaking down complex CDR topics into easy-to-follow video lessons.',
        rating: 5,
    },
    {
        name: 'Vikram',
        education: 'M.Tech in Electrical Engineering',
        completedOrders: 200,
        message: 'Focused on video tutorials that follow EA’s MSA guidelines step by step.',
        rating: 5,
    },
    {
        name: 'Sneha',
        education: 'B.E in Mechanical Engineering',
        completedOrders: 170,
        message: 'Delivering engaging and plagiarism-free CDR learning videos.',
        rating: 5,
    },
];

const coreValues: CoreValue[] = [
    {
        title: 'Video-Based Learning',
        description: 'Step-by-step video tutorials for every part of your CDR report.',
        icon: 'https://img.icons8.com/ios-filled/100/video.png',
    },
    {
        title: '100% Approval Focus',
        description: 'All videos follow Engineers Australia guidelines strictly.',
        icon: 'https://img.icons8.com/ios-filled/100/thumb-up.png',
    },
    {
        title: 'Technical Precision',
        description: 'Each video is built with accurate engineering terminology.',
        icon: 'https://img.icons8.com/ios-filled/100/maintenance.png',
    },
    {
        title: 'Fully Confidential',
        description: 'Your learning journey is private and secure.',
        icon: 'https://img.icons8.com/ios-filled/100/lock-2.png',
    },
    {
        title: 'Accessible Anytime',
        description: 'Watch the videos at your pace, from any device, anytime.',
        icon: 'https://img.icons8.com/ios-filled/100/time-machine.png',
    },
];

const VideoSolution = () => {
    return (
        <div className={styles.container}>

            <div className="research-section">
                <div className="research-header">
                    <h1>CDR Video Solutions</h1>
                    <p>Learn how to craft perfect CDR reports with our video guides.
                    </p>
                    <p className="trusted">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card">
                    <FreeQuote />
                </div>
            </div>
            <div style={{ margin: '60px 0', textAlign: 'center' }}>
                <Title level={2}>Meet Our Video Instructors</Title>
                <p>Engineering experts creating video lessons tailored for CDR success.</p>
                <div style={{ display: 'flex', overflowX: 'auto', gap: 16, paddingBottom: 16 }}>
                    {videoExperts.map((expert, index) => (
                        <Card key={index} style={{ flex: '0 0 300px', minWidth: 300 }}>
                            <Space direction="vertical" size={4}>
                                <Text strong style={{ fontSize: 16 }}>{expert.name}</Text>
                                <Text type="secondary">{expert.education}</Text>
                                <Text type="secondary">CDR Videos Published: {expert.completedOrders}</Text>
                            </Space>
                            <Divider />
                            <Paragraph>{expert.message}</Paragraph>
                            <Rate disabled defaultValue={expert.rating} />
                        </Card>
                    ))}
                </div>
            </div>

            <section style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    How Our Video Solutions Work
                </Title>
                <HowItWorks />
            </section>

            <div style={{ margin: '60px 0' }}>
                <Title level={2} style={{ textAlign: 'center' }}>
                    Why Watch Our CDR Video Series?
                </Title>
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
                                <img src={value.icon} alt={value.title} style={{ width: '64px', height: '64px', marginBottom: '1rem' }} />
                                <Title level={4}>{value.title}</Title>
                                <Paragraph style={{ textAlign: 'center' }}>{value.description}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <Title level={2}>Student Feedback</Title>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 20 }}>
                    {reviews.map((review, index) => (
                        <Card key={index} style={{ width: 300 }}>
                            <Text strong>{review.name}</Text>
                            <p>{review.orderId}</p>
                            <Paragraph>{review.text}</Paragraph>
                            <Rate disabled defaultValue={review.rating} />
                        </Card>
                    ))}
                </div>
            </div>

            <div style={{ padding: '40px 20px', backgroundColor: '#fff' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Video Topics We Cover
                </Title>
                <Row gutter={[16, 16]} justify="center">
                    {videoTopics.map((topic, index) => (
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
                                <Paragraph strong style={{ fontSize: '15px', margin: 0 }}>{topic}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default VideoSolution;
