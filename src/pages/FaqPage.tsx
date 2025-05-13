import { Tabs, Typography, Row, Col, Card, Collapse } from 'antd';
import { useState } from 'react';
import { MessageOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const faqs = {
    assignment: [
        {
            question: 'Will you provide me with a plagiarism free assignment? How?',
            answer:
                'Our PhD professor experts always strive to write original content. We use plagiarism detection high end software tools and ensure proper citation methods.',
        },
        {
            question: 'Will my assignment be revised/rewrite if I Am not satisfied with it?',
            answer:
                'Revisions/rewrites are included in the order. If unsatisfied, express your concerns, and we\'ll work on it.',
        },
        {
            question: 'Will I get my assignment on my email, or WhatsApp, or student dashboard?',
            answer:
                'Assignments are typically delivered through the student dashboard, but upon student request or special cases, they can also be sent via WhatsApp or email.',
        },
        {
            question: 'How long will it take to get my assignment done?',
            answer:
                'Depends on subject, topic, complexity and urgency. Upon request we provide estimated deadlines.',
        },
        {
            question: 'What happens if you did not complete by the deadline?',
            answer:
                '100% We strive to meet deadlines, but unforeseen circumstances might occur. We\'ll communicate promptly and offer best solutions.',
        },
        {
            question: 'Are your assignments resold again?',
            answer:
                'We have a strict policy against reselling assignments. Each assignment is unique and created specifically for you.',
        },
        {
            question: 'Can I rate the assignment?',
            answer:
                'Yes, you can often rate your experience in the website review page.',
        },
        {
            question: 'Can you give me a guarantee that I will get my assignment work done?',
            answer:
                'We guarantee adherence to your instructions, high-quality work, and plagiarism-free content. However, we cannot guarantee specific grades as they depend on your professor\'s evaluation.',
        },
        {
            question: 'Can I raise a query if the solution is not correct or corrections required?',
            answer:
                'Raise an issue in student dashboard or contact us directly if you have any queries or corrections. We\'ll address them promptly.',
        },
        {
            question: 'How can check/monitor my order status?',
            answer:
                'Please visit our student dashboard and check your current order status.',
        },
        {
            question: 'If my topic is not mentioned on your home page can your specialist still complete my assignment?',
            answer:
                'Contact us about your topic. We have a wide range of experts and can likely accommodate your needs.',
        },
        {
            question: 'What kind of assignment services do you offer?',
            answer:
                'We offer various academic writing services. Check our website or inquire directly.',
        },
        {
            question: 'Should I call or WhatsApp the details or simply fill in the order form?',
            answer:
                'Call: First you should visit our website, and have a look into it, especially about us, FAQ & Offers. After that If you have anymore questions call us. WhatsApp: Running short of time? Do not worry! If you are having a short deadline, send us through WhatsApp. If you are really too much busy can’t even spend few minutes with your job and other important works, then only send us through WhatsApp. We prefer our students to simply fill in the order form most of the time.',
        },
        {
            question: 'Who are your writers? Can I contact them?',
            answer:
                'We\'re a team of experienced professionals and PhD professors who specialize in helping with writings. Our experts undergo rigorous training before joining us, ensuring they\'re well-prepared to meet the needs of students worldwide. We maintain writer confidentiality but ensure their qualifications and experience. If any case any misunderstanding in the assignment our team will arrange a call or one-on-one online session.',
        },
    ],
    payment: [
        {
            question: 'What are the payment options/ methods available for us?',
            answer:
                'There are two convenient payment options: 1) Payment Gateway and 2) Debit/Credit cards.',
        },
        {
            question: 'Is there any transaction fee?',
            answer:
                'No we don’t charge any Transaction Fee.',
        },
        {
            question: 'How safe is my account and credit card information when I use your website to make online payment?',
            answer:
                'Any payments would typically be processed through secure third-party platforms or services. If you have concerns about security, it\'s always a good idea to ensure you\'re using a reputable and secure payment method or service.',
        },
        {
            question: 'How are rates/ prices decided?',
            answer:
                'Rates and prices for services can vary depending on subject, topic, number of words, complexity, time frame.',
        },
        {
            question: 'How can I know do you received payment?',
            answer:
                'If you\'re making a payment through a platform or service, you should receive a confirmation or receipt indicating that the payment was successfully processed. This confirmation typically includes details such as the amount paid, the recipient, the date and time of the transaction, and a transaction ID or reference number.',
        },
        {
            question: 'Can I get a refund for my payment, in exceptional cases?',
            answer:
                'Yes, Kindly look into our refund policy page.',
        },
        {
            question: 'Half payment in the first installment is compulsory to start the work?',
            answer:
                'For your convenience, you can pay half of the total cost of your assignment in advance to get your work started, and the remaining half at the time of its delivery.',
        },
        {
            question: 'Complete payment in the last installment is compulsory to deliver the work to you?',
            answer:
                'If you have a specific agreement or contract that requires the completion of the last payment installment before the work is delivered, then yes, it would be compulsory to fulfill that payment obligation before receiving the final work.',
        },
        {
            question: 'Do you provide a payment offers?',
            answer:
                'Yes, please look into our offers page.',
        },
        {
            question: 'How is your payment service different from others?',
            answer:
                'Our payment service providers enable merchants to accept credit and debit card payments (as well as Direct Debit, bank transfer, real-time bank transfer, etc.)',
        },
    ],
    portal: [
        {
            question: 'Rewrite Guidelines of assignment should be shared in portal?',
            answer:
                'Yes. Guidelines of assignment should be shared while ordering the Assignment. Or if you forgot to write description while ordering the form, later you can update your guidelines under additional information section present in the user dashboard.',
        },
        {
            question: 'Raise a enquiry in the portal?',
            answer:
                'You can raise an enquiry in the portal for any questions or concerns you have regarding assignments.',
        },
        {
            question: 'Receiving assignments through portal ?',
            answer:
                'Assignments are usually received through the portal to streamline the submission process and ensure all submissions are properly recorded.',
        },
        {
            question: 'What should I do if I am failing to access the assignment linkers student dashboard?',
            answer:
                'If you\'re having trouble accessing the student help line services via the student dashboard, please reach out to technical support for assistance or contact us directly.',
        },
        {
            question: 'Is my privacy secured?',
            answer:
                'Yes, your privacy is secured. We take data protection seriously and implement robust security measures to safeguard your personal information.',
        },
        {
            question: 'Login enquiries?',
            answer:
                'Reset your password through email.',
        },
    ],
};
const renderFaqs = (faqList: { question: string; answer: string }[]) => (
    <div style={{ width: 1300 /* or any fixed value you want */ }}>
        <Collapse
            accordion
            bordered={false}
            style={{
                background: '#ffffff',
                borderRadius: 22,
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                padding: 16,
                width: '100%' // make it fill the wrapper
            }}
        >
            {faqList.map((faq, index) => (
                <Panel header={faq.question} key={index}>
                    <div style={{ height: 100 }}>
                        <Title level={5} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <MessageOutlined style={{ color: '#1890ff' }} />
                        </Title>
                        <Paragraph style={{ marginTop: 8, color: '#595959' }}>
                            {faq.answer}
                        </Paragraph>
                    </div>
                </Panel>
            ))}
        </Collapse>
    </div>
);




const FaqPage = () => {

    const [activeKey, setActiveKey] = useState('assignment');

    return (
        <div style={{ padding: '32px 62px', background: '#f5f7fa' }}>
            {/* <Header /> */}

            <Row justify="center" style={{ marginBottom: 24 }}>
                <Col>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>
                        Frequently Asked Questions
                    </Title>
                    <Paragraph style={{ textAlign: 'center', color: '#777' }}>
                        Get answers to the most common questions our students ask.
                    </Paragraph>
                </Col>
            </Row>

            <Tabs
                defaultActiveKey="assignment"
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key)}
                centered
                size="large"
                type="line"
            >
                <TabPane tab="Assignment Enquiries" key="assignment">
                    {renderFaqs(faqs.assignment)}
                </TabPane>
                <TabPane tab="Payment Enquiries" key="payment">
                    {renderFaqs(faqs.payment)}
                </TabPane>
                <TabPane tab="Portal Enquiries" key="portal">
                    {renderFaqs(faqs.portal)}
                </TabPane>


            </Tabs>
            {/* <Footer /> */}

        </div>
    );
};

export default FaqPage;