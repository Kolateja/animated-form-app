import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Typography, message, Spin } from 'antd';
import Header from './Header';
import Footer from './FooterSection';
import ApiService from '../services/ApiService';

const { Title, Paragraph } = Typography;

interface Sample {
    id: number;
    title: string;
    category: string;
    imageUrl: string | null;
    pdfUrl: string | null;
}

const Samples: React.FC = () => {
    const [samples, setSamples] = useState<Sample[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchSamples = async () => {
        setLoading(true);
        try {
            const res: any = await ApiService.get('/samples');
            if (res.success) {
                setSamples(res.data);
            } else {
                message.error(res.message || 'Failed to load samples');
            }
        } catch (err) {
            console.error(err);
            message.error('Error fetching samples');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSamples();
    }, []);

    return (
        <>
            {/* <Header /> */}

            {/* Welcome Section */}
            <div style={{
                background: 'linear-gradient(135deg, #1d7db2, #69c0ff)',
                borderRadius: '30px',
                padding: '60px 20px',
                marginBottom: '40px',
                boxShadow: '0 10px 30px rgba(12, 70, 131, 0.1)',
                animation: 'fadeInDown 1s ease-in-out',
                textAlign: 'center',
                width: "100vw"
            }}>
                <div className="container">
                    <Title level={2} style={{
                        color: '#fff',
                        fontSize: '32px',
                        fontWeight: 'bold',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        marginBottom: '20px',
                    }}>
                        Welcome to the Samples Section of Assignment Linkers!
                    </Title>
                    <Paragraph style={{
                        fontSize: '18px',
                        color: '#f0f8ff',
                        width: '800px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                    }}>
                        Browse through our selection of samples and take the first step towards enhancing your learning experience today.
                    </Paragraph>
                </div>

                <style>
                    {`
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
                </style>
            </div>


            {/* Samples List */}
            <div className="container" style={{ padding: '2rem 0' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <Spin size="large" />
                    </div>
                ) : (
                    <Row gutter={[16, 16]}>
                        {samples.map((sample) => (
                            <Col xs={24} sm={12} md={8} key={sample.id}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt={sample.title}
                                            src={sample.imageUrl || '/placeholder.png'}
                                            style={{ height: 200, objectFit: 'cover', width: '100%' }}
                                        />
                                    }
                                >
                                    <Title level={5}>{sample.title}</Title>
                                    <Paragraph type="secondary">{sample.category}</Paragraph>
                                    <Button
                                        type="primary"
                                        block
                                        disabled={!sample.pdfUrl}
                                        onClick={() => sample.pdfUrl && window.open(sample.pdfUrl, '_blank')}
                                    >
                                        {sample.pdfUrl ? 'Download Now' : 'No PDF Available'}
                                    </Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>

            {/* <Footer /> */}
        </>
    );
};

export default Samples;
