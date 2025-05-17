import React, { useState } from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const achievements = [
  {
    title: '5000+ Academic Writers',
    desc: 'Discover top experts from all academic fields ready to tackle any type of assignment you want.',
    img: 'https://img.icons8.com/ios-filled/100/conference-call.png',
    color: '#52c41a',
  },
  {
    title: '10+ Years of Experience',
    desc: 'Our decade-long experience in this industry allows us to solve students’ problems within seconds.',
    img: 'https://img.icons8.com/ios-filled/100/medal.png',
    color: '#eb2f96',
  },
  {
    title: '100+ Subjects Covered',
    desc: 'We cover all types of subjects, from English to programming. Master all subjects under our SMEs.',
    img: 'https://img.icons8.com/ios-filled/100/books.png',
    color: '#722ed1',
  },
  {
    title: '23K+ Orders Delivered',
    desc: 'We have a 99% success rate in delivering essays, research papers, and all types of assignments.',
    img: 'https://img.icons8.com/ios-filled/100/delivery.png',
    color: '#13c2c2',
  },
];

const Achievements: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ padding: '2rem' }}>
      <Row gutter={[16, 16]} justify="center">
        {achievements.map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderRadius: 12,
                boxShadow: `0 6px 20px ${item.color}40`,
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
                  >
                    <img
                      alt={item.title}
                      src={item.img}
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
                  <Title
                    level={5}
                    style={{
                      marginBottom: 8,
                      color: hoveredIndex === index ? item.color : 'inherit',
                      transition: 'color 0.3s',
                    }}
                  >
                    {item.title}
                  </Title>
                }
                description={
                  <Paragraph
                    style={{
                      fontSize: 12,
                      color: hoveredIndex === index ? item.color : 'inherit',
                      transition: 'color 0.3s',
                    }}
                  >
                    {item.desc}
                  </Paragraph>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Achievements;
