import React from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import { Helmet } from 'react-helmet';
import './RefundPolicy.css'; // Your custom styles

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const SatisifactionPolicies: React.FC = () => {
    return (
        <Layout>
            {/* Meta Tags */}
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Assignment Linkers - Refund Policy</title>
                <meta name="keywords" content="Assignment Help, Academic Writing, Homework Help, Research Paper Writing Help, Case Study Help, Coursework Help, Thesis Help, Narrative Writing, Dissertation Help, Statistical Analysis, Proposal Writing Service, Manuscript Writing Service, Editing and Proofreading Service, Essay Writing Service, Practical Assignments Help, Capstone Projects, CDR Reports, Write My Paper, Lab Report, Video Solutions, Speech Writing, Project Report Writing, Take My Online Exam, PowerPoint Presentation Service, professional writing services, academic assistance, custom writing services" />
                <meta name="description" content="Professional writing services company offering a wide range of academic and professional writing assistance." />
                {/* Favicons */}
                <link href="/assets/img/favicon/favicon-16x16.png" rel="icon" />
                <link href="/assets/img/favicon/favicon-32x32.png" rel="icon" />
                <link href="/assets/img/favicon/apple-touch-icon.png" rel="icon" />
                <link href="/assets/img/favicon/android-chrome-192x192.png" rel="icon" />
                <link href="/assets/img/favicon/android-chrome-512x512.png" rel="icon" />
            </Helmet>

            {/* Header */}
            <Header className="header">
                {/* Insert header content here if necessary */}
            </Header>

            {/* Main Content */}
            <Content>
                <section id="refund_policy" className="refund-policy-section">
                    <div className="container">
                        <div className="section-header">
                            <Title level={4}>Satisfactory Policy</Title>
                        </div>

                        <div className="policy-details">
                            <Paragraph>
                                A Promise that our customers will be happy with the services they receive from us
                            </Paragraph>
                            <Paragraph>
                                We will understand our customer needs and expectations.
                            </Paragraph>
                            <Paragraph>
                                We deliver good behaviour, service, greeting, and facilities to our customers.
                            </Paragraph>
                        </div>

                        <Space direction="vertical" style={{ marginTop: '20px' }}>
                            <Button type="primary">Contact Us</Button>
                        </Space>
                    </div>
                </section>

                {/* WhatsApp Chat (This could be a separate component or service) */}
                <div className="whatsapp-chat">
                    {/* Insert WhatsApp chat component */}
                </div>
            </Content>

            {/* Footer */}
            <Footer className="footer">
                {/* Insert footer content here if necessary */}
            </Footer>
        </Layout>
    );
};

export default SatisifactionPolicies;
