// import React from 'react';
// import { Form, Input, Button, Row, Col, Select, Typography } from 'antd';
// import { motion } from 'framer-motion';
// import './WhatWeNeed.css'
// import ApiService from '../services/ApiService';
// const { Option } = Select;
// const { TextArea } = Input;
// const { Title } = Typography
// const ClientQuote: React.FC = () => {
//     const [form] = Form.useForm();

//     const items = [
//         { title: 'Client Satisfaction', imgSrc: '/assets/img/whatweneedfromclients/client-satisfaction.png', bgColor: 'darkcyan' },
//         { title: 'Appreciation', imgSrc: '/assets/img/whatweneedfromclients/appreciation.png', bgColor: 'linear-gradient(135deg, #ff6b6b, #ffd166)' },
//         { title: 'Top Scores', imgSrc: '/assets/img/whatweneedfromclients/Top-scores.png', bgColor: 'linear-gradient(135deg, #3a5fcd, #00ff00)' },
//         { title: 'Graduation', imgSrc: '/assets/img/whatweneedfromclients/graduation.png', bgColor: 'linear-gradient(135deg, #800020, #d58b8b)' },
//         { title: 'Refer Others', imgSrc: '/assets/img/whatweneedfromclients/Refer-others.png', bgColor: 'linear-gradient(135deg, #daa520, #808000)' },
//     ];

//     const onFinish = async (values: any) => {
//         const { name, countrycode, mobilenumber, subject, email, deadline, wordcount, university, description } = values;
//         try {
//             const response: any = await ApiService.post("/webPageRoutes/quotationrequest", {
//                 body: JSON.stringify({
//                     name,
//                     countrycode,
//                     mobilenumber,
//                     subject,
//                     email,
//                     deadline,
//                     wordcount,
//                     university,
//                     description
//                 }),
//             });
//             alert('Quotation request created successfully!');
//             form.resetFields();
//         } catch (error: any) {
//             console.error(error);
//             if (error.response && error.response.data && error.response.data.error) {
//                 const errorMessage = error.response.data.error.errors?.[0]?.message;
//                 if (errorMessage) {
//                     alert(errorMessage);  // Display the specific error message
//                 } else {
//                     alert('Error creating Quotation');  // Fallback message
//                 }
//             } else {
//                 alert('Error creating Quotation');
//             }
//         }
//     };

//     return (
//         <section id="client-quote">
//             {/* What we need from our clients */}
//             <div id="what-we-need-from-clients">
//                 <header className="section-header">
//                     <h4>What we need from our clients</h4>
//                 </header>
//                 <Row gutter={[24, 24]} justify="center" align="middle">
//                     {items.map((item, i) => (
//                         <Col xs={24} sm={12} md={8} lg={6} xl={4} key={i}>
//                             <motion.div
//                                 className="card-wrapper"
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                                 whileHover={{ scale: 1.05 }}
//                             >
//                                 <div className="client-card">
//                                     <div className="card-image" style={{ background: item.bgColor }}>
//                                         <img src={item.imgSrc} alt={item.title} />
//                                     </div>
//                                     <h4 className="card-title">{item.title}</h4>
//                                 </div>

//                             </motion.div>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>


//             {/* Get a free quote now */}
//             <div className="container" id="get-a-free-quote-now">
//                 <header className="section-header">
//                     <h4>Get a free quote now</h4>
//                 </header>
//                 <div className="row">
//                     <div className="col-12">
//                         <Form
//                             id="quotationForm"
//                             form={form}
//                             onFinish={onFinish}
//                             layout="vertical"
//                         // style={{
//                         //     maxWidth: 1500,
//                         //     margin: '0 auto',
//                         //     backgroundColor: '#fff',
//                         //     padding: '2rem',
//                         //     borderRadius: '12px',
//                         //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                         //     fontFamily: 'Segoe UI, sans-serif',
//                         // }}
//                         >
//                             {/* <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>
//                                     Request a Quotation
//                                 </Title> */}

//                             <Row gutter={[24, 24]}>
//                                 <Col span={12}>
//                                     <Form.Item
//                                         label="Name"
//                                         name="name"
//                                         rules={[{ required: true, message: 'Please enter your name!' }]}
//                                     >
//                                         <Input size="large" placeholder="Enter your name" />
//                                     </Form.Item>

