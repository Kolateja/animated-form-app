// import React, { useEffect, useState } from 'react';
// import {
//     Form,
//     Input,
//     Button,
//     message,
//     InputNumber,
//     Select,
//     Space,
//     Divider,
//     Spin
// } from 'antd';
// import { useParams, useNavigate } from 'react-router-dom';
// import ApiService from '../services/ApiService';

// const { Option } = Select;

// const EditWriterDetails = () => {
//     const { userId } = useParams();
//     const navigate = useNavigate();
//     const [form] = Form.useForm();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchDetails = async () => {
//             setLoading(true);
//             try {
//                 const writerRes: any = await ApiService.get(`/writer-details/${userId}`);
//                 if (writerRes.success) {
//                     form.setFieldsValue(writerRes.data);
//                 } else {
//                     message.error(writerRes.message || 'Failed to fetch writer details');
//                 }
//             } catch (error) {
//                 console.error('Error fetching writer data:', error);
//                 message.error('Error fetching writer details');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDetails();
//     }, [userId]);

//     const onFinish = async (values: any) => {
//         try {
//             const res: any = await ApiService.put(`/writer-details/${userId}`, values);
//             if (res.success) {
//                 alert('writer details updates successfully');
//                 message.success('Writer details updated successfully');
//                 navigate(`/writerDetails/${userId}`);
//             } else {
//                 message.error(res.message || 'Failed to update writer details');
//             }
//         } catch (error) {
//             console.error('Update error:', error);
//             message.error('Failed to update writer details');
//         }
//     };

//     if (loading) return <Spin style={{ display: 'block', marginTop: 100 }} tip="Loading..." />;

//     return (
//         <Form
//             form={form}
//             layout="vertical"
//             onFinish={onFinish}
//             initialValues={{ numberOfOrdersDelivered: 0 }}
//         >
//             <Form.Item
//                 name="name"
//                 label="Name"
//                 rules={[{ required: true, message: 'Please enter the name' }]}
//             >
//                 <Input />
//             </Form.Item>

//             <Form.Item
//                 name="email"
//                 label="Email"
//                 rules={[
//                     { required: true, message: 'Please enter the email' },
//                     { type: 'email', message: 'Please enter a valid email' }
//                 ]}
//             >
//                 <Input />
//             </Form.Item>

//             <Form.Item
//                 name="mobileNumber"
//                 label="Mobile Number"
//                 rules={[{ required: true, message: 'Please enter mobile number' }]}
//             >
//                 <Input />
//             </Form.Item>

//             <Form.Item
//                 name="minPrice"
//                 label="Min Price"
//                 rules={[{ required: true, message: 'Please enter min price' }]}
//             >
//                 <InputNumber min={0} style={{ width: '100%' }} />
//             </Form.Item>

//             <Form.Item
//                 name="maxPrice"
//                 label="Max Price"
//                 rules={[{ required: true, message: 'Please enter max price' }]}
//             >
//                 <InputNumber min={0} style={{ width: '100%' }} />
//             </Form.Item>

//             <Form.Item
//                 name="numberOfOrdersDelivered"
//                 label="Number of Orders Delivered"
//             >
//                 <InputNumber min={0} style={{ width: '100%' }} />
//             </Form.Item>

//             <Form.Item
//                 name="yearsOfExperience"
//                 label="Years of Experience"
//             >
//                 <InputNumber min={0} style={{ width: '100%' }} />
//             </Form.Item>

//             <Form.Item
//                 name="presentWorkingStatus"
//                 label="Present Working Status"
//             >
//                 <Select placeholder="Select Status">
//                     <Option value="freelancer">Freelancer</Option>
//                     <Option value="working in college/university/company">
//                         Working in college/university/company
//                     </Option>
//                     <Option value="not working">Not working</Option>
//                 </Select>
//             </Form.Item>

//             <Form.Item
//                 name="workedCountries"
//                 label="Worked Countries"
//             >
//                 <Select mode="tags" placeholder="Enter countries worked in" />
//             </Form.Item>

//             <Form.List name="educationalDetails">
//                 {(fields, { add, remove }) => (
//                     <>
//                         <Divider>Educational Details</Divider>
//                         {fields.map(({ key, name, ...restField }) => (
//                             <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
//                                 <Form.Item
//                                     {...restField}
//                                     name={[name, 'degree']}
//                                     rules={[{ required: true, message: 'Degree is required' }]}
//                                 >
//                                     <Input placeholder="Degree" />
//                                 </Form.Item>
//                                 <Form.Item
//                                     {...restField}
//                                     name={[name, 'specialization']}
//                                     rules={[{ required: true, message: 'Specialization is required' }]}
//                                 >
//                                     <Input placeholder="Specialization" />
//                                 </Form.Item>
//                                 <Button onClick={() => remove(name)} danger type="link">
//                                     Remove
//                                 </Button>
//                             </Space>
//                         ))}
//                         <Form.Item>
//                             <Button type="dashed" onClick={() => add()} block>
//                                 Add Educational Detail
//                             </Button>
//                         </Form.Item>
//                     </>
//                 )}
//             </Form.List>

