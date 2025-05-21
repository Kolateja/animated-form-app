
import React, { useEffect, useState } from 'react';
import { Table, Spin, message, Tag } from 'antd';
import { useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';

interface Order {
    id: number;
    orderStatus: string;
    paymentStatus: string;
    totalAmount: number;
    orderId: string;
    userId: string;
}

interface Props {
    userIdProp?: string; // Optional prop
}

const PaymentDetails: React.FC<Props> = ({ userIdProp }) => {
    const { userId: userIdFromParams } = useParams<{ userId: string }>();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);

    const finalUserId = userIdProp || userIdFromParams || localStorage.getItem('userId') || '';

    const fetchOrders = async (userId: string) => {
        setLoading(true);
        try {
            const response: any = await ApiService.get(`/assignments/orders/${userId}`);
            if (response.success) {
                const allOrders = response.data || [];
                const pendingOrders = allOrders.filter(
                    (order: Order) => order.paymentStatus?.toLowerCase() === 'pending'
                );
                setOrders(pendingOrders);
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
        { title: 'User Id', dataIndex: 'userId', key: 'userId' },
        { title: 'Order Created', dataIndex: 'createdAt', key: 'createdAt' },
        { title: 'Total Amount', dataIndex: 'totalAmount', key: 'totalAmount' },
        { title: 'Order Status', dataIndex: 'orderStatus', key: 'orderStatus' },
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
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

export default PaymentDetails;
