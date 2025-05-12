import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import { Form, Input, Upload, Button, Row, Col, message } from 'antd';
import { UploadOutlined, UserOutlined, MailOutlined, PhoneOutlined, FileOutlined } from '@ant-design/icons';

// Define types for the form values
interface CreateResumeValues {
    username: string;
    email: string;
    phone: string;
    file: any;  // Ideally, you can define a more specific type for the file
}

const CreateResume: React.FC = () => {
    const [form] = Form.useForm();
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (values: CreateResumeValues) => {
        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('file', values.file.file);  // No need to check if file exists as it's required

        setUploading(true);
        try {
            await ApiService.post('/resumes/', formData);
            message.success('Resume uploaded');
            form.resetFields();
        } catch {
            message.error('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={handleUpload}
            style={{
                marginBottom: 20,
                maxWidth: 400,
                margin: '0 auto', // Centers horizontally
            }}
        >
            <Form.Item
                name="username"
                label="Name"
                rules={[{ required: true, message: 'Name required' }]}
            >
                <Input placeholder="Enter your name" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Email required' }]}
            >
                <Input placeholder="Enter your email" prefix={<MailOutlined />} />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Phone required' }]}
            >
                <Input placeholder="Enter your phone number" prefix={<PhoneOutlined />} />
            </Form.Item>

            <Form.Item
                name="file"
                label="Resume"
                rules={[{ required: true, message: 'Resume required' }]}
            >
                <Upload beforeUpload={() => false} maxCount={1}>
                    <Button icon={<UploadOutlined />}>Select Resume</Button>
                </Upload>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
                <Button htmlType="submit" type="primary" loading={uploading}>
                    Upload
                </Button>
            </Form.Item>
        </Form>


    );
};

export default CreateResume;
