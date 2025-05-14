import React from "react";
import { Row, Col, Typography } from "antd";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const groupedServices = [
    {
        title: "Writing",
        items: [
            "Assignment Help",
            "Academic Writing",
            "Homework Help",
            "Research Paper Writing Help",
            "Case Study Help",
            "Coursework Help",
            "Thesis Help",
            "Narrative Writing",
        ],
    },
    {
        title: "Problem Solving",
        items: [
            "Dissertation Help",
            "Statistical Analysis",
            "Proposal Writing Service",
            "Manuscript Writing Service",
            "Editing and Proofreading Service",
            "Essay Writing Service",
            "Practical Assignments Help",
            "Capstone Projects",
        ],
    },
    {
        title: "More Services",
        items: [
            "CDR Reports",
            "Write My Paper",
            "Lab Report",
            "Video Solutions",
            "Speech Writing",
            "Project Report Writing",
            "Take My Online Exam",
            "PowerPoint Presentation Service",
        ],
    },
];

const Services: React.FC = () => {
    return (
        <AnimatedPage>
            <section
                id="services"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "16px",
                    margin: "0 auto",
                    borderRadius: "22px",
                    width: "1500px",
                    backgroundColor: "#1e1e1e", // dark background
                    color: "white",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header style={{ marginBottom: "24px" }}>
                        <Title level={2} style={{ color: "white", marginBottom: 0 }}>
                            Our Services
                        </Title>
                        <Paragraph
                            style={{
                                color: "#f0f0f0",
                                maxWidth: "700px",
                                margin: "12px auto 0",
                                fontSize: "18px",
                            }}
                        >
                            Unlock the power of words with our online writing services, where
                            expertise meets creativity to craft compelling content for your
                            success.
                        </Paragraph>
                    </header>
                </motion.div>

                <div style={{ marginTop: "32px", width: "100%" }}>
                    <Row gutter={[32, 32]} justify="center">
                        {groupedServices.map((group, idx) => (
                            <Col key={group.title} xs={24} sm={12} md={8}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                                >
                                    <div style={{ textAlign: "left", padding: "0 16px" }}>
                                        <Title level={4} style={{ color: "white", marginBottom: "12px" }}>
                                            {group.title}
                                        </Title>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                            {group.items.map((item) => (
                                                <li key={item} style={{ padding: "6px 0" }}>
                                                    <Link
                                                        to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                        style={{
                                                            color: "white",
                                                            textDecoration: "none",
                                                            transition: "color 0.3s",
                                                        }}
                                                        onMouseEnter={(e) =>
                                                            (e.currentTarget.style.color = "#1890ff")
                                                        }
                                                        onMouseLeave={(e) =>
                                                            (e.currentTarget.style.color = "white")
                                                        }
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
