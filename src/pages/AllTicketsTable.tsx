import React, { useState, useRef, useEffect } from 'react';
import {
    Table,
    Input,
    Button,
    Space,
    message,
    Select,
    Modal,
    Card
} from 'antd';

import type { ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';

interface Ticket {
    id: string;
    key: string;
    orderId: string;
    userId: string;
    ticketStatus: 'pending' | 'inProgress' | 'resolved';
    createdAt: string;
    description: string;
}

const Ticket: React.FC = () => {
    const [orders, setOrders] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>('');
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await ApiService.get('/raise-ticket/', { withCredentials: true });
                const data = Array.isArray(response.data) ? response.data : [];

                const formatted: Ticket[] = data.map((item: any, index: number) => ({
                    id: String(item.id),   // <-- convert id to string here
                    key: index.toString(),
                    orderId: item.orderId,
                    userId: item.userId,
                    ticketStatus: item.ticketStatus || 'pending',
                    description: item.description,
                    createdAt: item.createdAt
                }));

                setOrders(formatted);
            } catch (error) {
                console.error('Error fetching assignments:', error);
                message.error('Failed to fetch tickets.');
            } finally {
                setLoading(false);
            }
        };

        fetchAssignments();
    }, []);
    const updateticketStatus = async (id: string, ticketStatus: string) => {
        setUpdating(true);
        try {
            const response: any = await ApiService.put(`/raise-ticket/editTickets/${id}`, { ticketStatus: ticketStatus });
            if (response.status) {
                alert('ticket status updated successfully');
                message.success('ticket status updated successfully');
                setOrders((prevData) =>
                    prevData.map((order) =>
                        order.id === id
                            ? { ...order, orderStatus: ticketStatus as Ticket['ticketStatus'] }
                            : order
                    )
                );
            } else {
                message.error(response.message || 'Failed to update order status');
            }
        } catch (error) {
            message.error('Error updating order status');
        } finally {
            setUpdating(false);
        }
    };





    const handleStatusChange = (orderId: string, newStatus: string) => {
        setSelectedOrderId(orderId);
        setSelectedStatus(newStatus);
        setIsModalVisible(true);
    };

    const handleModalOk = () => {
        if (selectedOrderId && selectedStatus) {
            updateticketStatus(selectedOrderId, selectedStatus);
        }
        setIsModalVisible(false);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setSelectedOrderId(null);
        setSelectedStatus('');
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const columns: ColumnType<Ticket>[] = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Ticket Status',
            dataIndex: 'ticketStatus',
            key: 'ticketStatus',
            render: (ticketStatus: string, record: Ticket) => (
                <Select
                    value={ticketStatus || 'pending'}
                    onChange={(newStatus) => handleStatusChange(record.id, newStatus)}
                    style={{ width: 180 }}
                >
                    <Select.Option value="pending">Pending</Select.Option>
                    <Select.Option value="inProgress">In Progress</Select.Option>
                    <Select.Option value="resolved">Resolved</Select.Option>
                </Select>
            ),
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_: any, record: Ticket) => (
        //         <Space size="middle">
        //             <Link to={`/orderDetails/${record.userId}/${record.orderId}`}>
        //                 <Button icon={<EyeOutlined />} type="link">
        //                     View
        //                 </Button>
        //             </Link>
        //         </Space>
        //     ),
        // }
    ];

    const filteredOrders = orders.filter(order =>
        Object.values(order).some(value =>
            String(value ?? '').toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <Card
            title={<span style={{ color: '#eb987d', textAlign: 'center', display: 'block' }}>Tickets List</span>}
            style={{ width: 900, margin: '0 auto' }}
        >
            <Space style={{ marginBottom: 16 }}>
                <Input.Search
                    placeholder="Search ticket details..."
                    allowClear
                    value={searchText}
                    onChange={handleSearch}
                    onSearch={value => setSearchText(value)}
                    style={{ width: 250 }}
                    size="large"
                />
            </Space>

            <Table
                columns={columns}
                dataSource={filteredOrders}
                loading={loading || updating}
                bordered
                size="small"
                rowKey="id"
            />

            <Modal
                title="Confirm Status Change"
                open={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                okText="Update"
                cancelText="Cancel"
            >
                <p>
                    Are you sure you want to change the status to <strong>{selectedStatus}</strong>?
                </p>
            </Modal>
        </Card>
    );
};

export default Ticket;