//                                     <Row gutter={12}>
//                                         <Col span={8}>
//                                             <Form.Item
//                                                 label="Country Code"
//                                                 name="countrycode"
//                                                 rules={[{ required: true, message: 'Please enter your country code!' }]}
//                                             >
//                                                 <Input size="large" type="number" placeholder="+1" />
//                                             </Form.Item>
//                                         </Col>
//                                         <Col span={16}>
//                                             <Form.Item
//                                                 label="Mobile Number"
//                                                 name="mobilenumber"
//                                                 rules={[{ required: true, message: 'Please enter your mobile number!' }]}
//                                             >
//                                                 <Input size="large" type="number" placeholder="1234567890" />
//                                             </Form.Item>
//                                         </Col>
//                                     </Row>

//                                     <Form.Item
//                                         label="Email Address"
//                                         name="email"
//                                         rules={[{ required: true, message: 'Please enter your email address!' }]}
//                                     >
//                                         <Input size="large" type="email" placeholder="you@example.com" />
//                                     </Form.Item>
//                                 </Col>

//                                 <Col span={12}>
// <Form.Item
//     label="Subject"
//     name="subject"
//     rules={[{ required: true, message: 'Please select a subject!' }]}
// >
//     <Select placeholder="Choose a Subject">
//         <Option value="Accounting">Accounting</Option>
//         <Option value="Management">Management</Option>
//         <Option value="Law">Law</Option>
//         <Option value="Economics">Economics</Option>
//         <Option value="Nursing">Nursing</Option>
//         <Option value="IT">IT</Option>
//         <Option value="Statistics">Statistics</Option>
//         <Option value="Finance">Finance</Option>
//         <Option value="B.Tech">B.Tech</Option>
//         <Option value="Other">Other</Option>
//     </Select>
// </Form.Item>

//                                     <Form.Item
//                                         label="Deadline"
//                                         name="deadline"
//                                         rules={[{ required: true, message: 'Please select a deadline!' }]}
//                                     >
//                                         <Input size="large" type="date" />
//                                     </Form.Item>

//                                     <Form.Item
//                                         label="Word Count"
//                                         name="wordcount"
//                                         rules={[{ required: true, message: 'Please enter word count!' }]}
//                                     >
//                                         <Input size="large" type="number" placeholder="e.g. 2000" />
//                                     </Form.Item>
//                                 </Col>

//                                 <Col span={24}>
//                                     <Form.Item label="University" name="university">
//                                         <Input size="large" placeholder="Your University Name" />
//                                     </Form.Item>

//                                     <Form.Item
//                                         label="Assignment Description"
//                                         name="description"
//                                         rules={[{ required: true, message: 'Please provide a description!' }]}
//                                     >
//                                         <TextArea rows={4} placeholder="Details about your assignment..." />
//                                     </Form.Item>

//                                     <div className="text-center" style={{ marginBottom: 20 }}>
//                                         <div id="message" className="text-center bg-light" style={{ minHeight: 30 }}></div>
//                                     </div>

