
import React, { useEffect, useState } from 'react';
import { Table, Spin, message, Tag } from 'antd';
import { useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';

interface Order {
    id: number;
    orderStatus: string;
    paymentStatus: string;
    totalAmount: number;
    subject: string;
    university: string;
    deadline: string;
    wordCount: number;
    pages: number;
    description: string;
    agreement: boolean;
    orderId: string;
    userId: string;
    createdAt: string;
    updatedAt: string
}

interface Props {
    userIdProp?: string; // Optional prop
}

const OrderDetailsComponent: React.FC<Props> = ({ userIdProp }) => {
    const { userId: userIdFromParams } = useParams<{ userId: string }>();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);

    const finalUserId = userIdProp || userIdFromParams || localStorage.getItem('userId') || '';

    const fetchOrders = async (userId: string) => {
        setLoading(true);
        try {
            const response: any = await ApiService.get(`/assignments/orders/${userId}`);
            if (response.success) {
                const sortedOrders = (response.data || []).sort((a: Order, b: Order) =>
                    new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
                );
                setOrders(sortedOrders);
            } else {
                message.error(response.message || 'Failed to fetch orders.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            message.error('An error occurred while fetching orders.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (finalUserId) {
            fetchOrders(finalUserId);
        }
    }, [finalUserId]);
  

    const columns = [
        { title: 'Order ID', dataIndex: 'orderId', key: 'orderId' },
        { title: 'Subject', dataIndex: 'subject', key: 'subject' },
        { title: 'University', dataIndex: 'university', key: 'university' },
        { title: 'Deadline', dataIndex: 'deadline', key: 'deadline' },
        { title: 'Word Count', dataIndex: 'wordCount', key: 'wordCount' },
        { title: 'Pages', dataIndex: 'pages', key: 'pages' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Order Created', dataIndex: 'createdAt', key: 'createdAt' },
        { title: 'Total Amount', dataIndex: 'totalAmount', key: 'totalAmount' },
        { title: 'Order Status', dataIndex: 'orderStatus', key: 'orderStatus' },
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            render: (status: string) => {
                let color = 'default';
                let display = status;

                switch (status.toLowerCase()) {
                    case 'pending':
                        color = 'orange';
                        display = 'Pending';
                        break;
                    case 'in progress':
                        color = 'blue';
                        display = 'In Progress';
                        break;
                    case 'completed':
                        color = 'green';
                        display = 'Completed';
                        break;
                    default:
                        color = 'red';
                        break;
                }

                return <Tag color={color}>{display}</Tag>;
            }
        }
    ];


    return (
        <div style={{ padding: '24px' }}>
            {/* <h2>User Orders</h2> */}
            {loading ? (
                <Spin size="large" />
            ) : (
                <Table
                    dataSource={orders}
                    columns={columns}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                />
            )}
        </div>
    );
};

export default OrderDetailsComponent;
