import React from "react";
import { Row, Col, List, Typography } from "antd";
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
        <section id="services" style={{ padding: "60px 20px", background: "#fff" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <Title level={4}>Our Services</Title>
                    <Paragraph>
                        Unlock the power of words with our online writing services, where
                        expertise meets creativity to craft compelling content for your
                        success.
                    </Paragraph>
                </div>

                <Row gutter={[24, 24]}>
                    {servicesData.map((group, idx) => (
                        <Col xs={24} md={12} lg={8} key={idx}>
                            <List
                                bordered
                                dataSource={group}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Services;
