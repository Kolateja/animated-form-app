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

const projectReportSubjects = [
    "Engineering Project Reports",
    "IT & Computer Science Assignments",
    "Management Case Studies",
    "Final Year Project Documentation",
    "Research Proposal Writing",
    "Dissertation & Thesis Writing",
    "Architecture & Design Reports",
    "Plagiarism Removal & Editing",
    "Data Analysis and Visualization Reports",
    "Technical Documentation & Whitepapers",
];


const reviews: Review[] = [
    { name: 'Anjali', orderId: 'PRJ - 2021', text: 'They helped me structure and write my final year engineering project with perfection. Got great marks!', rating: 5 },
    { name: 'Ravi', orderId: 'ASG - 1143', text: 'Submitted on time and well-formatted. Really impressed with the professionalism.', rating: 5 },
    { name: 'Neha', orderId: 'THS - 3112', text: 'Excellent support with my thesis report. They followed all university guidelines.', rating: 5 },
    { name: 'Siddharth', orderId: 'MGMT - 9987', text: 'They did a brilliant job on my management case study. Clear analysis and formatting.', rating: 5 },
];


type Feedback = {
    name: string;
    education: string;
    completedOrders: number;
    message: string;
    rating: number;
};

const projectWriters: Feedback[] = [
    {
        name: 'Dr. Kavita Sharma',
        education: 'PhD in Mechanical Engineering',
        completedOrders: 250,
        message: 'Specialist in technical documentation and engineering reports.',
        rating: 5,
    },
    {
        name: 'Aditya Rao',
        education: 'MSc in Computer Science',
        completedOrders: 220,
        message: 'Delivering high-quality IT and programming assignments.',
        rating: 5,
    },
    {
        name: 'Priya Mehta',
        education: 'MBA in Marketing',
        completedOrders: 180,
        message: 'Expert in case studies and business project reports.',
        rating: 5,
    },
    {
        name: 'Rahul Nair',
        education: 'MA in English Literature',
        completedOrders: 200,
        message: 'Supporting students with research papers and dissertations.',
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
    //     title: 'Engineering Experts',
    //     description: 'Our team consists of engineers with real-world project experience.',
    //     icon: 'https://img.icons8.com/ios-filled/100/edit-document.png',
    // },
    {
        title: '100% Approval Guarantee',
        description: 'We follow Engineers Australia guidelines strictly for a high success rate.',
        icon: 'https://img.icons8.com/ios-filled/100/thumb-up.png',
    },
    {
        title: 'Zero Plagiarism',
        description: 'Every report is original and passes Turnitin plagiarism checks.',
        icon: 'https://img.icons8.com/ios-filled/100/no-idea.png',
    },
    {
        title: 'Technical Accuracy',
        description: 'We use accurate technical terminology and competency elements.',
        icon: 'https://img.icons8.com/ios-filled/100/maintenance.png',
    },
    {
        title: 'Strict Confidentiality',
        description: 'All client information and documents are kept 100% confidential.',
        icon: 'https://img.icons8.com/ios-filled/100/lock-2.png',
    },
    {
        title: 'On-Time Delivery',
        description: 'We respect your deadlines and ensure timely delivery.',
        icon: 'https://img.icons8.com/ios-filled/100/alarm-clock.png',
    },
];

const ProjectReportWriting = () => {
    return (
        <div className={styles.container}>
            <div className="research-section">
                <div className="research-header">
                    <h1>Project Report Writing Help</h1>
                    <p>Get top-quality project and assignment reports tailored to your academic and technical requirements.
                    </p>
                    <p className="trusted">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card">
                    <FreeQuote />
                </div>
            </div>

            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Meet Our CDR Experts</h2>
                <p>Experienced professionals helping engineers succeed internationally.</p>
                <div style={{ display: 'flex', overflowX: 'auto', gap: 16, paddingBottom: 16 }}>
                    {projectWriters.map((feedback, index) => (
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
                                    Completed CDRs: {feedback.completedOrders}
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How to Get Your CDR Written?</Title>
                <HowItWorks />
            </section>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our CDR Writing Services?</h2>
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>CDR Report Services We Offer</Title>
                <Row gutter={[16, 16]} justify="center">
                    {projectReportSubjects.map((subject, index) => (
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

export default ProjectReportWriting;
