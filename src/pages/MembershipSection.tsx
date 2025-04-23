import React from 'react';
import { Row, Col, Card, Image, Typography } from 'antd';
import './MembershipSection.css'; // Custom styles

const { Title, Text } = Typography;

const MembershipSection: React.FC = () => {
    return (
        <section id="membership-section">
            <div className="container">
                <div className="hero-section">
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={12} lg={5}>
                            <div className="hero-section-image">
                                <Image src="/assets/img/membership/image-removebg-preview.png" alt="Hero Image" preview={false} />
                                <Image src="/assets/img/offers/fireworks.gif" alt="Fireworks" preview={false} />
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={7}>
                            <div className="hero-section-content">
                                <Title level={1}>Join Assignment Linkers <br />VIP Membership</Title>
                                <Title level={3}>Upgrade to VIP for Premium Perks and Priority Access!</Title>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="membership-details mt-3">
                    <div className="container">
                        <Title level={3}>Be a proud privilege member of AL & get access to world of rewards/prizes</Title>
                        <Row gutter={[16, 16]} justify="center" className="mt-5">
                            <Col xs={24} sm={12} md={8} lg={4}>
                                <Card
                                    hoverable
                                    cover={<Image alt="Diamond Membership" src="/assets/img/membership/diamond.jpeg" />}
                                >
                                    <Text strong>Diamond Membership</Text>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={4}>
                                <Card
                                    hoverable
                                    cover={<Image alt="Platinum Membership" src="/assets/img/membership/platinum.jpeg" />}
                                >
                                    <Text strong>Platinum Membership</Text>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={4}>
                                <Card
                                    hoverable
                                    cover={<Image alt="Gold Membership" src="/assets/img/membership/gold.jpeg" />}
                                >
                                    <Text strong>Gold Membership</Text>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={4}>
                                <Card
                                    hoverable
                                    cover={<Image alt="Bronze Membership" src="/assets/img/membership/bronze.jpeg" />}
                                >
                                    <Text strong>Bronze Membership</Text>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} md={8} lg={4}>
                                <Card
                                    hoverable
                                    cover={<Image alt="Silver Membership" src="/assets/img/membership/silver-ring.jpg" />}
                                >
                                    <Text strong>Silver Membership</Text>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipSection;
