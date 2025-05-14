import React, { useState } from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
    FileSearchOutlined,
    SyncOutlined,
    CalculatorOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface Tool {
    title: string;
    description: string;
    icon: React.ReactNode;
    linkText: string;
    color: string;
}

const tools: Tool[] = [
    {
        title: 'Plagiarism Checker',
        description: 'Submit plagiarism-free work with our AI plagiarism-checking tool. Unique solutions are guaranteed.',
        icon: <FileSearchOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
        linkText: 'Check Now',
        color: '#13c2c2',
    },
    {
        title: 'Paraphrase Tool',
        description: 'Avoid the hassle of rewriting your entire paper by using our paraphrase tool for quick solutions.',
        icon: <SyncOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
        linkText: 'Check Now',
        color: '#eb2f96',
    },
    {
        title: 'Equation Solver',
        description: 'Solve all complex mathematical equations in the blink of an eye thanks to our equation solver.',
        icon: <CalculatorOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
        linkText: 'Check Now',
        color: '#faad14',
    },
    {
        title: 'Spell Checker',
        description: 'Don’t let incorrect spellings keep you from top grades. Try our spell checker for perfect writing!',
        icon: <CheckCircleOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
        linkText: 'Check Now',
        color: '#1890ff',
    },
];

const Tools: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div style={{ padding: '40px 24px', backgroundColor: '#fff' }}>
            <Title level={2} style={{ textAlign: 'center', fontWeight: 700 }}>
                Assignment Help & Writing Tools
            </Title>
            <Text style={{ display: 'block', textAlign: 'center', marginBottom: 32 }}>
                Assignment Help & Writing Tools
            </Text>

            <Row gutter={[24, 24]} justify="center">
                {tools.map((tool, idx) => (
                    <Col key={idx} xs={24} sm={12} md={12} lg={6}>
                        <Card
                            bordered
                            hoverable
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                minHeight: 200,
                                textAlign: 'center',
                                boxShadow: `0 4px 20px ${tool.color}33`,
                                borderRadius: 10,
                                transition: 'transform 0.3s',
                            }}
                        >
                            <div
                                style={{
                                    display: 'inline-block',
                                    marginBottom: 16,
                                    transform: hoveredIndex === idx ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                    transition: 'transform 0.6s',
                                }}
                            >
                                {tool.icon}
                            </div>
                            <Title level={4}>{tool.title}</Title>
                            <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
                                {tool.description}
                            </Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Tools;
