// import React, { useEffect, useState } from 'react';
// import { Form, Input, DatePicker, Button, message } from 'antd';
// import ApiService from '../services/ApiService';
// import dayjs from 'dayjs';

// const AcademicDetailsForm: React.FC = () => {
//   const [form] = Form.useForm();
//   const [academicId, setAcademicId] = useState<number | null>(null);
//   const [loading, setLoading] = useState(true);

//   const userId = localStorage.getItem('userId'); // Adjust based on your auth handling

//   useEffect(() => {
//     const fetchAcademicDetails = async () => {
//       try {
//         const response = await ApiService.get(`/academic-details/${userId}`);
//         const data = response.data; // based on your controller response structure

//         if (data) {
//           setAcademicId(data.id); // needed for PUT request
//           form.setFieldsValue({
//             ...data,
//             dateOfBirth: data.dateOfBirth ? dayjs(data.dateOfBirth) : null,
//           });
//         }
//       } catch (error) {
//         console.log('No existing academic details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchAcademicDetails();
//     }
//   }, [userId, form]);

//   const onFinish = async (values: any) => {
//     const formattedValues = {
//       ...values,
//       dateOfBirth: values.dateOfBirth?.format('YYYY-MM-DD'),
//     };

//     try {
//       if (academicId) {
//         // Edit
//         await ApiService.put(`/academic-details/${academicId}`, { ...formattedValues, userId });
//         alert('Academic details updated successfully!');
//         message.success('Academic details updated successfully!');
//       } else {
//         // Create
//         await ApiService.post('/academic-details/', formattedValues);
//         alert('Academic details created successfully!');
//         message.success('Academic details created successfully!');
//       }
//     } catch (error) {
//       console.error('Submission failed:', error);
//       message.error('Something went wrong.');
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <Form form={form} layout="vertical" onFinish={onFinish}>
//       <Form.Item
//         label="University"
//         name="university"
//         rules={[{ required: true, message: 'Please enter your university' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Date of Birth"
//         name="dateOfBirth"
//         rules={[{ required: true, message: 'Please select your date of birth' }]}
//       >
//         <DatePicker style={{ width: '100%' }} />
//       </Form.Item>

//       <Form.Item
//         label="Semester"
//         name="semester"
//         rules={[{ required: true, message: 'Please enter your semester' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Course"
//         name="course"
//         rules={[{ required: true, message: 'Please enter your course' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="State/Province of Origin"
//         name="stateProvinceOfOrigin"
//         rules={[{ required: true, message: 'Please enter your state/province of origin' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Country of Origin"
//         name="countryOfOrigin"
//         rules={[{ required: true, message: 'Please enter your country of origin' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Current Country of Study"
//         name="currentCountryOfStudy"
//         rules={[{ required: true, message: 'Please enter your current country of study' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Current State/Province of Study"
//         name="currentStateProvinceOfStudy"
//         rules={[{ required: true, message: 'Please enter your current state/province of study' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           {academicId ? 'Edit Details' : 'Submit'}
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default AcademicDetailsForm;
import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker, Button, message, Row, Col } from 'antd';
import ApiService from '../services/ApiService';
import dayjs from 'dayjs';

const AcademicDetailsForm: React.FC = () => {
  const [form] = Form.useForm();
  const [academicId, setAcademicId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchAcademicDetails = async () => {
      try {
        const response = await ApiService.get(`/academic-details/${userId}`);
        const data = response.data;
        if (data) {
          setAcademicId(data.id);
          form.setFieldsValue({
            ...data,
            dateOfBirth: data.dateOfBirth ? dayjs(data.dateOfBirth) : null,
          });
        }
      } catch (error) {
        console.log('No existing academic details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchAcademicDetails();
    }
  }, [userId, form]);

  const onFinish = async (values: any) => {
    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth?.format('YYYY-MM-DD'),
      userId,
    };

    try {
      if (academicId) {
        await ApiService.put(`/academic-details/${academicId}`, formattedValues);
        message.success('Academic details updated successfully!');
      } else {
        await ApiService.post('/academic-details/', formattedValues);
        message.success('Academic details created successfully!');
      }
      setIsEditMode(false);
    } catch (error) {
      console.error('Submission failed:', error);
      message.error('Something went wrong.');
    }
  };

  if (loading) return <p>Loading...</p>;

  const renderItem = (label: string, name: string, isDate = false) => (
    <Col span={6}>
      <Form.Item label={label} name={name}>
        {isEditMode ? (
          isDate ? (
            <DatePicker style={{ width: '100%' }} />
          ) : (
            <Input />
          )
        ) : (
          <Input disabled />
        )}
      </Form.Item>
    </Col>
  );

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <h2 style={{ textAlign: 'center', color: '#f28c00' }}>Academic Details</h2>
      <Row gutter={24}>
        {renderItem('University', 'university')}
        {renderItem('Date of Birth', 'dateOfBirth', true)}
        {renderItem('Semester', 'semester')}
        {renderItem('Course', 'course')}
        {renderItem('State/Province of Origin', 'stateProvinceOfOrigin')}
        {renderItem('Country of Origin', 'countryOfOrigin')}
        {renderItem('Current Country of Study', 'currentCountryOfStudy')}
        {renderItem('Current State/Province of Study', 'currentStateProvinceOfStudy')}
      </Row>

      <Form.Item>
        {isEditMode ? (
          <div style={{ display: 'flex', gap: 8 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button onClick={() => setIsEditMode(false)}>Cancel</Button>
          </div>
        ) : (
          <Button type="primary" onClick={() => setIsEditMode(true)}>
            Edit
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default AcademicDetailsForm;
