import React, { useEffect } from 'react';
import { Layout, Typography, List } from 'antd';
import '../assets/css/common.css';
import '../assets/css/refund_policy.css';

const { Content } = Layout;
const { Title } = Typography;

const privacyPoints = [
    "Your personal details will be secured and will not be shared with anyone even with writers also.",
    "Your Assignment & Dissertation details will be secured and will not be shared to any one.",
    "Your details will not be shared with your refer friends, colleague, family friends, relatives.",
    "Users are responsible to maintain the confidentiality of their id and password.",
    "The services are rendered only to those with whom the writer has agreed to work with.",
    "We will not share the collected data with third party. We assure that the information provided by you is only used for business purpose"
];

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        const toggleNavbar = () => {
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.classList.toggle('navbar-mobile');
        };

        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', toggleNavbar);
        }

        const dropdownLinks = document.querySelectorAll('.navbar .dropdown > a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const navbar = document.getElementById('navbar');
                if (navbar?.classList.contains('navbar-mobile')) {
                    e.preventDefault();
                    link.nextElementSibling?.classList.toggle('dropdown-active');
                }
            });
        });

        return () => {
            if (mobileToggle) {
                mobileToggle.removeEventListener('click', toggleNavbar);
            }
            dropdownLinks.forEach(link => {
                link.removeEventListener('click', () => { });
            });
        };
    }, []);

    return (
        <Layout>
            <Content className="container" style={{ padding: '2rem' }}>
                <div className="section-header">
                    <Title level={4} style={{ color: '#fff' }}>Privacy Policy</Title>
                </div>
                <List
                    dataSource={privacyPoints}
                    renderItem={(item) => (
                        <List.Item style={{ color: '#fff', border: 'none', padding: '0.5rem 0' }}>
                            <span style={{ marginRight: '0.5rem' }}>✓</span> {item}
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    );
};

export default PrivacyPolicy;