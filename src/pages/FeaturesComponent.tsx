import React, { useState } from 'react';
import { Card, Typography, Row, Col } from 'antd';
import {
    CheckCircleOutlined,
    CalendarOutlined,
    BookOutlined,
    TeamOutlined,
    DollarCircleOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const features = [
    {
        title: 'Quality Writing, No AI',
        description: 'Get quality writing with zero AI, crafted by real experts holding scholarly degrees and extensive academic insights.',
        icon: <CheckCircleOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
        color: '#1890ff',
    },
    {
        title: 'Timely Submissions',
        description: 'If you need assignments on time, we are the best option for you. Beat impossible deadlines with our 24-hour delivery.',
        icon: <CalendarOutlined style={{ fontSize: 32, color: '#faad14' }} />,
        color: '#faad14',
    },
    {
        title: 'Friendly Policies',
        description: 'Our student-friendly policies include a money-back guarantee. Rest assured that we’ll take responsibility for all papers.',
        icon: <BookOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
        color: '#52c41a',
    },
    {
        title: 'Reliable Experts',
        description: 'Every assignment writer on our website has completed their Master’s or Doctorate degree.',
        icon: <TeamOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
        color: '#722ed1',
    },
    {
        title: 'Pocket-Friendly Services',
        description: 'We always ensure to provide affordable services through our dynamic pricing system.',
        icon: <DollarCircleOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
        color: '#eb2f96',
    },
    {
        title: '24/7 Availability',
        description: 'Feel free to get in touch with our academic writers whenever you want. Send in your queries anytime.',
        icon: <ClockCircleOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
        color: '#13c2c2',
    },
];

const FeaturesComponent: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div style={{ padding: '40px 24px', background: '#fff' }}>
            <Title level={2} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                AssignmentJunction: Top Assignment Help Features
            </Title>
            <Text style={{ display: 'block', textAlign: 'center', marginBottom: 32 }}>
                Discover why we’re the top choice for professional writing assistance.
            </Text>
            <Row gutter={[24, 24]} justify="center">
                {features.map((feature, index) => (
                    <Col key={index} xs={24} sm={12} md={8}>
                        <Card
                            bordered
                            hoverable
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                minHeight: 200,
                                textAlign: 'center',
                                boxShadow: `0 4px 20px ${feature.color}33`,
                                borderRadius: 10,
                                transition: 'transform 0.3s',
                            }}
                        >
                            <div
                                style={{
                                    display: 'inline-block',
                                    marginBottom: 16,
                                    transform: hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                    transition: 'transform 0.6s',
                                }}
                            >
                                {feature.icon}
                            </div>
                            <Title level={4}>{feature.title}</Title>
                            <Text type="secondary">{feature.description}</Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FeaturesComponent;
