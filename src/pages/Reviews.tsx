import React from 'react';
import { Carousel, Row, Col, Rate, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import FeedbackForm from './FeedbackForm';

const { Title, Paragraph } = Typography;

interface Review {
    name: string;
    orderId: string;
    text: string;
    rating: number;
}

const reviews: Review[] = [
    { name: 'Arjun', orderId: 'ALO - 4568', text: 'Excellent service...', rating: 4 },
    { name: 'Aishwarya', orderId: 'ALO - 4567', text: 'Assignment Linkers exceeded...', rating: 4 },
    { name: 'Aditya', orderId: 'ALO - 1478', text: 'Superb support from...', rating: 4 },
    { name: 'Kavya', orderId: 'ALO - 45678', text: 'Impressive work...', rating: 4 },
    { name: 'Karthik', orderId: 'ALO - 4562', text: 'Assignment Linkers proved...', rating: 4 },
    { name: 'Divya', orderId: 'ALO - 4578', text: 'Top-notch service...', rating: 4 },
    { name: 'Vikram', orderId: 'ALO - 4568', text: 'Outstanding support...', rating: 4 },
    { name: 'Priya', orderId: 'ALO - 4567', text: 'Highly satisfied...', rating: 4 },
];

const chunkArray = (arr: Review[], size: number): Review[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

const Reviews: React.FC = () => {
    const reviewChunks = chunkArray(reviews, 2); // 2 per slide

    return (
        <div
            style={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: '40px 20px',
                backgroundColor: '#f9f9f9',
                width: '100vw'
            }}
        >
            <FeedbackForm />
            <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
                Our Student's <b>Feedback</b>
            </Title>

            <Carousel autoplay dots swipeToSlide style={{ minHeight: 300 }}>
                {reviewChunks.map((chunk, index) => (
                    <div key={index}>
                        <Row gutter={[24, 24]} justify="center">
                            {chunk.map((review, i) => (
                                <Col
                                    key={i}
                                    xs={24}
                                    sm={24}
                                    md={12}
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <div
                                        style={{
                                            width: '100%',
                                            maxWidth: 500,
                                            backgroundColor: '#fff',
                                            padding: 24,
                                            borderRadius: 12,
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            minHeight: 220,
                                        }}
                                    >
                                        <Paragraph style={{ fontSize: 16, color: '#333' }}>
                                            “{review.text}”
                                        </Paragraph>
                                        <div>
                                            <strong style={{ fontSize: 14 }}>{review.name}</strong>
                                            <div style={{ fontSize: 13, color: '#888' }}>
                                                Order Id: {review.orderId}
                                            </div>
                                            <Rate
                                                disabled
                                                defaultValue={review.rating}
                                                character={<StarOutlined />}
                                                style={{ marginTop: 8 }}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Reviews;
