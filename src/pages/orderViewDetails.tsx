// src/pages/OrderViewComponent.tsx

import React, { useEffect, useState } from 'react';
import { Card, Spin, message } from 'antd';
import { useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';

interface AssignmentDetails {
    orderStatus: string;
    subject: string;
    description: string;
    wordCount: number;
    pages: number;
    university: string;
    deadline: string;
    agreement: boolean;
    userId: string | null;
    orderId: string;
    fileUrls: string[];
    id: number;
}

const OrderViewComponent: React.FC = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const [orderDetails, setOrderDetails] = useState<AssignmentDetails | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (orderId) {
            fetchOrderDetails(orderId);
        }
    }, [orderId]);

    const fetchOrderDetails = async (orderId: string) => {
        setLoading(true);
        try {
            const response: any = await ApiService.get(`/assignments/${orderId}`);
            console.log('Order Details Response:', response);

            if (response.success) {
                setOrderDetails(response.data);
            } else {
                message.error(response.message || 'Failed to fetch order details.');
            }
        } catch (error: unknown) {
            console.error('Fetch error:', error);
            message.error('An error occurred while fetching order details.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '24px' }}>
            {/* <h2>Order Details</h2> */}
            {loading ? (
                <Spin size="large" />
            ) : (
                orderDetails && (
                    <Card title={`Order ID: ${orderDetails.orderId}`} bordered={false}>
                        <p><strong>Status:</strong> {orderDetails.orderStatus}</p>
                        <p><strong>Subject:</strong> {orderDetails.subject}</p>
                        <p><strong>Description:</strong> {orderDetails.description}</p>
                        <p><strong>Word Count:</strong> {orderDetails.wordCount}</p>
                        <p><strong>Pages:</strong> {orderDetails.pages}</p>
                        <p><strong>University:</strong> {orderDetails.university}</p>
                        <p><strong>Deadline:</strong> {new Date(orderDetails.deadline).toLocaleString()}</p>
                        <p><strong>Agreement:</strong> {orderDetails.agreement ? 'Yes' : 'No'}</p>
                        <p><strong>User ID:</strong> {orderDetails.userId ?? 'N/A'}</p>
                        {Array.isArray((orderDetails as any).fileUrls) && orderDetails.fileUrls.length > 0 && (
                            <div>
                                <strong>Files:</strong>
                                <ul>
                                    {orderDetails.fileUrls.map((url: string, index: number) => (
                                        <li key={index}>
                                            <a href={url} target="_blank" rel="noopener noreferrer">
                                                View File {index + 1}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </Card>
                )
            )}
        </div>
    );
};

export default OrderViewComponent;