//             <Form.Item
//                 name="subjectProficiency"
//                 label="Subject Proficiency"
//             >
//                 <Select mode="tags" placeholder="Enter subjects" />
//             </Form.Item>

//             <Form.Item
//                 name="languageProficiency"
//                 label="Language Proficiency"
//             >
//                 <Select mode="tags" placeholder="Enter languages" />
//             </Form.Item>

//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                     Update
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default EditWriterDetails;
import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Button,
    message,
    InputNumber,
    Select,
    Divider,
    Spin,
    Row,
    Col,
} from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';

const { Option } = Select;

const EditWriterDetails = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const writerRes: any = await ApiService.get(`/writer-details/${userId}`);
                if (writerRes.success) {
                    form.setFieldsValue(writerRes.data);
                } else {
                    message.error(writerRes.message || 'Failed to fetch writer details');
                }
            } catch (error) {
                console.error('Error fetching writer data:', error);
                message.error('Error fetching writer details');
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [userId]);

    const onFinish = async (values: any) => {
        try {
            const res: any = await ApiService.put(`/writer-details/${userId}`, values);
            if (res.success) {
                message.success('Writer details updated successfully');
                navigate(`/writerDetails/${userId}`);
            } else {
                message.error(res.message || 'Failed to update writer details');
            }
        } catch (error) {
            console.error('Update failed:', error);
            message.error('Error updating writer details');
        }
    };

    if (loading) return <Spin tip="Loading..." />;

    return (
        <>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <br />
            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
                initialValues={{ numberOfOrdersDelivered: 0 }}
                style={{
                    maxWidth: '100%',
                    width: 1000,
                    margin: '0 auto',
                    padding: 24,
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
                }}
            >
                {/* === Personal Information === */}
                <div style={{ background: '#f9f9f9', borderRadius: 8, padding: 24, marginBottom: 24 }}>
                    <Divider orientation="left">Personal Information</Divider>
                    <Row gutter={[24, 16]}>
                        <Col span={12}>
                            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true }, { type: 'email' }]}
                            >
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 16]}>
                        <Col span={12}>
                            <Form.Item name="mobileNumber" label="Mobile Number" rules={[{ required: true }]}>
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="altMobileNumber" label="Alternate Mobile Number">
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>

                {/* === Pricing & Experience Metrics === */}
                <div style={{ background: '#f9f9f9', borderRadius: 8, padding: 24, marginBottom: 24 }}>
                    <Divider orientation="left">Pricing & Experience Metrics</Divider>
                    <Row gutter={[24, 16]}>
                        <Col span={12}>
                            <Form.Item name="minPrice" label="Min Price" rules={[{ required: true }]}>
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="maxPrice" label="Max Price" rules={[{ required: true }]}>
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 16]}>
                        <Col span={12}>
                            <Form.Item name="numberOfOrdersDelivered" label="Number of Orders Delivered">
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="workedCountries" label="Previously Worked Countries">
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>

                {/* === Educational Background === */}
                <div style={{ background: '#f9f9f9', borderRadius: 8, padding: 24, marginBottom: 24 }}>
                    <Divider orientation="left">Educational Background</Divider>
                    <Form.List name="educationalDetails">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Row key={key} gutter={24} align="middle">
                                        <Col span={10}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'degree']}
                                                rules={[{ required: true, message: 'Degree is required' }]}
                                            >
                                                <Input placeholder="Degree" style={{ height: 40 }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'specialization']}
                                                rules={[{ required: true, message: 'Specialization is required' }]}
                                            >
                                                <Input placeholder="Specialization" style={{ height: 40 }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                            <Button onClick={() => remove(name)} danger type="link">Remove</Button>
                                        </Col>
                                    </Row>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block style={{ height: 40 }}>
                                        Add Educational Detail
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>

                {/* === Subject, Language & Experience Details === */}
                <div style={{ background: '#f9f9f9', borderRadius: 8, padding: 24, marginBottom: 24 }}>
                    <Divider orientation="left">Subject, Language & Experience Details</Divider>
                    <Row gutter={[24, 16]}>
                        <Col span={8}>
                            <Form.Item name="subjectProficiency" label="Subject Proficiency">
                                <Select mode="tags" placeholder="Enter subjects" style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="languageProficiency" label="Language Proficiency">
                                <Select mode="tags" placeholder="Enter languages" style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="yearsOfExperience" label="Years of Experience">
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>

                {/* === Present Working Status === */}
                <div style={{ background: '#f9f9f9', borderRadius: 8, padding: 24, marginBottom: 24 }}>
                    <Divider orientation="left">Select Present Working Status</Divider>
                    <Form.Item name="presentWorkingStatus" label="Present Working Status">
                        <Select placeholder="Select Status" style={{ height: 40 }}>
                            <Option value="freelancer">Freelancer</Option>
                            <Option value="working in college/university/company">Working in college/university/company</Option>
                            <Option value="not working">Not working</Option>
                        </Select>
                    </Form.Item>
                </div>

                {/* === Submit Button === */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default EditWriterDetails;
