import React, { useState } from 'react';
import { Form, Input, Button, Rate, Select, message, InputNumber, Row, Col } from 'antd';
import ApiService from '../services/ApiService';
import '../assets/css/reviews.css';
import { useNavigate, useParams } from 'react-router-dom';

const yesNoOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
];

const ratingDescriptions = ['1-Poor', '2-Fair', '3-Good', '4-Very Good', '5-Excellent'];

const WriterFeedbackForm: React.FC = () => {
    const [form] = Form.useForm();
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        const payload = {
            orderCode: values.orderCode,
            userId,
            writerRating: ratingDescriptions[values.rating - 1],
            numberOfEdits: values.numberOfEdits,
            failedToDeliver: values.failedToDeliver,
            laterPriceDemanding: values.laterPriceDemanding,
            lateDeliveries: values.lateDeliveries,
            assignmentFailed: values.assignmentFailed,
            issues: values.issues,
        };

        try {
            await ApiService.post('/writer-feedback/', payload);
            alert('Feedback submitted successfully');
            message.success('Feedback submitted successfully');
            form.resetFields();
        } catch (error: any) {
            message.error(error.response?.data?.message || 'Submission failed');
        }
    };

    return (
        // <div id="main">
        //     <section id="hero">
        //         <div className="review-form">
        //             <h2>Submit Writer Feedback</h2>
        //             <Form
        //                 form={form}
        //                 onFinish={onFinish}
        //                 layout="vertical"
        //                 className="feedback-form"
        //             >
        //                 <Form.Item name="orderCode" label="Order Code" rules={[{ required: true }]}>
        //                     <Input />
        //                 </Form.Item>

        //                 <Form.Item name="rating" label="Rating" rules={[{ required: true }]}>
        //                     <Rate count={5} />
        //                 </Form.Item>

        //                 <Form.Item
        //                     name="numberOfEdits"
        //                     label="Number of Edits"
        //                     rules={[{ required: true }]}
        //                 >
        //                     <InputNumber min={0} />
        //                 </Form.Item>

        //                 <Form.Item name="failedToDeliver" label="Failed to Deliver" rules={[{ required: true }]}>
        //                     <Select options={yesNoOptions} />
        //                 </Form.Item>

        //                 <Form.Item name="laterPriceDemanding" label="Later Price Demanding" rules={[{ required: true }]}>
        //                     <Select options={yesNoOptions} />
        //                 </Form.Item>

        //                 <Form.Item name="lateDeliveries" label="Late Deliveries" rules={[{ required: true }]}>
        //                     <Select options={yesNoOptions} />
        //                 </Form.Item>

        //                 <Form.Item name="assignmentFailed" label="Assignment Failed" rules={[{ required: true }]}>
        //                     <Select options={yesNoOptions} />
        //                 </Form.Item>

        //                 <Form.Item name="issues" label="Issues">
        //                     <Input.TextArea rows={3} />
        //                 </Form.Item>

        //                 <Form.Item>
        //                     <Button type="primary" htmlType="submit">
        //                         Submit Feedback
        //                     </Button>
        //                 </Form.Item>
        //             </Form>
        //         </div>
        //     </section>
        // </div>
        <>
            <Button onClick={() => navigate(-1)}>Back
            </Button>
            <br></br>
            <Form
                form={form}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
                style={{
                    maxWidth: '100%',
                    width: 1000,
                    margin: '0 auto',
                    padding: 24,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                }}
            >
                <Row gutter={24}>
                    <Col span={8} offset={2}>
                        <Form.Item
                            name="orderCode"
                            label="Order Code"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8} offset={2}>
                        <Form.Item
                            name="assignmentFailed"
                            label="Assignment Failed"
                            rules={[{ required: true }]}
                        >
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>


                    <Col span={8} offset={2}>
                        <Form.Item
                            name="numberOfEdits"
                            label="Number of Edits"
                            rules={[{ required: true }]}
                        >
                            <InputNumber min={0} style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item
                            name="failedToDeliver"
                            label="Failed to Deliver"
                            rules={[{ required: true }]}
                        >
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item
                            name="laterPriceDemanding"
                            label="Later Price Demanding"
                            rules={[{ required: true }]}
                        >
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item
                            name="lateDeliveries"
                            label="Late Deliveries"
                            rules={[{ required: true }]}
                        >
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>



                    <Col span={8} offset={2}>
                        <Form.Item name="rating" label="Rating" rules={[{ required: true }]}>
                            <Rate count={5} />
                        </Form.Item>
                      
                    </Col>

                    <Col span={22} offset={2}>
                        <Form.Item name="issues" label="Issues">
                            <Input.TextArea rows={3} />
                        </Form.Item>
                    </Col>

                    <Col span={22} offset={2} style={{ textAlign: 'center' }}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit Feedback
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form></>



    );
};

export default WriterFeedbackForm;
