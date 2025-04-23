import React from 'react';
import { Form, Input, Upload, Button, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const BlogForm: React.FC = () => {
  const [form] = Form.useForm();

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const onFinish = (values: any) => {
    const payload = {
      title: values.title,
      photo: values.photo?.[0]?.originFileObj,
    };
    console.log('Blog Submitted:', payload);
    message.success('Blog submitted successfully!');
    form.resetFields();
  };

  return (
    <Card title="Create Blog Post" style={{ maxWidth: 600, margin: '0 auto' }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{}}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter a blog title' }]}
        >
          <Input placeholder="Enter blog title" />
        </Form.Item>

        <Form.Item
          label="Photo Upload"
          name="photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Please upload a photo' }]}
        >
          <Upload
            name="photo"
            listType="picture"
            beforeUpload={() => false} // Prevent auto-upload
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit Blog
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BlogForm;
