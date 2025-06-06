
// import React, { useState } from 'react';
// import { Button, Form, Input, message } from 'antd';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import ApiService from '../services/ApiService';
// import axios from 'axios';
// import './Login.css';

// interface LoginProps {
//   handleLoginFlag: (role: string) => void;
//   onToggleForm: () => void;
// }

// const Login: React.FC<LoginProps> = ({ handleLoginFlag, onToggleForm }) => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (values: any) => {
//     setLoading(true);
//     try {
//       const payload = {
//         email: values.email,
//         password: values.password,
//       };

//       const response: any = await ApiService.post('/auth/login', payload);

//       if (response.success) {
//         const { userId, role, email } = response.data;
//         localStorage.setItem('userEmail', email);
//         localStorage.setItem('userId', userId);
//         localStorage.setItem('role', role);
//         localStorage.setItem('userProfile', JSON.stringify(response.data));
//         message.success('Login successful!');
//         handleLoginFlag(role);
//         window.location.reload();
//       } else {
//         message.error(response.message || 'Invalid login credentials.');
//       }
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error)) {
//         message.error(error.response?.data?.message || 'Login failed.');
//       } else {
//         message.error('Unexpected error occurred.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         <div className="login-left">
//           <img src="/assets/img/login-page2.jpg" alt="Login Illustration" className="login-image" />
//         </div>
//         <div className="login-right">
//           <h2 className="login-title">Login to your account</h2>
//           <Form form={form} name="login" onFinish={handleLogin} layout="vertical">
//             <Form.Item
//               name="email"
//               label="Email"
//               rules={[{ required: true, message: 'Please input your email!' }]}
//             >
//               <Input
//                 prefix={<UserOutlined />}
//                 placeholder="Email"
//                 className="login-input"
//               />
//             </Form.Item>

//             <Form.Item
//               name="password"
//               label="Password"
//               rules={[{ required: true, message: 'Please input your password!' }]}
//             >
//               <Input.Password
//                 prefix={<LockOutlined />}
//                 placeholder="Password"
//                 className="login-input"
//               />
//             </Form.Item>

//             <div className="login-forgot">
//               <Link to="/forgotpassword" className="login-link">
//                 Forgot Password?
//               </Link>
//             </div>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 block
//                 loading={loading}
//                 className="login-button"
//               >
//                 Log In
//               </Button>
//             </Form.Item>
//           </Form>

//           <p className="login-register-text">
//             Don't have an account?{' '}
//             <button onClick={onToggleForm} className="login-register-button">
//               Register here
//             </button>
//           </p>
//         </div>
//       </div>
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
import './Login.css';

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
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <img src="/assets/img/login-page2.jpg" alt="Login Illustration" className="login-image" />
        </div>
        <div className="login-right">
          <h2 className="login-title">Login to your account</h2>
          <Form form={form} name="login" onFinish={handleLogin} layout="vertical">
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" className="login-input" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" className="login-input" />
            </Form.Item>

            <div className="login-forgot">
              <Link to="/forgotpassword" className="login-link">
                Forgot Password?
              </Link>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="login-button"
              >
                Log In
              </Button>
            </Form.Item>
          </Form>

          <p className="login-register-text">
            Don't have an account?{' '}
            <button onClick={onToggleForm} className="login-register-button">
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
