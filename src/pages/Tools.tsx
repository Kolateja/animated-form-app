import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
    FileSearchOutlined,
    SyncOutlined,
    CalculatorOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text, Link } = Typography;

interface Tool {
    title: string;
    description: string;
    icon: React.ReactNode;
    linkText: string;
}

const tools: Tool[] = [
    {
        title: 'Plagiarism Checker',
        description: 'Submit plagiarism-free work with our AI plagiarism-checking tool. Unique solutions are guaranteed.',
        icon: <FileSearchOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
        linkText: 'Check Now',
    },
    {
        title: 'Paraphrase Tool',
        description: 'Avoid the hassle of rewriting your entire paper by using our paraphrase tool for quick solutions.',
        icon: <SyncOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
        linkText: 'Check Now',
    },
    {
        title: 'Equation Solver',
        description: 'Solve all complex mathematical equations in the blink of an eye thanks to our equation solver.',
        icon: <CalculatorOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
        linkText: 'Check Now',
    },
    {
        title: 'Spell Checker',
        description: 'Don’t let incorrect spellings keep you from top grades. Try our spell checker for perfect writing!',
        icon: <CheckCircleOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
        linkText: 'Check Now',
    },
];

const Tools: React.FC = () => {
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
                            style={{
                                height: '100%',
                                textAlign: 'center',
                                borderRadius: 8,
                            }}
                        >
                            <div style={{ marginBottom: 16 }}>{tool.icon}</div>
                            <Title level={4}>{tool.title}</Title>
                            <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
                                {tool.description}
                            </Text>
                            {/* <Link>{tool.linkText}</Link> */}
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Tools;
