import React from 'react';
import { Row, Col, Card } from 'antd';
import './WhyChooseUs.css'; // Assuming you have your CSS styles here

const WhyChooseUs: React.FC = () => {
    const items = [
        {
            title: 'Rating',
            image: '/assets/img/why-to-choose-us-images/rating.png',
            bgColor: 'linear-gradient(135deg, #4169e1, #00ffff)'
        },
        {
            title: '2000+ Orders Delivered',
            image: '/assets/img/why-to-choose-us-images/order-delivered.png',
            bgColor: 'linear-gradient(135deg, #ff4500, #ff69b4)'
        },
        {
            title: 'PhD Writers',
            image: '/assets/img/why-to-choose-us-images/phd-writers.png',
            bgColor: 'linear-gradient(135deg, #800080, #008080)'
        },
        {
            title: 'Offers',
            image: '/assets/img/why-to-choose-us-images/offers.png',
            bgColor: 'darkcyan'
        },
        // Add more items as needed
    ];

    return (
        <section id="why-to-choose-us">
            <div className="container">
                <header className="section-header">
                    <h4 style={{ color: '#0f52ba' }}>Why to choose us?</h4>
                    <p>Struggling with assignments? We offer top-notch, reliable academic help to alleviate stress and boost your grades. Trust our expert tutors to guide you towards success.</p>
                </header>
                <Row gutter={[16, 16]}>
                    {items.map((item, index) => (
                        <Col lg={6} md={8} sm={12} xs={24} key={index}>
                            <Card
                                hoverable
                                style={{
                                    textAlign: 'center',
                                    background: item.bgColor,
                                    borderRadius: '10px',
                                    border: '1px solid',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '15px' }}
                                />
                                <p className="card-title"><strong>{item.title}</strong></p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default WhyChooseUs;
