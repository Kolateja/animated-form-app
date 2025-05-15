import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import ApiService from '../services/ApiService';

const ChangePasswordForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log('Password Change Submitted:', values);

    try {
      const payload = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,

      };
      const response: any = await ApiService.post('/auth/change-password', payload);


      if (response.success) {
        message.success('Password changed successfully!');
        form.resetFields();
      } else {
        message.error(response.message || 'Password change failed');
      }
    } catch (error) {
      message.error('Error changing password');
    }
  };


  return (
    // <Form
    //   form={form}
    //   layout="vertical"
    //   onFinish={onFinish}
    //   style={{ maxWidth: 400, margin: '0 auto' }}
    // >
    //   <Form.Item
    //     label="Old Password"
    //     name="oldPassword"
    //     rules={[{ required: true, message: 'Please enter your old password' }]}
    //   >
    //     <Input.Password placeholder="Enter old password" />
    //   </Form.Item>

    //   <Form.Item
    //     label="New Password"
    //     name="newPassword"
    //     rules={[
    //       { required: true, message: 'Please enter your new password' },
    //       { min: 6, message: 'Password must be at least 6 characters' },
    //     ]}
    //     hasFeedback
    //   >
    //     <Input.Password placeholder="Enter new password" />
    //   </Form.Item>

    //   <Form.Item
    //     label="Confirm New Password"
    //     name="confirmPassword"
    //     dependencies={['newPassword']}
    //     hasFeedback
    //     rules={[
    //       { required: true, message: 'Please confirm your new password' },
    //       ({ getFieldValue }) => ({
    //         validator(_, value) {
    //           if (!value || getFieldValue('newPassword') === value) {
    //             return Promise.resolve();
    //           }
    //           return Promise.reject(new Error('Passwords do not match'));
    //         },
    //       }),
    //     ]}
    //   >
    //     <Input.Password placeholder="Confirm new password" />
    //   </Form.Item>

    //   <Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Change Password
    //     </Button>
    //   </Form.Item>
    // </Form>
    <Card
      title="🔒 Change Password"
      bordered={false}
      style={{
        maxWidth: 500,
        margin: '40px auto',
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Old Password"
          name="oldPassword"
          rules={[{ required: true, message: 'Please enter your old password' }]}
        >
          <Input.Password placeholder="Enter old password" />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: 'Please enter your new password' },
            { min: 6, message: 'Password must be at least 6 characters' },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter new password" />
        </Form.Item>

        <Form.Item
          label="Confirm New Password"
          name="confirmPassword"
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your new password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm new password" />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ChangePasswordForm;
