import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Upload, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ApiService from '../services/ApiService';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ConsultancyForm: React.FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        const formData = new FormData();
        formData.append('title', values.title);

        if (values.image && values.image[0]?.originFileObj) {
            formData.append('image', values.image[0].originFileObj);
        }

        try {
            setLoading(true);
            await ApiService.post(`/consultanicie/create`, formData);
            message.success('Consultancy created!');
            form.resetFields();
        } catch (err) {
            message.error('Creation failed');
        } finally {
            setLoading(false);
        }
    };

    const normFile = (e: any) => (Array.isArray(e) ? e : e?.fileList);

    return (
        <div>
            <Card
                title={<span style={{ fontSize: '20px', fontWeight: '600' }}>Create Consultancy</span>}
                style={{
                    width: '500px', // You can increase this further if needed
                    padding: '30px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    style={{
                        fontSize: '16px',
                    }}
                >
                    <Form.Item
                        name="title"
                        label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Title</span>}
                        rules={[{ required: true }]}
                    >
                        <Input
                            placeholder="Enter consultancy title"
                            style={{
                                padding: '12px',
                                fontSize: '15px',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="image"
                        label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Photo Upload</span>}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload
                            name="image"
                            listType="picture"
                            beforeUpload={() => false}
                            maxCount={1}
                        >
                            <Button icon={<UploadOutlined />} style={{ fontWeight: 'bold' }}>
                                Click to Upload
                            </Button>
                        </Upload>
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        style={{
                            fontSize: '16px',
                            padding: '10px 24px',
                            fontWeight: 'bold',
                            width: '100%',
                        }}
                    >
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>

    );
};

export default ConsultancyForm;
