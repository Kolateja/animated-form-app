// src/pages/CreateSampleForm.tsx
import React, { useState } from 'react';
import { Form, Input, Select, Upload, Button, message, Card, Row, Col } from 'antd';
import { UploadOutlined, FilePdfOutlined, PictureOutlined } from '@ant-design/icons';
import ApiService from '../services/ApiService';

const { Option } = Select;

type FormValues = {
  title: string;
  category: string;
  image?: any[];
  pdf?: any[];
};

const normFile = (e: any) => Array.isArray(e) ? e : e?.fileList;

const CreateSampleForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values: FormValues) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('category', values.category);

    // Grab the underlying File object from the Upload component
    if (values.image?.[0]?.originFileObj) {
      formData.append('image', values.image[0].originFileObj);
    }
    if (values.pdf?.[0]?.originFileObj) {
      formData.append('pdf', values.pdf[0].originFileObj);
    }

    setSubmitting(true);
    try {
      const res: any = await ApiService.post('/samples/create', formData);
      if (res.success) {
        message.success('Sample created successfully!');
        form.resetFields();
      } else {
        message.error(res.message || 'Creation failed');
      }
    } catch (err) {
      console.error(err);
      message.error('Error uploading sample');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card
      title={<span style={{ fontSize: '20px', fontWeight: '600' }}>Create Sample</span>}
      style={{
        width: 900,
        margin: '0 auto',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '12px',
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ category: undefined }}
        style={{ fontSize: '16px' }}
      >
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Title</span>}
              name="title"
              rules={[{ required: true, message: 'Please enter the sample title' }]}
            >
              <Input
                placeholder="Enter title"
                style={{ padding: '10px', fontSize: '15px' }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Category</span>}
              name="category"
              rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select placeholder="Select a category" style={{ fontSize: '15px', height: 40 }}>
                <Option value="Science_Technology_Engineering & Maths">Science, Technology, Engineering & Maths</Option>
                <Option value="business_management">Business & Management</Option>
                <Option value="social_humanities">Social Science & Humanities</Option>
                <Option value="health_science">Health Science</Option>
                <Option value="communication_media">Communication & Media</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Upload Image</span>}
              name="image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: 'Please upload an image' }]}
            >
              <Upload
                accept="image/*"
                listType="picture"
                beforeUpload={() => false}
                maxCount={1}
              >
                <Button icon={<PictureOutlined />} style={{ fontSize: '15px',height:40 }}>
                  Upload Image
                </Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Upload PDF</span>}
              name="pdf"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true, message: 'Please upload a PDF' }]}
            >
              <Upload
                accept="application/pdf"
                beforeUpload={() => false}
                maxCount={1}
              >
                <Button icon={<FilePdfOutlined />} style={{ fontSize: '15px',height:40 }}>
                  Upload PDF
                </Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            block
            style={{
              padding: '10px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Submit Sample
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateSampleForm;
