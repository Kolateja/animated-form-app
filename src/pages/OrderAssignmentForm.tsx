import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber, DatePicker, Upload, Button, Checkbox, Row, Col, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import { RcFile } from 'antd/es/upload';
import axios from 'axios'; // Use Axios or Fetch for making HTTP requests
import ApiService from '../services/ApiService';

const OrderAssignmentForm: React.FC = () => {
  const [form] = Form.useForm();
  const [wordCount, setWordCount] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    const pages = Math.ceil(wordCount / 250);
    setPageCount(pages);
    form.setFieldsValue({ pages });
  }, [wordCount, form]);

  const onFinish = async (values: any) => {
    const formattedValues = {
      ...values,
      deadline: values.deadline?.format('YYYY-MM-DD HH:mm'),
    };
    console.log('Submitted values:', formattedValues);

    // Create a FormData object to send the data as multipart/form-data
    const formData = new FormData();
    formData.append('subject', values.subject);
    formData.append('university', values.university);
    formData.append('deadline', formattedValues.deadline);
    formData.append('wordCount', values.wordCount.toString());
    formData.append('pages', values.pages.toString());
    formData.append('description', values.description);
    formData.append('agreement', values.agreement.toString());

    // Attach the file to the FormData
    // if (values.file && values.file[0]) {
    //   formData.append('file', values.file[0].originFileObj); // This is the binary data
    // }

    // Attach multiple files to the FormData
    if (values.files && values.files.length > 0) {
      values.files.forEach((file: any) => {
        formData.append('files', file.originFileObj); // Must match 'files' used in backend
      });
    }


    try {
      // Make the POST request to the backend API
      const response: any = await ApiService.post('/assignments/', formData);

      if (response.success) {
        alert('Assignment submitted successfully!');
        message.success('Assignment submitted successfully!');
      } else {
        message.error('Failed to submit the assignment.');
      }
    } catch (error) {
      console.error('Error submitting assignment:', error);
      message.error('An error occurred while submitting the assignment.');
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  return (
    // <Form
    //   form={form}
    //   layout="vertical"
    //   onFinish={onFinish}
    //   initialValues={{ agreement: false }}
    // >
    //   <Form.Item
    //     label="Subject"
    //     name="subject"
    //     rules={[{ required: true, message: 'Please enter the subject' }]}>
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="University"
    //     name="university"
    //     rules={[{ required: true, message: 'Please enter your university' }]}>
    //     <Input />
    //   </Form.Item>

    //   <Form.Item
    //     label="Deadline"
    //     name="deadline"
    //     rules={[{ required: true, message: 'Please select a deadline' }]}>
    //     <DatePicker showTime style={{ width: '100%' }} />
    //   </Form.Item>

    //   <Form.Item
    //     label="Word Count"
    //     name="wordCount"
    //     rules={[{ required: true, message: 'Please enter word count' }]}>
    //     <InputNumber
    //       min={1}
    //       style={{ width: '100%' }}
    //       onChange={(value) => setWordCount(value || 0)}
    //     />
    //   </Form.Item>

    //   <Form.Item label="No. of Pages (1 page = 250 words)" name="pages">
    //     <InputNumber value={pageCount} disabled style={{ width: '100%' }} />
    //   </Form.Item>

    //   <Form.Item
    //     label="Assignment Description"
    //     name="description"
    //     rules={[{ required: true, message: 'Please describe your assignment' }]}>
    //     <Input.TextArea rows={4} />
    //   </Form.Item>

    //   <Form.Item
    //     label="Attach Files"
    //     name="files"
    //     valuePropName="fileList"
    //     getValueFromEvent={normFile}
    //   >
    //     <Upload name="files" multiple beforeUpload={() => false}>
    //       <Button icon={<UploadOutlined />}>Click to Upload</Button>
    //     </Upload>
    //   </Form.Item>


    //   <Form.Item
    //     name="agreement"
    //     valuePropName="checked"
    //     rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and conditions')) }]}>
    //     <Checkbox>
    //       I accept the T&C and other policies of the website and agree to
    //       receive updates.
    //     </Checkbox>
    //   </Form.Item>

    //   <Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Submit Assignment
    //     </Button>
    //   </Form.Item>
    // </Form>

    <Card
      title="📄 Submit Assignment"
      bordered={false}
      style={{
        maxWidth: 1000,
        margin: '0 auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        borderRadius: 12,
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ agreement: false }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: 'Please enter the subject' }]}
            >
              <Input placeholder="e.g. Computer Science" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="University"
              name="university"
              rules={[{ required: true, message: 'Please enter your university' }]}
            >
              <Input placeholder="e.g. Oxford University" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Word Count"
              name="wordCount"
              rules={[{ required: true, message: 'Please enter word count' }]}
            >
              <InputNumber
                min={1}
                style={{ width: '100%' }}
                onChange={(value) => setWordCount(value || 0)}
                placeholder="e.g. 1500"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="No. of Pages (1 page = 250 words)"
              name="pages"
            >
              <InputNumber
                value={pageCount}
                disabled
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Deadline"
              name="deadline"
              rules={[{ required: true, message: 'Please select a deadline' }]}
            >
              <DatePicker showTime style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Assignment Description"
          name="description"
          rules={[{ required: true, message: 'Please describe your assignment' }]}
        >
          <Input.TextArea rows={4} placeholder="Describe your assignment..." />
        </Form.Item>

        <Form.Item
          label="Attach Files"
          name="files"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="files" multiple beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                    new Error('You must accept the terms and conditions')
                  ),
            },
          ]}
        >
          <Checkbox>
            I accept the T&C and other policies of the website and agree to receive updates.
          </Checkbox>
        </Form.Item>

        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Submit Assignment
          </Button>
        </Form.Item>
      </Form>
    </Card>

  );
};

export default OrderAssignmentForm;
