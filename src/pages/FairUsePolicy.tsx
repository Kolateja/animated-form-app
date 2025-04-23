import React from 'react';
import { Typography, List, Layout } from 'antd';
import './FairUsePolicy.css'; // Optional: Put any custom styles here

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const FairUsePolicy: React.FC = () => {
    const policies = [
        "Plagiarism occurs when someone uses another person's work, words, or ideas without credit. Plagiarism is both an academic standard violation and a matter of academic integrity.",
        "If you decide to submit any of the papers as your own work, you will only harm yourself by losing the knowledge that you would have gained if they were used properly.",
        "By using this, you agree not to claim authorship or ownership of copyright for any work you get from the website or submit it to your academic institution as your own. So, please verify originality by referring to our fair use policy section and double-checking with applicable software.",
        "You acknowledge, agree, and accept that our papers are samples designed to assist you in understanding the academic topic. We reserve the right to solely distribute the papers and grant you non-exclusive permission to use them in a non-commercial capacity without further distribution.",
    ];

    return (
        <Layout className="fair-use-policy-layout">
            <Content style={{ padding: '2rem', maxWidth: 1000, margin: '0 auto' }}>
                <div className="section-header">
                    <Title level={4}>Fair Use Policy</Title>
                </div>

                <Paragraph>
                    We deal everything fairly and straightforward. This policy outlines the appropriate usage of our resources and offers guidance to prevent misuse. By utilizing the academic resources, samples, materials, blogs, and papers provided on our site for their intended purpose, you can maximize your learning experience and enhance your knowledge. It's crucial to note that all information obtained from us should be strictly used for research purposes and not for academic dishonesty. Our writers aim to serve as models, presenting fundamental concepts to assist you in your independent work.
                </Paragraph>

                <Title level={5}>Assuring Fair Use</Title>

                <List
                    dataSource={policies}
                    renderItem={(item) => (
                        <List.Item style={{ border: 'none', padding: 0 }}>
                            <span style={{ marginRight: '0.5rem' }}>✔</span> {item}
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    );
};

export default FairUsePolicy;
