
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spin, Typography, message, Avatar } from 'antd';
import {
    HourglassOutlined,
    CheckCircleOutlined,
    PlayCircleOutlined,
    InfoCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';
import ApiService from '../services/ApiService';
import ProfileUser from './Profile';

const { Title } = Typography;

interface OrderStatusCount {
    orderStatus: string;
    count: number;
}

const statusMeta = {
    pending: { color: '#FFA726', icon: <HourglassOutlined /> },
    inProgress: { color: '#42A5F5', icon: <PlayCircleOutlined /> },
    completed: { color: '#66BB6A', icon: <CheckCircleOutlined /> },
    awaitingClarification: { color: '#FFCA28', icon: <InfoCircleOutlined /> },
};
interface TicketStatusCount {
    ticketStatus: string;
    count: number;
}
const statusMetaTicket = {
    pending: { color: '#FFA726', icon: <HourglassOutlined /> },
    inProgress: { color: '#42A5F5', icon: <PlayCircleOutlined /> },
    resolved: { color: '#66BB6A', icon: <CheckCircleOutlined /> },
};

const SuperAdminDashboard: React.FC = () => {
    const [orderStatusCounts, setOrderStatusCounts] = useState<Record<string, number>>({
        pending: 0,
        inProgress: 0,
        completed: 0,
        awaitingClarification: 0,
    });
    const [loading, setLoading] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [ticketStatusCounts, setTicketStatusCounts] = useState<Record<string, number>>({
        pending: 0,
        inProgress: 0,
        resolved: 0,
    });
    useEffect(() => {
        fetchOrderStatusCounts();
    }, []);
    useEffect(() => {
        fetchTicketStatusCounts();
    }, []);
    const fetchTicketStatusCounts = async () => {
        setLoading(true);
        try {
            const response: any = await ApiService.get('/raise-ticket/ticket-counts');
            if (response.success && Array.isArray(response.data)) {
                const defaultCounts = {
                    pending: 0,
                    inProgress: 0,
                    resolved: 0,
                };
                response.data.forEach((item: TicketStatusCount) => {
                    defaultCounts[item.ticketStatus as keyof typeof defaultCounts] = item.count;
                });
                setTicketStatusCounts(defaultCounts);
            } else {
                message.error(response.message || 'Failed to fetch order status counts.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            message.error('An error occurred while fetching order status counts.');
        } finally {
            setLoading(false);
        }
    };

    const fetchOrderStatusCounts = async () => {
        setLoading(true);
        try {
            const response: any = await ApiService.get('/assignments/status-counts');
            if (response.success && Array.isArray(response.data)) {
                const defaultCounts = {
                    pending: 0,
                    inProgress: 0,
                    completed: 0,
                    awaitingClarification: 0,
                };
                response.data.forEach((item: OrderStatusCount) => {
                    defaultCounts[item.orderStatus as keyof typeof defaultCounts] = item.count;
                });
                setOrderStatusCounts(defaultCounts);
            } else {
                message.error(response.message || 'Failed to fetch order status counts.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            message.error('An error occurred while fetching order status counts.');
        } finally {
            setLoading(false);
        }
    };

    return (
        // <div style={{ padding: 24, fontFamily: "'Poppins', sans-serif" }}>
        //     {/* Header */}
        //     <div style={{
        //         display: 'flex',
        //         justifyContent: 'space-between',
        //         alignItems: 'center',
        //         marginBottom: 32,
        //         // width: '100vw'
        //     }}>
        //         <Title level={2} style={{ margin: 0 }}>🎓Super Admin Dashboard</Title>
        //         <Avatar
        //             size={24}
        //             icon={<UserOutlined />}
        //             style={{ cursor: 'pointer', backgroundColor: '#1890ff' }}
        //             onClick={() => setShowProfile(!showProfile)}
        //         />
        //     </div>

        //     {/* Profile Slide Toggle */}
        //     {showProfile && (
        //         <div style={{ marginBottom: 32 }}>
        //             <ProfileUser />
        //         </div>
        //     )}

        //     {/* Status Cards */}
        //     <Row gutter={[24, 24]} justify="start">
        //         {loading ? (
        //             <Col span={24} style={{ textAlign: 'center' }}>
        //                 <Spin size="large" />
        //             </Col>
        //         ) : (
        //             Object.entries(orderStatusCounts).map(([status, count]) => (
        //                 <Col xs={24} sm={12} md={6} key={status}>
        //                     <Card
        //                         bordered={false}
        //                         hoverable
        //                         style={{
        //                             backgroundColor: statusMeta[status as keyof typeof statusMeta].color,
        //                             color: '#fff',
        //                             textAlign: 'center',
        //                             borderRadius: 16,
        //                             boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
        //                             transition: 'transform 0.3s',
        //                         }}
        //                     >
        //                         <div style={{ fontSize: '36px', marginBottom: 8 }}>
        //                             {statusMeta[status as keyof typeof statusMeta].icon}
        //                         </div>
        //                         <div style={{ fontSize: '18px', fontWeight: 600 }}>
        //                             {status.replace(/([A-Z])/g, ' $1').toUpperCase()}
        //                         </div>
        //                         <div style={{ fontSize: '28px', fontWeight: 700 }}>
        //                             {count}
        //                         </div>
        //                     </Card>
        //                 </Col>
        //             ))
        //         )}
        //     </Row>
        // </div>

        <div style={{ padding: 32, fontFamily: "'Poppins', sans-serif", backgroundColor: '#088ba1', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                padding: 16,
                borderRadius: 12,
                backgroundColor: '#088ba1',
                boxShadow: '0 2px 12px rgba(40, 147, 228, 0.06)',
            }}>
                <Title level={3} style={{ margin: 0, color: '#fff' }}>🎓 Super Admin Dashboard</Title>
                <Avatar
                    size={20}
                    icon={<UserOutlined />}
                    style={{ cursor: 'pointer', backgroundColor: '#1890ff' }}
                    onClick={() => setShowProfile(!showProfile)}
                />
            </div>

            {/* Profile Slide Toggle */}
            {showProfile && (
                <div style={{
                    marginBottom: 20,
                    padding: 16,
                    borderRadius: 12,
                    // backgroundColor: '#ffffff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <ProfileUser />
                </div>
            )}

            {/* Status Cards */}
            <Card
                title="📦 Order Status"
                bordered={false}
                style={{ marginBottom: 34, borderRadius: 16, marginTop: 34 }}
                headStyle={{ fontSize: 16, backgroundColor: '#e6f7ff' }}
            >
                <Row gutter={[24, 24]}>
                    {loading ? (
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Spin size="large" />
                        </Col>
                    ) : (
                        Object.entries(orderStatusCounts).map(([status, count]) => (
                            <Col xs={24} sm={12} md={6} key={status}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{
                                        backgroundColor: statusMeta[status as keyof typeof statusMeta].color
                                        ,
                                        color: '#fff',
                                        borderRadius: 12,
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{ fontSize: 36, marginBottom: 8 }}>
                                        {statusMeta[status as keyof typeof statusMeta].icon}
                                    </div>
                                    <div style={{ fontSize: 18, fontWeight: 600 }}>
                                        {status.replace(/([A-Z])/g, ' $1').toUpperCase()}
                                    </div>
                                    <div style={{ fontSize: 28, fontWeight: 700 }}>{count}</div>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Card>

            {/* Ticket Status */}
            <Card
                title="🎫 Ticket Status"
                bordered={false}
                style={{ marginBottom: 24, borderRadius: 16 }}
                headStyle={{ fontSize: 16, backgroundColor: '#fff1f0' }}
            >
                <Row gutter={[24, 24]}>
                    {loading ? (
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Spin size="large" />
                        </Col>
                    ) : (
                        Object.entries(ticketStatusCounts).map(([status, count]) => (
                            <Col xs={24} sm={12} md={6} key={status}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{

                                        backgroundColor: statusMetaTicket[status as keyof typeof statusMetaTicket].color,
                                        color: '#fff',
                                        borderRadius: 12,
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{ fontSize: 36, marginBottom: 8 }}>
                                        {statusMetaTicket[status as keyof typeof statusMetaTicket].icon}
                                    </div>
                                    <div style={{ fontSize: 18, fontWeight: 600 }}>
                                        {status.replace(/([A-Z])/g, ' $1').toUpperCase()}
                                    </div>
                                    <div style={{ fontSize: 28, fontWeight: 700 }}>{count}</div>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Card>
        </div>

    );
};

export default SuperAdminDashboard;

