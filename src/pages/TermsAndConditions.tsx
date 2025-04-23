import React from 'react';
import { Layout, Typography, List } from 'antd';
import '../assets/css/common.css';
import '../assets/css/refund_policy.css';
import { Footer, Header } from 'antd/es/layout/layout';
import WhatsAppCallButton from './WhatsAppCallButton';


const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TermsAndConditions: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Content id="main" style={{ background: '#fff' }}>
                <section id="refund_policy" className="container">
                    <div className="section-header">
                        <Title level={4}>Terms & Conditions</Title>
                    </div>

                    <Typography>
                        <Paragraph>
                            Before submitting the order, please read these terms and conditions carefully. If you click
                            "I accept," you'll be bound by this agreement's terms and conditions. You (the "Customer"
                            or "client") are entering into a legally binding contract with Assignment Hub (the
                            "Company") by agreeing to the terms and conditions set out above.
                        </Paragraph>

                        <Paragraph>
                            Users need to provide authentic and complete information about them. Users should be
                            informed immediately if your id and password are compromised. If wrong information is
                            provided to us which results in any kind of loss to the user/customer, we are not liable for
                            the same. They shall not damage, alter or delete any information.
                        </Paragraph>

                        <List
                            dataSource={[
                                'By registering for the services we provide, you affirm that you will not reproduce the information provided by the tutor as original student work for a course credit or a grade but use it for study purpose only.',
                                'Any violation of the terms related to assignmentlinkers.com will lead to removal of credentials from portal.',
                            ]}
                            renderItem={(item) => (
                                <List.Item style={{ color: '#fff' }}>✔ {item}</List.Item>
                            )}
                        />

                        <List
                            dataSource={[
                                'We are not responsible for data loss or any damage to your PC, server or network.',
                                'We are not responsible for the inaccessibility caused due to factors beyond our control.',
                                'We consider each assignment as a product which once delivered to a student, it is considered sold.',
                            ]}
                            renderItem={(item) => (
                                <List.Item style={{ color: '#fff' }}>✔ {item}</List.Item>
                            )}
                        />

                        <Paragraph>
                            ✔ The quality of the software which we use at assignment linkers is excellent, but still we
                            cannot assure smooth working of our website all the time. At the end, it is technology and one
                            cannot be sure about its functions. It can break down any time.
                        </Paragraph>
                    </Typography>
                </section>
                <WhatsAppCallButton />
            </Content>
            <Footer />
        </Layout>
    );
};

export default TermsAndConditions;