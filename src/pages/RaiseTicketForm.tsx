import React from 'react';
import { Form, Input, Button, message } from 'antd';

const RaiseTicketForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Ticket Submitted:', values);
    message.success('Your ticket has been raised successfully!');
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 500, margin: '0 auto' }}
    >
      <Form.Item
        label="Order ID"
        name="orderId"
        rules={[{ required: true, message: 'Please enter your order ID' }]}
      >
        <Input placeholder="Enter your order ID" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please describe your issue' }]}
      >
        <Input.TextArea rows={4} placeholder="Describe the issue you're facing" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Ticket
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RaiseTicketForm;
