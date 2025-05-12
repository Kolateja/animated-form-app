import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import { Card, Typography, Space, Tag, Divider, Button, message, Row, Col } from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined, ExclamationCircleTwoTone, WarningTwoTone } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const { Title, Text } = Typography;
const fadeIn = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.3 }
};
interface WriterDetails {
    id: number;
    name: string;
    email: string;
    mobileNumber: string;
    altMobileNumber: string | null;
    minPrice: number;
    maxPrice: number;
    numberOfOrdersDelivered: number;
    yearsOfExperience: number | null;
    presentWorkingStatus: string;
    workedCountries: string[];
    educationalDetails: { degree: string; specialization: string }[];
    subjectProficiency: string[];
    languageProficiency: string[];
    userId: string;
}


// const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//     transition: { duration: 0.3 }
// };
interface FeedbackDetails {
    id: number;
    orderCode: string;
    writerRating: string;
    numberOfEdits: number;
    failedToDeliver: string;
    laterPriceDemanding: string;
    lateDeliveries: string;
    assignmentFailed: string;
    issues: string;
    userId: string;
}

const WriterDetailsPage: React.FC = () => {
    const { id, userId } = useParams<{ id: string; userId: string }>();
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState<'details' | 'rating' | null>(null);
    const [writerDetails, setWriterDetails] = useState<WriterDetails | null>(null);
    const [feedbackDetails, setFeedbackDetails] = useState<FeedbackDetails | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const writerRes: any = await ApiService.get(`/writer-details/${userId}`);
                const feedbackRes: any = await ApiService.get(`/writer-feedback/${userId}`);
                console.log(writerRes.data, ":::::::::::::")
                if (writerRes.success) {
                    setWriterDetails(writerRes.data); // Set the writer details
                }
                console.log(feedbackRes.data, "??")
                if (feedbackRes.success) {
                    setFeedbackDetails(feedbackRes.data);
                }
            } catch (error) {
                console.error('Error fetching writer data:', error);
            }
        };

        fetchDetails();
    }, [userId]);

    return (
        <div style={{ padding: 24, width: '700px' }}>
            <div>
                <Button onClick={() => navigate(-1)}>Back</Button>
                <Link to={`/add-writer-details/${userId}`}>
                    <Button type="primary" style={{ marginLeft: 8 }}>Add Writer Details</Button>
                </Link>
                <Link to={`/add-writer-feedback/${userId}`}>
                    <Button type="default" style={{ marginLeft: 8 }}>Add Feedback</Button>
                </Link>
            </div>
            <Card
                title={
                    <div
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        onClick={() =>
                            setOpenSection(openSection === 'details' ? null : 'details')
                        }
                    >
                        <Title level={5} style={{ margin: 0 }}>🧑‍💼 Writer Details</Title>
                        {openSection === 'details'
                            ? <MinusSquareOutlined style={{ fontSize: 18 }} />
                            : <PlusSquareOutlined style={{ fontSize: 18 }} />}
                    </div>
                }
                style={{
                    marginBottom: 16,
                    borderRadius: 10,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #f0f0f0',
                    backgroundColor: '#fff',
                }}
                headStyle={{ backgroundColor: '#fafafa', borderRadius: '10px 10px 0 0' }}
                bodyStyle={{ padding: 0 }}
            >
                <AnimatePresence>
                    {openSection === 'details' && (
                        <motion.div
                            key="writerDetails"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ padding: 20 }}
                        >
                            {writerDetails ? (
                                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                                    <Text><strong>Name:</strong> {writerDetails.name}</Text>
                                    <Text><strong>Email:</strong> {writerDetails.email}</Text>
                                    <Text><strong>Mobile Number:</strong> {writerDetails.mobileNumber}</Text>

                                    <div>
                                        <Text strong>Worked Countries:</Text>
                                        <Space wrap>
                                            {writerDetails.workedCountries.map((country, index) => (
                                                <Tag key={index} color="blue">{country}</Tag>
                                            ))}
                                        </Space>
                                    </div>

                                    <div>
                                        <Text strong>Educational Details:</Text>
                                        <ul style={{ marginTop: 4 }}>
                                            {writerDetails.educationalDetails.map((edu, index) => (
                                                <li key={index}>
                                                    <Text>{edu.degree} - {edu.specialization}</Text>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <Text strong>Subject Proficiency:</Text>
                                        <Space wrap>
                                            {writerDetails.subjectProficiency.map((subject, index) => (
                                                <Tag key={index} color="purple">{subject}</Tag>
                                            ))}
                                        </Space>
                                    </div>

                                    <div>
                                        <Text strong>Language Proficiency:</Text>
                                        <Space wrap>
                                            {writerDetails.languageProficiency.map((language, index) => (
                                                <Tag key={index} color="volcano">{language}</Tag>
                                            ))}
                                        </Space>
                                    </div>
                                </Space>
                            ) : (
                                <motion.div
                                    key="noWriterDetails"
                                    style={{
                                        backgroundColor: '#fffbe6',
                                        border: '1px dashed #ffd666',
                                        padding: 20,
                                        borderRadius: 8,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <ExclamationCircleTwoTone twoToneColor="#faad14" style={{ fontSize: 24 }} />
                                    <Text strong>
                                        Writer details not available. Please click "Add Writer Details" to continue.
                                    </Text>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>

            {/* <Card
                title={
                    <div
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        onClick={() =>
                            setOpenSection(openSection === 'rating' ? null : 'rating')
                        }
                    >
                        Writer Rating
                        {openSection === 'rating'
                            ? <MinusSquareOutlined style={{ marginLeft: 8 }} />
                            : <PlusSquareOutlined style={{ marginLeft: 8 }} />}
                    </div>
                }
                style={{ borderRadius: 8 }}
                headStyle={{ backgroundColor: '#f0f2f5' }}
                bodyStyle={{ padding: 0 }}
            >
                <AnimatePresence>
                    {openSection === 'rating' && (
                        <motion.div
                            key="writerRating"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={fadeIn}
                            style={{ padding: 16 }}
                        >
                            {feedbackDetails ? (
                                <motion.div key="feedbackDetails" {...fadeIn}>
                                    <div><strong>Order Code:</strong> {feedbackDetails.orderCode}</div>
                                    <div><strong>Writer Rating:</strong> {feedbackDetails.writerRating}</div>
                                    <div><strong>Number of Edits:</strong> {feedbackDetails.numberOfEdits}</div>
                                    <div><strong>Failed to Deliver:</strong> {feedbackDetails.failedToDeliver}</div>
                                    <div><strong>Later Price Demanding:</strong> {feedbackDetails.laterPriceDemanding}</div>
                                    <div><strong>Late Deliveries:</strong> {feedbackDetails.lateDeliveries}</div>
                                    <div><strong>Assignment Failed:</strong> {feedbackDetails.assignmentFailed}</div>
                                    <div><strong>Issues:</strong> {feedbackDetails.issues}</div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="noFeedbackDetails"
                                    {...fadeIn}
                                    style={{ backgroundColor: '#ffff66', padding: 10 }}
                                >
                                    <strong>
                                        !! Writer rating not available, kindly add the writer rating by clicking Add Feedback button
                                    </strong>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card> */}

            <Card
                title={
                    <div
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClick={() =>
                            setOpenSection(openSection === 'rating' ? null : 'rating')
                        }
                    >
                        <Title level={5} style={{ margin: 0 }}>⭐ Writer Rating</Title>
                        {openSection === 'rating' ? (
                            <MinusSquareOutlined style={{ fontSize: 18 }} />
                        ) : (
                            <PlusSquareOutlined style={{ fontSize: 18 }} />
                        )}
                    </div>
                }
                style={{
                    borderRadius: 10,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    marginBottom: 16,
                    backgroundColor: '#ffffff',
                    border: '1px solid #f0f0f0',
                }}
                headStyle={{
                    backgroundColor: '#fafafa',
                    borderRadius: '10px 10px 0 0',
                }}
                bodyStyle={{ padding: 0 }}
            >
                <AnimatePresence>
                    {openSection === 'rating' && (
                        <motion.div
                            key="writerRating"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ padding: 20 }}
                        >
                            {feedbackDetails ? (
                                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                                    <Text><strong>Order Code:</strong> {feedbackDetails.orderCode}</Text>

                                    <div>
                                        <Text strong>Writer Rating:</Text>{' '}
                                        <Tag>
                                            {feedbackDetails.writerRating}
                                        </Tag>
                                    </div>

                                    <Row gutter={[16, 8]}>
                                        <Col span={12}>
                                            <Text><strong>Number of Edits:</strong> {feedbackDetails.numberOfEdits}</Text>
                                        </Col>
                                        <Col span={12}>
                                            <Text><strong>Failed to Deliver:</strong> {feedbackDetails.failedToDeliver ? 'Yes' : 'No'}</Text>
                                        </Col>
                                        <Col span={12}>
                                            <Text><strong>Late Price Demanding:</strong> {feedbackDetails.laterPriceDemanding ? 'Yes' : 'No'}</Text>
                                        </Col>
                                        <Col span={12}>
                                            <Text><strong>Late Deliveries:</strong> {feedbackDetails.lateDeliveries}</Text>
                                        </Col>
                                        <Col span={12}>
                                            <Text><strong>Assignment Failed:</strong> {feedbackDetails.assignmentFailed ? 'Yes' : 'No'}</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Text><strong>Issues:</strong> {feedbackDetails.issues || 'None'}</Text>
                                        </Col>
                                    </Row>
                                </Space>
                            ) : (
                                <motion.div
                                    key="noFeedbackDetails"
                                    style={{
                                        backgroundColor: '#fff1f0',
                                        border: '1px dashed #ffccc7',
                                        padding: 20,
                                        borderRadius: 8,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <WarningTwoTone twoToneColor="#ff4d4f" style={{ fontSize: 24 }} />
                                    <Text strong>
                                        Writer rating not available. Please click the "Add Feedback" button to provide details.
                                    </Text>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>



        </div>
    );
};

export default WriterDetailsPage;
