import React, { useEffect, useState } from 'react';
import { Table, Spin, message } from 'antd';
import { useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';

interface Order {
    id: number;
    ticketStatus: string;
    description: string;
    orderId: string;
    userId: string;
    createdAt:string
}
interface Props {
    userIdProp?: string; // Optional prop
}

const StudentTickets: React.FC<Props> = ({ userIdProp }) => {
    const { userId: userIdFromParams } = useParams<{ userId: string }>();
    const [tickets, setTickets] = useState<Order[]>([]);

    const [loading, setLoading] = useState(false);

    const finalUserId = userIdProp || userIdFromParams || localStorage.getItem('userId') || '';


    const fetchTickets = async (userId: string) => {
        setLoading(true);
        try {
            const response: any = await ApiService.get(`/raise-ticket/ticket/${userId}`);
            if (response.success) {
                const sortedOrders = (response.data || [])
                setTickets(sortedOrders);
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
            fetchTickets(finalUserId);
        }
    }, [finalUserId]);

    const columns = [
        { title: 'Order ID', dataIndex: 'orderId', key: 'orderId' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Status', dataIndex: 'ticketStatus', key: 'ticketStatus' },
        { title: 'CreatedDate', dataIndex: 'createdAt', key: 'createdAt' },
    ];

    return (
        <div style={{ padding: '24px' }}>
            {loading ? (
                <Spin size="large" />
            ) : (
                <Table
                    dataSource={tickets}
                    columns={columns}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                />
            )}
        </div>
    );
};

export default StudentTickets;