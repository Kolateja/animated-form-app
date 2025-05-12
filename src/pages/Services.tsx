import React from "react";
import { Row, Col, List, Typography } from "antd";
import '../assets/css/services.css';
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const servicesData: string[][] = [
    [
        "Assignment Help",
        "Academic Writing",
        "Homework Help",
        "Research Paper Writing Help",
        "Case Study Help",
        "Coursework Help",
        "Thesis Help",
        "Narrative Writing",
    ],
    [
        "Dissertation Help",
        "Statistical Analysis",
        "Proposal Writing Service",
        "Manuscript Writing Service",
        "Editing and Proofreading Service",
        "Essay Writing Service",
        "Practical Assignments Help",
        "Capstone Projects",
    ],
    [
        "CDR Reports",
        "Write My Paper",
        "Lab Report",
        "Video Solutions",
        "Speech Writing",
        "Project Report Writing",
        "Take My Online Exam",
        "PowerPoint Presentation Service",
    ],
];

const Services: React.FC = () => {
    return (
        <AnimatedPage>
            <section id="services" style={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 16,
                margin: '0 auto',
                borderRadius: 22,
                width: '100vw' // make it fill the wrapper
            }}>
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header className="section-header">
                        <div className="center-content">
                            <Title level={2} style={{ color: "white" }}>Our Services</Title>
                            <Paragraph style={{ color: "#f0f0f0", maxWidth: 700, margin: "0 auto", fontSize: "18px" }}>
                                Unlock the power of words with our online writing services, where
                                expertise meets creativity to craft compelling content for your
                                success.
                            </Paragraph>
                        </div>
                    </header>
                </motion.div>

                <div className="container">
                    <Row gutter={[16, 16]} className="services-list" justify="center">
                        {servicesData.map((group, idx) => (
                            <Col span={8} key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                >
                                    <List
                                        className="custom-list"
                                        bordered
                                        dataSource={group}
                                        renderItem={(item) => (
                                            <List.Item className="custom-list-item">{item}</List.Item>
                                        )}
                                    />
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Services;
