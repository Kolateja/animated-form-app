import React from 'react';
import { Card, Button, Row, Col, Typography } from 'antd';
import type { FC } from 'react';

const { Title, Paragraph } = Typography;

interface Sample {
    image: string;
    title: string;
    sampleFile: string;
}

interface SamplesProps {
    samplesList: Sample[];
}

const Samples: FC<SamplesProps> = ({ samplesList }) => {
    return (
        <div>
            {/* Header Section */}
            <div className="py-5 border-bottom blog-home-wel-sec" style={{ background: '#fafafa' }}>
                <div className="container blog-home-wel-container" style={{ textAlign: 'center', margin: '2rem auto' }}>
                    <Title level={2}>Welcome to the Samples Section of Assignment Linkers!</Title>
                    <Paragraph style={{ fontSize: '16px' }}>
                        Browse through our selection of samples and take the first step towards enhancing your learning experience today.
                    </Paragraph>
                </div>
            </div>

            {/* Samples List */}
            <div className="container blog-container" style={{ padding: '2rem 0' }}>
                <Row gutter={[16, 16]}>
                    {samplesList.map((sample, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card
                                hoverable
                                cover={<img alt={sample.title} src={`/assets/uploads/samples/${sample.image}`} style={{ height: 200, objectFit: 'cover' }} />}
                            >
                                <Title level={5}>{sample.title}</Title>
                                <Button type="primary" href={`/samples/viewsample/${sample.sampleFile}`} block>
                                    Download Now
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Samples;