import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface CoreValue {
    title: string;
    description: string;
    icon: string;
}

const coreValues: CoreValue[] = [
    {
        title: 'Punctuality',
        description:
            'Receive your assignments within the deadline. Our academic scholars can complete complex tasks within the time limit.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/clock.png',
    },
    {
        title: 'Safety & Security',
        description:
            'We use secure SSL-encrypted payment gateways to provide complete security. All your personal details are safe with us.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/lock.png',
    },
    {
        title: 'Quality',
        description:
            'Our academic writers follow all academic guidelines. We promise 100% plagiarism-free assignments devoid of errors.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/medal.png',
    },
    {
        title: 'Transparency',
        description:
            'We maintain complete transparency in terms of pricing. Don’t worry about encountering hidden charges on our website.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/visible.png',
    },
];

const CoreValues: React.FC = () => {
    return (
        <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
            <Title level={2} style={{ color: '#0f52ba', marginBottom: '2rem' }}>
                Our Core Values
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
                            <img
                                src={value.icon}
                                alt={value.title}
                                style={{ width: '64px', height: '64px', marginBottom: '1rem' }}
                            />
                            <Title level={4} style={{ color: '#0f52ba' }}>
                                {value.title}
                            </Title>
                            <Paragraph style={{ color: '#555' }}>{value.description}</Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CoreValues;
