import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Upload,
  Checkbox,
  Button,
  message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { RcFile } from 'antd/es/upload';

const OrderAssignmentForm: React.FC = () => {
  const [form] = Form.useForm();
  const [wordCount, setWordCount] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    const pages = Math.ceil(wordCount / 250);
    setPageCount(pages);
    form.setFieldsValue({ pages });
  }, [wordCount, form]);

  const onFinish = (values: any) => {
    const formattedValues = {
      ...values,
      deadline: values.deadline?.format('YYYY-MM-DD HH:mm'),
    };
    console.log('Submitted values:', formattedValues);
    message.success('Assignment submitted successfully!');
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ agreement: false }}
    >
      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: 'Please enter the subject' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="University"
        name="university"
        rules={[{ required: true, message: 'Please enter your university' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Deadline"
        name="deadline"
        rules={[{ required: true, message: 'Please select a deadline' }]}
      >
        <DatePicker showTime style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Word Count"
        name="wordCount"
        rules={[{ required: true, message: 'Please enter word count' }]}
      >
        <InputNumber
          min={1}
          style={{ width: '100%' }}
          onChange={(value) => setWordCount(value || 0)}
        />
      </Form.Item>

      <Form.Item label="No. of Pages (1 page = 250 words)" name="pages">
        <InputNumber value={pageCount} disabled style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Assignment Description"
        name="description"
        rules={[{ required: true, message: 'Please describe your assignment' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Attach File"
        name="file"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="file" beforeUpload={() => false}>
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
          I accept the T&C and other policies of the website and agree to
          receive updates.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Assignment
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderAssignmentForm;
