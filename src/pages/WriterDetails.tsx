import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import {
    Form,
    Input,
    InputNumber,
    Button,
    Select,
    Space,
    Divider,
    message,
    Row,
    Col,
} from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const { Option } = Select;

const WriterDetails: React.FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    interface EducationalDetail {
        degree: string;
        specialization: string;
    }

    const onFinish = async (values: any) => {
        try {
            setLoading(true);
            console.log('Submitting values:', values);

            const formData = {
                ...values,
                userId,
                // Explicitly typing the item parameter
                educationalDetails: values.educationalDetails.filter((item: EducationalDetail) => item.degree && item.specialization) // Ensure no empty entries
            };

            await ApiService.post('/writer-details/', formData);
            alert('Writer details submitted successfully');
            message.success('Writer details submitted successfully');
            form.resetFields();
        } catch (error: any) {
            message.error(`Submission failed: ${error?.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 29 },
            sm: { span: 29 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 29 },
        },
    };
    return (
        // <Form
        //     form={form}
        //     layout="vertical"
        //     autoComplete="off"
        //     onFinish={onFinish}
        //     initialValues={{ numberOfOrdersDelivered: 0 }}
        // >
        //     <Row>

        //         <Col span={11} offset={1}>
        //             <Form.Item
        //                 name="name"
        //                 label="Name"
        //                 rules={[{ required: true, message: 'Please enter the name' }]}
        //             >
        //                 <Input />
        //             </Form.Item>
        //         </Col>
        //         <Col span={11} offset={1}>
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
        //         </Col>
        //     </Row>
        //     <Form.Item
        //         name="mobileNumber"
        //         label="Mobile Number"
        //         rules={[{ required: true, message: 'Please enter mobile number' }]}
        //     >
        //         <Input />
        //     </Form.Item>

        //     <Form.Item
        //         name="minPrice"
        //         label="Min Price"
        //         rules={[{ required: true, message: 'Please enter min price' }]}
        //     >
        //         <InputNumber min={0} style={{ width: '100%' }} />
        //     </Form.Item>

        //     <Form.Item
        //         name="maxPrice"
        //         label="Max Price"
        //         rules={[{ required: true, message: 'Please enter max price' }]}
        //     >
        //         <InputNumber min={0} style={{ width: '100%' }} />
        //     </Form.Item>

        //     <Form.Item name="numberOfOrdersDelivered" label="Number of Orders Delivered"> <InputNumber min={0} style={{ width: '100%' }} /> </Form.Item>

        //     <Form.Item name="yearsOfExperience" label="Years of Experience"> <InputNumber min={0} style={{ width: '100%' }} /> </Form.Item>

        //     <Form.Item name="presentWorkingStatus" label="Present Working Status" >
        //         <Select placeholder="Select Status">
        //             <Option value="freelancer">Freelancer</Option>
        //             <Option value="working in college/university/company">Working in college/university/company</Option>
        //             <Option value="not working">Not working</Option>
        //         </Select>
        //     </Form.Item>

        //     <Form.Item name="workedCountries" label="Worked Countries">
        //         <Select mode="tags" placeholder="Enter countries worked in" />
        //     </Form.Item>

        //     <Form.List name="educationalDetails">
        //         {(fields, { add, remove }) => (
        //             <>
        //                 <Divider>Educational Details</Divider>
        //                 {fields.map(({ key, name, fieldKey, ...restField }) => (
        //                     <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
        //                         <Form.Item
        //                             {...restField}
        //                             name={[name, 'degree']}
        //                             fieldKey={fieldKey ?? key}  // Use `fieldKey ?? key` to ensure it's always a valid type
        //                             rules={[{ required: true, message: 'Degree is required' }]}
        //                         >
        //                             <Input placeholder="Degree" />
        //                         </Form.Item>
        //                         <Form.Item
        //                             {...restField}
        //                             name={[name, 'specialization']}
        //                             fieldKey={fieldKey ?? key}  // Same here for specialization
        //                             rules={[{ required: true, message: 'Specialization is required' }]}
        //                         >
        //                             <Input placeholder="Specialization" />
        //                         </Form.Item>
        //                         <Button onClick={() => remove(name)} danger type="link">Remove</Button>
        //                     </Space>
        //                 ))}
        //                 <Form.Item>
        //                     <Button type="dashed" onClick={() => add()} block>
        //                         Add Educational Detail
        //                     </Button>
        //                 </Form.Item>
        //             </>
        //         )}
        //     </Form.List>



        //     <Form.Item name="subjectProficiency" label="Subject Proficiency">
        //         <Select mode="tags" placeholder="Enter subjects" />
        //     </Form.Item>

        //     <Form.Item name="languageProficiency" label="Language Proficiency">
        //         <Select mode="tags" placeholder="Enter languages" />
        //     </Form.Item>

        //     <Form.Item>
        //         <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
        //     </Form.Item>
        // </Form>

        <>
            <Button onClick={() => navigate(-1)}>Back
            </Button>
            <br></br>
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
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter the name' }]}
                                style={{ marginBottom: 16 }}
                            >
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Please enter the email' },
                                    { type: 'email', message: 'Please enter a valid email' },
                                ]}
                                style={{ marginBottom: 16 }}
                            >
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 16]}>
                        <Col span={12}>
                            <Form.Item
                                name="mobileNumber"
                                label="Mobile Number"
                                rules={[{ required: true, message: 'Please enter mobile number' }]}
                                style={{ marginBottom: 16 }}
                            >
                                <Input style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="altMobileNumber" label="Alternate Mobile Number" style={{ marginBottom: 16 }}>
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
                            <Form.Item
                                name="minPrice"
                                label="Min Price"
                                rules={[{ required: true, message: 'Please enter min price' }]}
                                style={{ marginBottom: 16 }}
                            >
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="maxPrice"
                                label="Max Price"
                                rules={[{ required: true, message: 'Please enter max price' }]}
                                style={{ marginBottom: 16 }}
                            >
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[24, 16]}>
                        <Col span={12}>
                            <Form.Item name="numberOfOrdersDelivered" label="Number of Orders Delivered" style={{ marginBottom: 16 }}>
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="workedCountries" label="Previously Worked Countries" style={{ marginBottom: 16 }}>
                                <Input placeholder="Enter countries worked in" style={{ height: 40 }} />
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
                                                style={{ marginBottom: 16 }}
                                            >
                                                <Input placeholder="Degree" style={{ height: 40 }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={10}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'specialization']}
                                                rules={[{ required: true, message: 'Specialization is required' }]}
                                                style={{ marginBottom: 16 }}
                                            >
                                                <Input placeholder="Specialization" style={{ height: 40 }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                            <Button onClick={() => remove(name)} danger type="link">
                                                Remove
                                            </Button>
                                        </Col>
                                    </Row>
                                ))}
                                <Form.Item style={{ marginBottom: 16 }}>
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
                            <Form.Item name="subjectProficiency" label="Subject Proficiency" style={{ marginBottom: 16 }}>
                                <Select mode="tags" placeholder="Enter subjects" style={{ height: 40 }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="languageProficiency" label="Language Proficiency" style={{ marginBottom: 16 }}>
                                <Select mode="tags" placeholder="Enter languages" style={{ height: 40 }} />
                            </Form.Item>
                        </Col>


                        <Col span={8}>
                            <Form.Item name="yearsOfExperience" label="Years of Experience" style={{ marginBottom: 16 }}>
                                <InputNumber min={0} style={{ width: '100%', height: 40 }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>

                {/* === Present Working Status === */}
                <div style={{ background: '#f9f9f9', borderRadius: 8, padding: 24, marginBottom: 24 }}>
                    <Divider orientation="left">Select Present Working Status</Divider>
                    <Form.Item name="presentWorkingStatus" label="Present Working Status" style={{ marginBottom: 16 }}>
                        <Select placeholder="Select Status" style={{ height: 40 }}>
                            <Option value="freelancer">Freelancer</Option>
                            <Option value="working in college/university/company">
                                Working in college/university/company
                            </Option>
                            <Option value="not working">Not working</Option>
                        </Select>
                    </Form.Item>
                </div>

                {/* === Submit === */}
                <Form.Item style={{ marginBottom: 16 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form></>



    );
};

export default WriterDetails;