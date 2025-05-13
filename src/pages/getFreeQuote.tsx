import React from 'react';
import { Form, Input, Button, Row, Col, Select, Typography } from 'antd';
import { motion } from 'framer-motion';
import './WhatWeNeed.css'
import ApiService from '../services/ApiService';
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography
const FreeQuote: React.FC = () => {
    const [form] = Form.useForm();

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
        // <div
        //     style={{
        //         margin: '5rem auto 0',
        //         padding: '40px',
        //         backdropFilter: 'blur(10px)',
        //         background: 'rgba(255, 255, 255, 0.15)',
        //         borderRadius: '16px',
        //         border: '1px solid rgba(255,255,255,0.2)',
        //         color: '#fff',
        //         maxWidth: '1000px',
        //     }}
        // >
        //     <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        //         <h4 style={{ fontSize: 28, fontWeight: 600, color: '#333' }}>Get a free quote now</h4>
        //     </div>
        <Form form={form} onFinish={onFinish} layout="vertical">
            <Row gutter={[24, 24]}>
                <Col span={12}>
                    <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                        <Input size="large" placeholder="Enter your name" />
                    </Form.Item>

                    <Row gutter={12}>
                        <Col span={10}>
                            <Form.Item
                                name="countrycode"
                                noStyle
                                rules={[{ required: true, message: 'Country code required' }]}
                            >
                                <Input size="large" placeholder="Country code" />
                            </Form.Item>
                        </Col>
                        <Col span={14}>
                            <Form.Item
                                name="mobilenumber"
                                noStyle
                                rules={[{ required: true, message: 'Mobile number required' }]}
                            >
                                <Input size="large" placeholder="Mobile number" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item  name="email" rules={[{ required: true, message: 'Please enter your email address!' }]}>
                        <Input size="large" type="email" placeholder="Email Address" />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
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

                    <Form.Item name="deadline" rules={[{ required: true, message: 'Please select a deadline!' }]}>
                        <Input size="large" type="date" placeholder='Deadline' />
                    </Form.Item>

                    <Form.Item name="wordcount" rules={[{ required: true, message: 'Please enter word count!' }]}>
                        <Input size="large" type="number" placeholder="Word Count" />
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item name="university">
                        <Input size="large" placeholder="Your University Name" />
                    </Form.Item>

                    <Form.Item name="description" rules={[{ required: true, message: 'Please provide a description!' }]}>
                        <TextArea rows={4} placeholder="Details about your assignment..." />
                    </Form.Item>
                    {/* 
                        <div style={{ textAlign: 'center', marginBottom: 20 }}>
                            <div style={{ minHeight: 30, backgroundColor: '#f8f9fa' }} id="message"></div>
                        </div> */}

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">Submit</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form >
        // </div>
    );
};

export default FreeQuote;