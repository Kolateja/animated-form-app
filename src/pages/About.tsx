// src/pages/About.tsx
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
// import './About.css';
// Remove this (it's causing the error)
import '../assets/css/aboutus.css'; // Adjust the path based on file location



const { Title, Paragraph } = Typography;
const features = [
  { title: 'Best experienced organisation', img: '/assets/img/aboutus/experiance-organization.png' },
  { title: 'Team of expert writers', img: '/assets/img/aboutus/team-professional-writers.png' },
  { title: 'Award winners', img: '/assets/img/aboutus/award-winners.png' },
  { title: 'Service oriented', img: '/assets/img/aboutus/service-oriented.png' },
  { title: 'Values oriented', img: '/assets/img/aboutus/values-oriented-removebg-preview.png' },
  { title: 'Passionate', img: '/assets/img/aboutus/passionate.png' },
  { title: 'Not money minded', img: '/assets/img/aboutus/affordable.png' },
  { title: 'Trustworthy', img: '/assets/img/aboutus/trustworthy.png' },
];

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="about-container">
        <section className="about-section">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title level={3}>Who we are?</Title>
            <Paragraph>
              Struggling with assignments? We offer top-notch, reliable academic help to alleviate stress
              and boost your grades. Trust our expert writers to guide you towards success.
            </Paragraph>
          </motion.div>

          <Row gutter={[24, 24]} justify="center">
            {features.map((feature, idx) => (
              <Col xs={12} sm={8} md={6} key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card bordered={false} className="about-card-feature" hoverable>
                    <img src={feature.img} alt={feature.title} width="100%" style={{ maxWidth: 120 }} />
                    <Paragraph className="feature-title">{feature.title}</Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>

        <section className="about-section">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title level={3}>Our Presence</Title>
          </motion.div>
          <motion.div
            className="about-global-img"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/img/aboutus/globalpresence.png" alt="Global Presence" style={{ width: '100%', maxWidth: 800 }} />
          </motion.div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
