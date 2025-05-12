
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import ApiService from '../services/ApiService';

const RaiseTicketForm: React.FC = () => {
  const [form] = Form.useForm();
  const [orderIds, setOrderIds] = useState<string[]>([]); // To store the order IDs
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      fetchOrderIds(storedUserId);
    }
  }, []);

  const fetchOrderIds = async (userId: string) => {
    try {
      const response = await ApiService.get(`/raise-ticket/student`);
      setOrderIds(response.data.map((order: { orderId: string }) => order.orderId));
      //                   👆 add `.data`
    } catch (error) {
      message.error('Failed to fetch order IDs');
    }
  };


  const onFinish = async (values: any) => {
    try {
      // Send the ticket creation request
      const response = await ApiService.post('/raise-ticket/', {
        orderId: values.orderId,
        description: values.description,
      });
      alert('Your ticket has been raised successfully!');
      message.success('Your ticket has been raised successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to raise ticket');
    }
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
        rules={[{ required: true, message: 'Please select your order ID' }]}
      >
        <Select placeholder="Select your order ID">
          {orderIds.map((orderId) => (
            <Select.Option key={orderId} value={orderId}>
              {orderId}
            </Select.Option>
          ))}
        </Select>
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
