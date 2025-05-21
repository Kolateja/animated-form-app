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

const labReportServices = [
    "Chemistry Lab Report",
    "Physics Lab Report",
    "Biology Lab Report",
    "Engineering Experiment Report",
    "Environmental Lab Report",
    "Mechanical Lab Report",
    "Electrical Lab Report",
    "Plagiarism-Free Lab Reports",
    "Data Analysis & Graphs",
    "Formatting & Referencing",
];

const reviews: Review[] = [
    { name: 'Aisha', orderId: 'LAB - 2023-01', text: 'My physics lab report was detailed, well-organized, and helped me get an A+. Thank you!', rating: 5 },
    { name: 'Kevin', orderId: 'LAB - 2023-02', text: 'Exceptional quality and clear data interpretation. Recommended for any student needing lab assistance.', rating: 5 },
    { name: 'Liam', orderId: 'LAB - 2023-03', text: 'Quick turnaround and original content. I appreciate the timely submission.', rating: 5 },
    { name: 'Sara', orderId: 'LAB - 2023-04', text: 'All graphs and references were perfect. Helped me ace my final year lab work.', rating: 5 },
];

type Feedback = {
    name: string;
    education: string;
    completedOrders: number;
    message: string;
    rating: number;
};

const labWriters: Feedback[] = [
    {
        name: 'Dr. Neha Sharma',
        education: 'PhD in Biochemistry',
        completedOrders: 190,
        message: 'Creating precise and structured lab reports for academic excellence.',
        rating: 5,
    },
    {
        name: 'Rakesh Iyer',
        education: 'MSc in Mechanical Engineering',
        completedOrders: 165,
        message: 'Specializing in mechanical and environmental lab reporting.',
        rating: 5,
    },
    {
        name: 'Priya Menon',
        education: 'M.Tech in Electrical Engineering',
        completedOrders: 210,
        message: 'Delivering insightful lab results and formatted scientific data.',
        rating: 5,
    },
    {
        name: 'Alok Desai',
        education: 'BSc in Physics',
        completedOrders: 150,
        message: 'Focused on clarity and accuracy in all lab report components.',
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
        title: 'Subject Matter Experts',
        description: 'Our writers have hands-on lab experience in various scientific fields.',
        icon: 'https://img.icons8.com/ios-filled/100/test-tube.png',
    },
    {
        title: '100% Original Reports',
        description: 'All content is custom-written and checked for plagiarism.',
        icon: 'https://img.icons8.com/ios-filled/100/no-idea.png',
    },
    {
        title: 'Accurate Data Representation',
        description: 'We ensure your graphs, tables, and results are precise and well-explained.',
        icon: 'https://img.icons8.com/ios-filled/100/line-chart.png',
    },
    {
        title: 'Confidential & Secure',
        description: 'Your academic details are always protected with strict confidentiality.',
        icon: 'https://img.icons8.com/ios-filled/100/lock-2.png',
    },
    {
        title: 'Timely Submissions',
        description: 'On-time delivery of reports, even for urgent deadlines.',
        icon: 'https://img.icons8.com/ios-filled/100/alarm-clock.png',
    },
];

const LabReport = () => {
    return (
        <div className={styles.container}>
            <div className="research-section">
                <div className="research-header">
                    <h1>Lab Report Help</h1>
                    <p>Expert lab report writing and editing for students and researchers.
                    </p>
                    <p className="trusted">Trusted by 1.5M+ happy customers</p>
                </div>

                <div className="form-card">
                    <FreeQuote />
                </div>
            </div>

            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h2>Meet Our Lab Report Specialists</h2>
                <p>Professionals with academic and research lab backgrounds.</p>
                <div style={{ display: 'flex', overflowX: 'auto', gap: 16, paddingBottom: 16 }}>
                    {labWriters.map((feedback, index) => (
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
                                    Reports Delivered: {feedback.completedOrders}
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How It Works</Title>
                <HowItWorks />
            </section>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our Lab Report Services?</h2>
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
                <h2>Student Feedback</h2>
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
                <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Lab Report Types We Handle</Title>
                <Row gutter={[16, 16]} justify="center">
                    {labReportServices.map((subject, index) => (
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

export default LabReport;
