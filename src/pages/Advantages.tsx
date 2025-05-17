import React, { useState } from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;
const advantages = [
  {
    title: '100% Plagiarism-Free',
    desc: 'Every assignment is crafted from scratch, ensuring originality and uniqueness.',
    img: 'https://img.icons8.com/ios-filled/100/copy.png',
    color: '#722ed1',
  },
  {
    title: 'Zero AI Usage',
    desc: 'Our experts provide human-written content, ensuring authenticity and quality.',
    img: 'https://img.icons8.com/ios-filled/100/robot.png',
    color: '#eb2f96',
  },
  {
    title: 'On-Time Delivery',
    desc: 'We value your time and ensure timely delivery of all assignments.',
    img: 'https://img.icons8.com/ios-filled/100/clock.png',
    color: '#52c41a',
  },
  {
    title: '24/7 Support',
    desc: 'Our support team is available around the clock to assist you with any queries.',
    img: 'https://img.icons8.com/ios-filled/100/help.png',
    color: '#eb2f96',
  },
  {
    title: 'Secure Payment',
    desc: 'We offer multiple secure payment options for a hassle-free experience.',
    img: 'https://img.icons8.com/ios-filled/100/money-transfer.png',
    color: '#13c2c2',

  },
  {
    title: 'Time and Cost-Efficient:',
    desc:
      'Save time and money with our affordable services that deliver high-quality results within your deadlines.',
    img: 'https://img.icons8.com/ios-filled/100/cheap.png',
    color: '#722ed1', // Represents time & cost efficiency
  },
  {
    title: 'Customised Learnings:',
    desc:
      'Receive personalized solutions and learning support that aligns with your course, goals, and individual learning pace.',
    img: 'https://img.icons8.com/ios-filled/96/learning.png',
    color: '#13c2c2', // Represents learning customization
  },
  {
    title: 'Score Improvement:',
    desc:
      'Enhance your academic performance with strategically written content designed to help you achieve better grades.',
    img: 'https://img.icons8.com/ios-filled/96/goal.png',
    color: '#52c41a', // Represents improvement/goal achievement
  },
];



const Advantages: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ padding: '2rem' }}>
      <Row gutter={[16, 16]} justify="center">
        {advantages.map((item, index) => (
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
                  <Title level={5} style={{
                    marginBottom: 8,
                    color: hoveredIndex === index ? item.color : 'inherit',
                    transition: 'color 0.3s',
                  }}>
                    {item.title}
                  </Title>
                }
                description={<Paragraph style={{
                  fontSize: 12,
                  color: hoveredIndex === index ? item.color : 'inherit',
                  transition: 'color 0.3s',
                }}>{item.desc}</Paragraph>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Advantages;
