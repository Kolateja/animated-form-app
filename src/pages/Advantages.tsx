import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;
const advantages = [
    {
      title: '100% Plagiarism-Free',
      desc: 'Every assignment is crafted from scratch, ensuring originality and uniqueness.',
      img: 'https://img.icons8.com/ios-filled/100/copy.png',
    },
    {
      title: 'Zero AI Usage',
      desc: 'Our experts provide human-written content, ensuring authenticity and quality.',
      img: 'https://img.icons8.com/ios-filled/100/robot.png',
    },
    {
      title: 'On-Time Delivery',
      desc: 'We value your time and ensure timely delivery of all assignments.',
      img: 'https://img.icons8.com/ios-filled/100/clock.png',
    },
    {
      title: '24/7 Support',
      desc: 'Our support team is available around the clock to assist you with any queries.',
      img: 'https://img.icons8.com/ios-filled/100/help.png',
    },
    {
      title: 'Secure Payment',
      desc: 'We offer multiple secure payment options for a hassle-free experience.',
      img: 'https://img.icons8.com/ios-filled/100/money-transfer.png'

    },
  ];
  


const Advantages: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <Row gutter={[16, 16]} justify="center">
                {advantages.map((item, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                        <Card
                            hoverable
                            cover={
                                <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                                  <img
                                    alt={item.title}
                                    src={item.img}
                                    style={{ height: 60, width: 60 }}
                                  />
                                </div>
                              }
                              
                            // cover={<img alt={item.title} src={item.img} style={{ height: 200, objectFit: 'cover' }} />}
                        >
                            <Card.Meta title={item.title} description={item.desc} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Advantages;
