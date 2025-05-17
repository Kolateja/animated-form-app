import React, { useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface CoreValue {
    title: string;
    description: string;
    icon: string;
    color: string
}

const coreValues: CoreValue[] = [
    {
        title: 'Punctuality',
        description:
            'Receive your assignments within the deadline. Our academic scholars can complete complex tasks within the time limit.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/clock.png',
        color: '#eb2f96',

    },
    {
        title: 'Safety & Security',
        description:
            'We use secure SSL-encrypted payment gateways to provide complete security. All your personal details are safe with us.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/lock.png',
        color: '#13c2c2',

    },
    {
        title: 'Quality',
        description:
            'Our academic writers follow all academic guidelines. We promise 100% plagiarism-free assignments devoid of errors.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/medal.png',
        color: '#722ed1', // Represents time & cost efficiency

    },
    {
        title: 'Transparency',
        description:
            'We maintain complete transparency in terms of pricing. Don’t worry about encountering hidden charges on our website.',
        icon: 'https://img.icons8.com/ios-filled/100/000000/visible.png',
        color: '#52c41a', // Represents improvement/goal achievement

    },
];

const CoreValues: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
            <Title level={2} style={{ color: '#0f52ba', marginBottom: '2rem' }}>
                Our Core Values
            </Title>
            <Row gutter={[24, 24]} justify="center">

                {coreValues.map((item, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                        <Card
                            hoverable
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                borderRadius: 12,
                                boxShadow: `0 6px 20px ${item.color}40`, // add alpha to soften color
                                transition: 'transform 0.5s',
                            }}
                            bodyStyle={{ textAlign: 'center', paddingTop: 0 }}
                            cover={
                                <div
                                    style={{
                                        textAlign: 'center',
                                        paddingTop: '1.5rem',
                                        perspective: '1000px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 80,
                                            height: 80,
                                            margin: '0 auto',
                                            transformStyle: 'preserve-3d',
                                            transition: 'transform 0.6s',
                                            transform:
                                                hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                        }}
                                        className="flip-image"
                                    >
                                        <img
                                            alt={item.title}
                                            src={item.icon}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                borderRadius: '50%',
                                                border: `2px solid ${item.color}`,
                                                background: '#fff',
                                            }}
                                        />
                                    </div>
                                </div>
                            }

                        >
                            <Card.Meta
                                title={
                                    <Title level={5} style={{
                                        marginBottom: 8,
                                        color: hoveredIndex === index ? item.color : 'inherit',
                                        transition: 'color 0.3s',
                                    }}>
                                        {item.title}
                                    </Title>
                                }
                                description={<Paragraph style={{
                                    marginBottom: 12,
                                    color: hoveredIndex === index ? item.color : 'inherit',
                                    transition: 'color 0.3s',
                                }}>{item.description}</Paragraph>}
                            />
                        </Card>
                    </Col>
                ))}

            </Row>
        </div>
    );
};

export default CoreValues;
