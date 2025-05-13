import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;
const achievements = [
    {
      title: '5000+ Academic Writers',
      desc: 'Discover top experts from all academic fields ready to tackle any type of assignment you want.',
      img: 'https://img.icons8.com/ios-filled/100/conference-call.png',
    },
    {
      title: '10+ Years of Experience',
      desc: 'Our decade-long experience in this industry allows us to solve students’ problems within seconds.',
      img: 'https://img.icons8.com/ios-filled/100/medal.png',
    },
    {
      title: '100+ Subjects Covered',
      desc: 'We cover all types of subjects, from English to programming. Master all subjects under our SMEs.',
      img: 'https://img.icons8.com/ios-filled/100/books.png',
    },
    {
      title: '23K+ Orders Delivered',
      desc: 'We have a 99% success rate in delivering essays, research papers, and all types of assignments.',
      img: 'https://img.icons8.com/ios-filled/100/delivery.png',
    },
  ];
  


const Achievements: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <Row gutter={[16, 16]} justify="center">
                {achievements.map((item, index) => (
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

export default Achievements;
