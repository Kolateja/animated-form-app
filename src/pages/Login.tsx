// import React, { useState } from 'react';
// import { Button, Form, Input, message } from 'antd';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Link, useNavigate } from 'react-router-dom';
// import ApiService from '../services/ApiService';
// import axios from 'axios';

// // Add props interface
// // In Login.tsx

// interface LoginProps {
//   handleLoginFlag: (role: string) => void;
//   onToggleForm: () => void;
// }



// const Login: React.FC<LoginProps> = ({ handleLoginFlag, onToggleForm }) => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const handleLogin = async (values: any) => {
//     setLoading(true);
//     try {
//       const payload = {
//         email: values.email,
//         password: values.password,
//       };

//       const response: any = await ApiService.post('/auth/login', payload); // <-- force it "any" or a proper type later
//       console.log(payload, "??????????")
//       console.log('Login response:', response);

//       if (response.success) {
//         const { userId, role, email } = response.data;

//         localStorage.setItem('userEmail', email);
//         localStorage.setItem('userId', userId);
//         localStorage.setItem('role', role);
//         localStorage.setItem('userProfile', JSON.stringify(response.data));
//         alert('User Login successfully!');
//         message.success('Login successful!');
//         handleLoginFlag(role);
//         window.location.reload();
//         // navigate('/dashboard');
//       } else {
//         message.error(response.message || 'Invalid login credentials.');
//       }
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error)) {
//         console.error('Login error:', error);
//         message.error(error.response?.data?.message || 'Login failed. Please try again.');
//       } else {
//         console.error('Unexpected error:', error);
//         message.error('An unexpected error occurred.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{  margin: '0 auto', justifyContent: 'center', width: '100vw' }} >
//       <h2>Login</h2>
//       <Form form={form} name="login" onFinish={handleLogin} layout="vertical">
//         <Form.Item
//           name="email"
//           label="Email"
//           rules={[{ required: true, message: 'Please input your email!' }]}
//         >
//           <Input prefix={<UserOutlined />} placeholder="Email" />
//         </Form.Item>

//         <Form.Item
//           name="password"
//           label="Password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password prefix={<LockOutlined />} placeholder="Password" />
//         </Form.Item>

//         <Form.Item style={{ textAlign: 'right' }}>
//           <Link to="/forgotpassword">Forgot Password?</Link>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" block loading={loading}>
//             Log In
//           </Button>
//         </Form.Item>
//       </Form>
//       <p>
//         Don't have an account?{' '}
//         <button type="button" onClick={onToggleForm}>
//           Register here
//         </button>
//       </p>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import axios from 'axios';

interface LoginProps {
  handleLoginFlag: (role: string) => void;
  onToggleForm: () => void;
}

const Login: React.FC<LoginProps> = ({ handleLoginFlag, onToggleForm }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: any) => {
    setLoading(true);
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };

      const response: any = await ApiService.post('/auth/login', payload);

      if (response.success) {
        const { userId, role, email } = response.data;
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);
        localStorage.setItem('userProfile', JSON.stringify(response.data));
        message.success('Login successful!');
        handleLoginFlag(role);
        window.location.reload();
      } else {
        message.error(response.message || 'Invalid login credentials.');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        message.error(error.response?.data?.message || 'Login failed.');
      } else {
        message.error('Unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '50px',
          borderRadius: '12px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          Login to your account
        </h2>

        <Form form={form} name="login" onFinish={handleLogin} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              style={{ height: '40px', borderRadius: '8px' }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              style={{ height: '40px', borderRadius: '8px' }}
            />
          </Form.Item>

          <div style={{ textAlign: 'right', marginBottom: '10px' }}>
            <Link to="/forgotpassword" style={{ color: '#1890ff' }}>
              Forgot Password?
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={{
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#1890ff',
              }}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Don't have an account?{' '}
          <button
            onClick={onToggleForm}
            style={{
              background: 'none',
              border: 'none',
              color: '#1890ff',
              cursor: 'pointer',
              fontWeight: 500,
              padding: 0,
            }}
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;


