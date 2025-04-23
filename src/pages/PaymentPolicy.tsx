import { useEffect } from 'react';
import { Typography, List, Layout } from 'antd';
import '@/assets/css/common.css';
import '@/assets/css/refund_policy.css';

const { Title } = Typography;
const { Content } = Layout;

const policyPoints = [
    "Your payment and Card details will be secured, We don't collect the user credit/debit card information in our database.",
    "All payments will be processed either through Cards or direct bank deposits. Currently, we have partnered with RazorPay or other reputable payment gateway providers to facilitate transactions. RazorPay is a globally recognized online payments system supporting secure money transfers.",
    "When making your first transaction on our website, it may encounter initial failure due to security measures. If this occurs, please inform your bank or confirm the transaction to ensure successful processing.",
    "Work will commence only upon receipt of the initial payment, and the completed work will be delivered upon full payment as agreed upon.",
    "We do not impose any additional charges for bank transactions. However, any fees imposed by your bank are not within our responsibility.",
    "Full payment must be made as specified, without any deductions or disputes, utilizing the designated payment methods.",
    "In case of a refund, it will be issued to the original payment source or student wallet, depending on the method of payment initially used."
];

const PaymentPolicy: React.FC = () => {
    useEffect(() => {
        const toggleMobileNav = (e: Event) => {
            const navbar = document.querySelector('#navbar');
            const toggleBtn = e.currentTarget as HTMLElement;
            if (navbar) {
                navbar.classList.toggle('navbar-mobile');
                toggleBtn.classList.toggle('bi-list');
                toggleBtn.classList.toggle('bi-x');
            }
        };

        const toggleDropdown = (e: Event) => {
            const navbar = document.querySelector('#navbar');
            if (navbar?.classList.contains('navbar-mobile')) {
                e.preventDefault();
                const target = e.currentTarget as HTMLElement;
                target.nextElementSibling?.classList.toggle('dropdown-active');
            }
        };

        document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
            el.addEventListener('click', toggleMobileNav);
        });

        document.querySelectorAll('.navbar .dropdown > a').forEach(el => {
            el.addEventListener('click', toggleDropdown);
        });

        return () => {
            document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
                el.removeEventListener('click', toggleMobileNav);
            });

            document.querySelectorAll('.navbar .dropdown > a').forEach(el => {
                el.removeEventListener('click', toggleDropdown);
            });
        };
    }, []);

    return (
        <Layout>
            {/* You can include your header and footer components here */}
            <Content id="main">
                <section id="refund_policy">
                    <div className="container">
                        <div className="section-header">
                            <Title level={4}>Payment & Secured Policy</Title>
                        </div>
                        <List
                            style={{ color: '#fff' }}
                            dataSource={policyPoints}
                            renderItem={(item) => <List.Item style={{ listStyle: 'none' }}>✔ {item}</List.Item>}
                        />
                    </div>
                </section>
            </Content>
        </Layout>
    );
};

export default PaymentPolicy;