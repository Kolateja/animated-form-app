import React from 'react';
import { Form, Input, Select, Upload, Button, message, Card } from 'antd';
import { UploadOutlined, FilePdfOutlined, PictureOutlined } from '@ant-design/icons';

const { Option } = Select;

const CreateSampleForm: React.FC = () => {
  const [form] = Form.useForm();

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const onFinish = (values: any) => {
    const payload = {
      title: values.title,
      category: values.category,
      image: values.image?.[0]?.originFileObj,
      pdf: values.pdf?.[0]?.originFileObj,
    };
    console.log('Sample Created:', payload);
    message.success('Sample submitted successfully!');
    form.resetFields();
  };

  return (
    <Card title="Create Sample" style={{ maxWidth: 700, margin: '0 auto' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the sample title' }]}
        >
          <Input placeholder="Enter title" />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Select a category">
            <Option value="science">Science</Option>
            <Option value="technology">Technology</Option>
            <Option value="engineering_math">Engineering & Maths</Option>
            <Option value="business_management">(Business & Management)</Option>
            <Option value="social_humanities">Social Science & Humanities</Option>
            <Option value="health_science">(Health Science)</Option>
            <Option value="communication_media">(Communication & Media)</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Upload Image"
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
            <Button icon={<PictureOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Upload PDF"
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
            <Button icon={<FilePdfOutlined />}>Upload PDF</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit Sample
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateSampleForm;