//                                     <Form.Item>
//                                         <Button type="primary" htmlType="submit" block size="large">
//                                             Submit
//                                         </Button>
//                                     </Form.Item>
//                                 </Col>
//                             </Row>
//                         </Form>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default ClientQuote;
import React from 'react';
import { Row, Col, Form, Button, Input, Select } from 'antd';
import { motion } from 'framer-motion';
import ApiService from '../services/ApiService';
import TextArea from 'antd/es/input/TextArea';
const ClientQuote: React.FC = () => {
    const [form] = Form.useForm();

    const items = [
        {
            title: 'Client Satisfaction',
            imgSrc: '/assets/img/whatweneedfromclients/client-satisfaction.png',
            bgColor: 'darkcyan',
        },
        {
            title: 'Appreciation',
            imgSrc: '/assets/img/whatweneedfromclients/appreciation.png',
            bgColor: 'linear-gradient(135deg, #ff6b6b, #ffd166)',
        },
        {
            title: 'Top Scores',
            imgSrc: '/assets/img/whatweneedfromclients/Top-scores.png',
            bgColor: 'linear-gradient(135deg, #3a5fcd, #00ff00)',
        },
        {
            title: 'Graduation',
            imgSrc: '/assets/img/whatweneedfromclients/graduation.png',
            bgColor: 'linear-gradient(135deg, #800020, #d58b8b)',
        },
        {
            title: 'Refer Others',
            imgSrc: '/assets/img/whatweneedfromclients/Refer-others.png',
            bgColor: 'linear-gradient(135deg, #daa520, #808000)',
        },
    ];
    const { Option } = Select;

    const onFinish = async (values: any) => {
        const { name, countrycode, mobilenumber, subject, email, deadline, wordcount, university, description } = values;
        try {
            const response: any = await ApiService.post("/webPageRoutes/quotationrequest", {
                body: JSON.stringify({
                    name,
                    countrycode,
                    mobilenumber,
                    subject,
                    email,
                    deadline,
                    wordcount,
                    university,
                    description
                }),
            });
            alert('Quotation request created successfully!');
            form.resetFields();
        } catch (error: any) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.error) {
                const errorMessage = error.response.data.error.errors?.[0]?.message;
                if (errorMessage) {
                    alert(errorMessage);  // Display the specific error message
                } else {
                    alert('Error creating Quotation');  // Fallback message
                }
            } else {
                alert('Error creating Quotation');
            }
        }
    };

    return (
        <section style={{ width: '100%', height: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: 24, fontWeight: 600, color: '#fff' }}>
                    What we need from our clients
                </h4>
            </div>
            <Row gutter={[24, 24]} justify="center">
                {items.map((item, i) => (
                    <Col xs={24} sm={12} md={8} lg={6} xl={4} key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto',
                                    padding: '1rem',
                                    backgroundImage: item.bgColor.includes('linear-gradient')
                                        ? item.bgColor
                                        : undefined,
                                    backgroundColor: !item.bgColor.includes('linear-gradient')
                                        ? item.bgColor
                                        : undefined,
                                }}
                            >
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <h4 style={{ fontSize: '16px', marginTop: '1rem', color: '#fff' }}>
                                {item.title}
                            </h4>
                        </motion.div>
                    </Col>
                ))}
            </Row>
            <div
                  style={{
                    margin: '5rem auto 0',
                    padding: '40px',
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    maxWidth: '1000px',
                  }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: 24, fontWeight: 600, color: '#fff' }}>Get a free quote now</h4>
                </div>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Row gutter={[24, 24]}>
                        <Col span={12}>
                            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                                <Input size="large" placeholder="Enter your name" />
                            </Form.Item>

                            <Row gutter={12}>
                                <Col span={8}>
                                    <Form.Item label="Country Code" name="countrycode" rules={[{ required: true, message: 'Please enter your country code!' }]}>
                                        <Input size="large" type="number" placeholder="+1" />
                                    </Form.Item>
                                </Col>
                                <Col span={16}>
                                    <Form.Item label="Mobile Number" name="mobilenumber" rules={[{ required: true, message: 'Please enter your mobile number!' }]}>
                                        <Input size="large" type="number" placeholder="1234567890" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter your email address!' }]}>
                                <Input size="large" type="email" placeholder="you@example.com" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Subject"
                                name="subject"
                                rules={[{ required: true, message: 'Please select a subject!' }]}
                            >
                                <Select placeholder="Choose a Subject">
                                    <Option value="Accounting">Accounting</Option>
                                    <Option value="Management">Management</Option>
                                    <Option value="Law">Law</Option>
                                    <Option value="Economics">Economics</Option>
                                    <Option value="Nursing">Nursing</Option>
                                    <Option value="IT">IT</Option>
                                    <Option value="Statistics">Statistics</Option>
                                    <Option value="Finance">Finance</Option>
                                    <Option value="B.Tech">B.Tech</Option>
                                    <Option value="Other">Other</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Deadline" name="deadline" rules={[{ required: true, message: 'Please select a deadline!' }]}>
                                <Input size="large" type="date" />
                            </Form.Item>

                            <Form.Item label="Word Count" name="wordcount" rules={[{ required: true, message: 'Please enter word count!' }]}>
                                <Input size="large" type="number" placeholder="e.g. 2000" />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item label="University" name="university">
                                <Input size="large" placeholder="Your University Name" />
                            </Form.Item>

                            <Form.Item label="Assignment Description" name="description" rules={[{ required: true, message: 'Please provide a description!' }]}>
                                <TextArea rows={4} placeholder="Details about your assignment..." />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block size="large">Submit</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </section>
    );
};

export default ClientQuote;

