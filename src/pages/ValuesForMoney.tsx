import React from 'react';
import { Layout, Typography, Button, Space, List } from 'antd';
import { Helmet } from 'react-helmet';

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

const ValuesForMoney: React.FC = () => {
    const listData = [
        'Original work',
        'Time saver',
        'Better score',
        'Low Price',
        'Best quality.',
    ];

    return (
        <Layout>
            {/* Meta Tags */}
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Assignment Linkers</title>
                <meta
                    name="keywords"
                    content="Assignment Help, Academic Writing, Homework Help, Research Paper Writing Help, Case Study Help, Coursework Help, Thesis Help, Narrative Writing, Dissertation Help, Statistical Analysis, Proposal Writing Service, Manuscript Writing Service, Editing and Proofreading Service, Essay Writing Service, Practical Assignments Help, Capstone Projects, CDR Reports, Write My Paper, Lab Report, Video Solutions, Speech Writing, Project Report Writing, Take My Online Exam, PowerPoint Presentation Service, professional writing services, academic assistance, custom writing services"
                />
                <meta
                    name="description"
                    content="Professional writing services company offering a wide range of academic and professional writing assistance. Our services include Assignment Help, Academic Writing, Homework Help, Research Paper Writing, Case Study Help, Coursework Help, Thesis and Dissertation Help, Statistical Analysis, Proposal Writing, Manuscript Writing, Editing and Proofreading, Essay Writing, Practical Assignments, Capstone Projects, CDR Reports, Lab Reports, Video Solutions, Speech Writing, Project Report Writing, Online Exam Assistance, and PowerPoint Presentation Services. Achieve your academic and professional goals with expert support and high-quality writing solutions."
                />
                {/* Favicons */}
                <link href="/assets/img/favicon/favicon-16x16.png" rel="icon" />
                <link href="/assets/img/favicon/favicon-32x32.png" rel="icon" />
                <link href="/assets/img/favicon/apple-touch-icon.png" rel="icon" />
                <link href="/assets/img/favicon/android-chrome-192x192.png" rel="icon" />
                <link href="/assets/img/favicon/android-chrome-512x512.png" rel="icon" />
            </Helmet>

            {/* Header */}
            

            {/* Main Content */}
            <Content>
                <section id="refund_policy" className="refund-policy-section">
                    <div className="container">
                        <div className="section-header">
                            <Title level={4}>Value For Money Guaranteed</Title>
                        </div>

                        <Paragraph>
                            Our assignment writing service, staffed by knowledgeable experts, ensures students receive top-quality, genuine content for their assignments, ultimately leading to achieving A+ grades. We offer excellent value for money, with dedicated experts available to address any doubts or queries promptly. Timely delivery is guaranteed, reflecting our commitment to customer satisfaction and reliability. Our team comprises intellectual experts proficient in over 50 subjects, delivering over 3000 assignments, all original and punctual.
                        </Paragraph>
                        <Title level={5}>
                            <strong>We offer 100% value for money services on assignments and academic writing.</strong>
                        </Title>
                        <List
                            dataSource={listData}
                            renderItem={(item) => (
                                <List.Item>
                                    <span>&#10004; {item}</span>
                                </List.Item>
                            )}
                            style={{ listStyleType: 'none' }}
                        />
                    </div>
                </section>

                {/* WhatsApp Chat (This could be a separate component or service) */}
                <div className="whatsapp-chat">
                    {/* Insert WhatsApp chat component */}
                </div>
            </Content>

      
        </Layout>
    );
};

export default ValuesForMoney;
