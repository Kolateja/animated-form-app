// import React, { useEffect } from 'react';
// import { Form, Input, InputNumber, Button, message, Checkbox, Rate, Select } from 'antd';
// import { useParams, useNavigate } from 'react-router-dom';
// import ApiService from '../services/ApiService';

// const EditWriterFeedback = () => {
//     const { userId } = useParams();
//     const navigate = useNavigate();
//     const [form] = Form.useForm();
//     const yesNoOptions = [
//         { label: 'Yes', value: 'yes' },
//         { label: 'No', value: 'no' },
//     ];

//     const ratingDescriptions = ['1-Poor', '2-Fair', '3-Good', '4-Very Good', '5-Excellent'];
//     const convertYesNoToBoolean = (obj: any) => {
//         const fields = ['failedToDeliver', 'laterPriceDemanding', 'lateDeliveries', 'assignmentFailed'];
//         fields.forEach((field) => {
//             obj[field] = obj[field] === 'yes' ? 'yes' : 'no';  // Ensure 'yes' or 'no'
//         });
//         return obj;
//     };



//     const onFinish = async (values: any) => {
//         const updatedValues = convertYesNoToBoolean(values);
//         try {
//             const res: any = await ApiService.put(`/writer-feedback/${userId}`, updatedValues);
//             if (res.success) {
//                 alert('writer feedback updates successfully');
//                 message.success('Writer feedback updated successfully');
//                 navigate(`/writerDetails/${userId}`);
//             }
//         } catch (error) {
//             message.error('Failed to update feedback');
//         }
//     };

//     useEffect(() => {
//         const fetchDetails = async () => {
//             try {
//                 const writerRes: any = await ApiService.get(`/writer-feedback/${userId}`);
//                 if (writerRes.success) {
//                     form.setFieldsValue(writerRes.data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching writer feedback:', error);
//             }
//         };

//         fetchDetails();
//     }, [userId]);

//     return (
//         <Form
//             form={form}
//             onFinish={onFinish}
//             layout="vertical"
//             className="feedback-form"
//         >
//             <Form.Item name="orderCode" label="Order Code" rules={[{ required: true }]}>
//                 <Input />
//             </Form.Item>

//             <Form.Item name="writerRating" label="Rating" rules={[{ required: true }]}>
//                 <Rate count={5} tooltips={ratingDescriptions} />
//             </Form.Item>


//             <Form.Item
//                 name="numberOfEdits"
//                 label="Number of Edits"
//                 rules={[{ required: true }]}
//             >
//                 <InputNumber min={0} />
//             </Form.Item>

//             <Form.Item name="failedToDeliver" label="Failed to Deliver" rules={[{ required: true }]}>
//                 <Select options={yesNoOptions} />
//             </Form.Item>

//             <Form.Item name="laterPriceDemanding" label="Later Price Demanding" rules={[{ required: true }]}>
//                 <Select options={yesNoOptions} />
//             </Form.Item>

//             <Form.Item name="lateDeliveries" label="Late Deliveries" rules={[{ required: true }]}>
//                 <Select options={yesNoOptions} />
//             </Form.Item>

//             <Form.Item name="assignmentFailed" label="Assignment Failed" rules={[{ required: true }]}>
//                 <Select options={yesNoOptions} />
//             </Form.Item>

//             <Form.Item name="issues" label="Issues">
//                 <Input.TextArea rows={3} />
//             </Form.Item>

//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                     update Feedback
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default EditWriterFeedback;
import React, { useEffect } from 'react';
import { Form, Input, InputNumber, Button, message, Rate, Select, Row, Col } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';

const EditWriterFeedback = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const yesNoOptions = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];

    const ratingDescriptions = ['1-Poor', '2-Fair', '3-Good', '4-Very Good', '5-Excellent'];

    const convertYesNoToBoolean = (obj: any) => {
        const fields = ['failedToDeliver', 'laterPriceDemanding', 'lateDeliveries', 'assignmentFailed'];
        fields.forEach((field) => {
            obj[field] = obj[field] === 'yes' ? 'yes' : 'no';
        });
        return obj;
    };

    const onFinish = async (values: any) => {
        const updatedValues = convertYesNoToBoolean(values);
        try {
            const res: any = await ApiService.put(`/writer-feedback/${userId}`, updatedValues);
            if (res.success) {
                message.success('Writer feedback updated successfully');
                navigate(`/writerDetails/${userId}`);
            }
        } catch (error) {
            message.error('Failed to update feedback');
        }
    };

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const writerRes: any = await ApiService.get(`/writer-feedback/${userId}`);
                if (writerRes.success) {
                    form.setFieldsValue(writerRes.data);
                }
            } catch (error) {
                console.error('Error fetching writer feedback:', error);
            }
        };
        fetchDetails();
    }, [userId]);

    return (
        <>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <br />
            <Form
                form={form}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
                style={{
                    maxWidth: '100%',
                    width: 1000,
                    margin: '0 auto',
                    padding: 24,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                }}
            >
                <Row gutter={24}>
                    <Col span={8} offset={2}>
                        <Form.Item name="orderCode" label="Order Code" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item name="assignmentFailed" label="Assignment Failed" rules={[{ required: true }]}>
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item name="numberOfEdits" label="Number of Edits" rules={[{ required: true }]}>
                            <InputNumber min={0} style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item name="failedToDeliver" label="Failed to Deliver" rules={[{ required: true }]}>
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item name="laterPriceDemanding" label="Later Price Demanding" rules={[{ required: true }]}>
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item name="lateDeliveries" label="Late Deliveries" rules={[{ required: true }]}>
                            <Select options={yesNoOptions} />
                        </Form.Item>
                    </Col>

                    <Col span={8} offset={2}>
                        <Form.Item name="writerRating" label="Rating" rules={[{ required: true }]}>
                            <Rate count={5} tooltips={ratingDescriptions} />
                        </Form.Item>
                    </Col>

                    <Col span={22} offset={2}>
                        <Form.Item name="issues" label="Issues">
                            <Input.TextArea rows={3} />
                        </Form.Item>
                    </Col>

                    <Col span={22} offset={2} style={{ textAlign: 'center' }}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Update Feedback
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default EditWriterFeedback;
