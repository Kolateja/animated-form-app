import React from 'react';
import { Card, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const CareerPage: React.FC = () => {
    return (
        <div className="container">
            <div className="hero-section">
                <Row>
                    <Col span={16}>
                        <h3><strong>JOIN US</strong></h3>
                        <h5><strong>Join our vibrant community of knowledge enthusiasts, where collaboration sparks innovation.</strong></h5>
                        <h6>Together, let's turn ideas into impactful realities. Your unique perspective is the key to our collective success.</h6>
                    </Col>
                    <Col span={8}>
                        <img src="./assets/img/career/careers.png" alt="careers" className="img-fluid" />
                    </Col>
                </Row>
            </div>

            <div className="why-choose-assignment-linkers">
                <Row gutter={[16, 16]}>
                    <div className="section-header">
                        <h4>Why Should You Choose Assignment Linkers?</h4>
                    </div>

                    <div className="why-assignment-linkers-content mt-4">
                        <Row gutter={[16, 16]}>
                            <Col span={8}>
                                <Card>
                                    <div className="card-body">
                                        <SearchOutlined />
                                        <span>Huge learning opportunity as you get to Learn and Train directly under the supervision of experienced team leaders who have seen discussions becoming products and services.</span>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card>
                                    <div className="card-body">
                                        <SearchOutlined />
                                        <span>Become a part of the team that works passionately and tirelessly to create solutions for different problems in the E-learning sector.</span>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card>
                                    <div className="card-body">
                                        <SearchOutlined />
                                        <span>Interact with the founding team members to share your ideas and create an impact.</span>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card>
                                    <div className="card-body">
                                        <SearchOutlined />
                                        <span>We value our employees, and the efforts they put day & night tirelessly.</span>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card>
                                    <div className="card-body">
                                        <SearchOutlined />
                                        <span>We are committed to helping employees grow and succeed within our company culture.</span>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default CareerPage;
