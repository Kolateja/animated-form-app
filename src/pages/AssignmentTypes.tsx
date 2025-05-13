import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
    EditOutlined,
    ReadOutlined,
    FileTextOutlined,
    ExperimentOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface AssignmentType {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const assignmentTypes: AssignmentType[] = [
    {
        title: 'Essay Help',
        description:
            'Writing an essay assignment becomes a piece of cake when you can hire our scholars to assist you with the task. These professionals can help you choose an essay topic, compose the outline, and conduct research.',
        icon: <EditOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    },
    {
        title: 'Homework Help',
        description:
            'Our assignment help service provider is renowned across the country for assisting students with all kinds of homework. That’s because MyAssignmentHelp hires the best scholars from every academic field imaginable.',
        icon: <ReadOutlined style={{ fontSize: 32, color: '#faad14' }} />,
    },
    {
        title: 'Dissertation Help',
        description:
            'Our dissertation writing service can make all your writing troubles disappear. Hiring our assignment help experts means you get excellent dissertation proposals, literature reviews, data collection, and writing guidance.',
        icon: <FileTextOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
    },
    {
        title: 'Coursework Help',
        description:
            'Rely on our custom assignment help experts when your coursework becomes too much to handle. These professionals can assist you with different types of topics, editing, proofreading, and more so you can improve.',
        icon: <ExperimentOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
    },
];

const AssignmentTypes: React.FC = () => {
    return (
        <div style={{ padding: '40px 24px', backgroundColor: '#fff' }}>
            <Title level={2} style={{ textAlign: 'center', fontWeight: 700 }}>
                High-Quality Assignment Assistance For All Assignment Types
            </Title>
            <Text style={{ display: 'block', textAlign: 'center', marginBottom: 32 }}>
                Get excellent writing help from reputed assignment writers in the US.
            </Text>

            <Row gutter={[24, 24]} justify="center">
                {assignmentTypes.map((type, idx) => (
                    <Col key={idx} xs={24} sm={12} md={12} lg={6}>
                        <Card
                            bordered
                            hoverable
                            style={{ height: '100%', textAlign: 'center' }}
                        >
                            <div style={{ marginBottom: 16 }}>{type.icon}</div>
                            <Title level={4}>{type.title}</Title>
                            <Text type="secondary">{type.description}</Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default AssignmentTypes;
