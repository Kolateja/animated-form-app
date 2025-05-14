import React from 'react';
import { Card, Rate, Typography, Row, Col, Avatar, Divider, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

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


const FeedbackCard: React.FC = () => {
    return (
        <Card
            title={
                <Title
                    level={1}
                    style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}
                >
                    The Best Assignment Writers
                </Title>
            }
            bordered
            style={{ borderRadius: '12px',marginTop:'30px',marginBottom:'30px' }}
        >
            <div
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: 30,
                    paddingBottom: 16,
                }}
            >
                {feedbackData.map((feedback, index) => (
                    <Card
                        key={index}
                        bordered
                        style={{
                            borderRadius: '10px',
                            flex: '0 0 320px',
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
        </Card>
    );
};

export default FeedbackCard;
