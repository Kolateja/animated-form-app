import React, { useEffect, useState } from 'react';
import { Button, Card, message } from 'antd';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

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

const WriterEditDetailsPage: React.FC = () => {
    const { id, userId } = useParams<{ id: string; userId: string }>();
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState<'details' | 'rating' | null>(null);
    const [writerDetails, setWriterDetails] = useState<WriterDetails | null>(null);
    const [feedbackDetails, setFeedbackDetails] = useState<FeedbackDetails | null>(null);

    // useEffect(() => {
    //     const fetchDetails = async () => {
    //         try {
    //             const writerRes: any = await ApiService.get(`/writer-details/${userId}`);
    //             const feedbackRes: any = await ApiService.get(`/writer-feedback/${userId}`);
    //             console.log(writerRes.data, ":::::::::::::")
    //             if (writerRes.success) {
    //                 setWriterDetails(writerRes.data); // Set the writer details
    //             }
    //             console.log(feedbackRes.data, "??")
    //             if (feedbackRes.success) {
    //                 setFeedbackDetails(feedbackRes.data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching writer data:', error);
    //         }
    //     };

    //     fetchDetails();
    // }, [userId]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const writerRes: any = await ApiService.get(`/writer-details/${userId}`);
                const feedbackRes: any = await ApiService.get(`/writer-feedback/${userId}`);

                console.log('✅ Full writer response:', writerRes);
                console.log('✅ writerRes.data:', writerRes.data);

                if (writerRes.success) {
                    const data = writerRes.data;

                    try {
                        const parsedWriterDetails: WriterDetails = {
                            ...data,
                            workedCountries: Array.isArray(JSON.parse(data.workedCountries || '[]'))
                                ? JSON.parse(data.workedCountries || '[]')
                                : [JSON.parse(data.workedCountries || '[]')],
                            educationalDetails: JSON.parse(data.educationalDetails || '[]'),
                            subjectProficiency: JSON.parse(data.subjectProficiency || '[]'),
                            languageProficiency: JSON.parse(data.languageProficiency || '[]'),
                        };

                        console.log('✅ Parsed writer details:', parsedWriterDetails);
                        setWriterDetails(parsedWriterDetails);
                    } catch (e) {
                        console.error('🔥 Error parsing writer details:', e);
                    }
                }

                console.log('✅ feedbackRes.data:', feedbackRes.data);
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
        <div style={{ padding: 24 }}>
            <div style={{ marginBottom: 16 }}>
                <Button onClick={() => navigate(-1)}>Back</Button>
                <Link to={`/edit-writer-details/${userId}`}>
                    <Button type="primary" style={{ marginLeft: 8 }}>Edit Writer Details</Button>
                </Link>
                <Link to={`/edit-writer-feedback/${userId}`}>
                    <Button type="default" style={{ marginLeft: 8 }}>Edit Feedback</Button>
                </Link>
            </div>
            <Card
                title={
                    <div
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                        onClick={() =>
                            setOpenSection(openSection === 'details' ? null : 'details')
                        }
                    >
                        Writer Details
                        {openSection === 'details'
                            ? <MinusSquareOutlined style={{ marginLeft: 8 }} />
                            : <PlusSquareOutlined style={{ marginLeft: 8 }} />}
                    </div>
                }
                style={{ marginBottom: 16, borderRadius: 8 }}
                headStyle={{ backgroundColor: '#f0f2f5' }}
                bodyStyle={{ padding: 0 }}
            >
                <AnimatePresence>
                    {openSection === 'details' && (
                        <motion.div
                            key="writerDetails"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={fadeIn}
                            style={{ padding: 16 }}
                        >
                            {writerDetails ? (
                                <motion.div key="writerDetails" {...fadeIn}>
                                    <div>
                                        <strong>Name:</strong> {writerDetails.name}
                                    </div>
                                    <div>
                                        <strong>Email:</strong> {writerDetails.email}
                                    </div>
                                    <div>
                                        <strong>Mobile Number:</strong> {writerDetails.mobileNumber}
                                    </div>
                                    <div>
                                        <strong>Worked Countries:</strong>
                                        <ul>
                                            {writerDetails.workedCountries.map((country, index) => (
                                                <li key={index}>{country}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <strong>Educational Details:</strong>
                                        <ul>
                                            {writerDetails.educationalDetails.map((edu, index) => (
                                                <li key={index}>
                                                    {edu.degree} - {edu.specialization}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <strong>Subject Proficiency:</strong>
                                        <ul>
                                            {writerDetails.subjectProficiency.map((subject, index) => (
                                                <li key={index}>{subject}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <strong>Language Proficiency:</strong>
                                        <ul>
                                            {writerDetails.languageProficiency.map((language, index) => (
                                                <li key={index}>{language}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="noWriterDetails"
                                    {...fadeIn}
                                    style={{ backgroundColor: '#ffff66', padding: 10 }}
                                >
                                    <strong>
                                        !! Writer details not available, kindly add the writer details by clicking the "Add Writer Details" button.
                                    </strong>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>

            <Card
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
            </Card>



        </div>
    );
};

export default WriterEditDetailsPage;
