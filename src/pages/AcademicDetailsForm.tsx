import React from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';
import type { FormInstance } from 'antd/es/form';

const { Option } = Select;

const AcademicDetailsForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth?.format('YYYY-MM-DD'),
    };
    console.log('Submitted values:', formattedValues);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        currentCountry: 'United States',
        currentState: '',
        countryOfOrigin: '',
        stateOfOrigin: '',
      }}
    >
      <Form.Item
        label="University"
        name="university"
        rules={[{ required: true, message: 'Please enter your university' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        rules={[{ required: true, message: 'Please select your date of birth' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Semester"
        name="semester"
        rules={[{ required: true, message: 'Please enter your semester' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Course"
        name="course"
        rules={[{ required: true, message: 'Please enter your course' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="State/Province of Origin"
        name="stateOfOrigin"
        rules={[{ required: true, message: 'Please enter your state/province of origin' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Country of Origin"
        name="countryOfOrigin"
        rules={[{ required: true, message: 'Please enter your country of origin' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Current Country of Study"
        name="currentCountry"
        rules={[{ required: true, message: 'Please enter your current country of study' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Current State/Province of Study"
        name="currentState"
        rules={[{ required: true, message: 'Please enter your current state/province of study' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AcademicDetailsForm;
