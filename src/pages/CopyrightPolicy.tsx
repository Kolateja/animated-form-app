import React from 'react';
import { Layout, Typography } from 'antd';
import '../assets/css/common.css';
import '../assets/css/refund_policy.css';
import Header from './Header';
import Footer from './FooterSection';
import WhatsAppCallButton from './WhatsAppCallButton';


const { Content } = Layout;
const { Title, Paragraph } = Typography;

const CopyrightPolicy: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Content id="main">
                <section id="refund_policy">
                    <div className="container">
                        <div className="section-header">
                            <Title level={4}>Copyright Policy</Title>
                        </div>
                        <Paragraph>
                            Assignment Linkers' copyright infringement policy mandates prompt
                            response to clear notices of alleged copyright violations. We
                            take our intellectual property responsibilities seriously and will
                            investigate any reported infringements thoroughly. Upon receiving a
                            notice, we conduct an investigation, which may involve contacting
                            the individual responsible for the alleged infringement. We will
                            inform you of the outcome and any actions taken, which may include
                            removal or disabling access to the infringing material. It's
                            important to note that making false claims of infringement may
                            result in legal consequences.
                        </Paragraph>
                        <Paragraph>
                            All the assignments and materials written by us are exclusively our
                            property i.e. we have the copyright over them. However, the
                            completed orders /assignments are meant
                        </Paragraph>
                    </div>
                </section>
                <WhatsAppCallButton />
            </Content>
            <Footer />
        </Layout>
    );
};

export default CopyrightPolicy;