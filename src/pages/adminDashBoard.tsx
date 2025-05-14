// import React, { useEffect, useState } from 'react';
// import { Card, Col, Row, Spin, message } from 'antd';
// import {
//     HourglassOutlined,
//     CheckCircleOutlined,
//     PlayCircleOutlined,
//     InfoCircleOutlined,
// } from '@ant-design/icons';
// import ApiService from '../services/ApiService';
// import BirthdayNotifications from './BirthdayNotifications';
// import ProfileUser from './Profile';
// import Consultancy from './Consultanices';

// interface OrderStatusCount {
//     orderStatus: string;
//     count: number;
// }

// const AdminDashboard: React.FC = () => {
//     const [orderStatusCounts, setOrderStatusCounts] = useState<Record<string, number>>({
//         pending: 0,
//         inProgress: 0,
//         completed: 0,
//         awaitingClarification: 0,
//     });
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         fetchOrderStatusCounts();
//     }, []);

//     const fetchOrderStatusCounts = async () => {
//         setLoading(true);
//         try {
//             const response: any = await ApiService.get('/assignments/status-counts');
//             if (response.success && Array.isArray(response.data)) {
//                 const defaultCounts = {
//                     pending: 0,
//                     inProgress: 0,
//                     completed: 0,
//                     awaitingClarification: 0,
//                 };
//                 response.data.forEach((item: OrderStatusCount) => {
//                     defaultCounts[item.orderStatus as keyof typeof defaultCounts] = item.count;
//                 });


//                 setOrderStatusCounts(defaultCounts);
//             } else {
//                 message.error(response.message || 'Failed to fetch order status counts.');
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//             message.error('An error occurred while fetching order status counts.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const getCardColor = (status: string) => {
//         switch (status) {
//             case 'pending':
//                 return '#FF8C00';
//             case 'completed':
//                 return '#28a745';
//             case 'inProgress':
//                 return '#007bff';
//             case 'awaitingClarification':
//                 return '#ffc107';
//             default:
//                 return '#dcdcdc';
//         }
//     };

//     const getCardIcon = (status: string) => {
//         switch (status) {
//             case 'pending':
//                 return <HourglassOutlined style={{ fontSize: '32px', color: '#fff' }} />;
//             case 'completed':
//                 return <CheckCircleOutlined style={{ fontSize: '32px', color: '#fff' }} />;
//             case 'inProgress':
//                 return <PlayCircleOutlined style={{ fontSize: '32px', color: '#fff' }} />;
//             case 'awaitingClarification':
//                 return <InfoCircleOutlined style={{ fontSize: '32px', color: '#fff' }} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div style={{ padding: '24px' }}>
//             <h2>Admin Dashboard</h2>


//             <div style={{ marginBottom: '24px' }}>
//                 <ProfileUser />
//             </div>

//             <div style={{ marginBottom: '24px' }}>
//                 <BirthdayNotifications />
//             </div>

//             {loading ? (
//                 <Spin size="large" />
//             ) : (
//                 <Row gutter={[16, 16]}>
//                     {Object.entries(orderStatusCounts).map(([status, count]) => (
//                         <Col xs={24} sm={12} md={6} key={status}>
//                             <Card
//                                 title={status.toUpperCase()}
//                                 bordered={false}
//                                 style={{
//                                     backgroundColor: getCardColor(status),
//                                     color: '#fff',
//                                     textAlign: 'center',
//                                     borderRadius: 10,
//                                     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//                                 }}
//                                 headStyle={{ color: '#fff' }}
//                             >
//                                 <div style={{ marginBottom: '12px' }}>
//                                     {getCardIcon(status)}
//                                 </div>
//                                 <p style={{ fontSize: '24px', fontWeight: 600, color: '#fff' }}>
//                                     {count}
//                                 </p>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;
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
import BirthdayNotifications from './BirthdayNotifications';
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

const AdminDashboard: React.FC = () => {
    const [orderStatusCounts, setOrderStatusCounts] = useState<Record<string, number>>({
        pending: 0,
        inProgress: 0,
        completed: 0,
        awaitingClarification: 0,
    });
    const [loading, setLoading] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    useEffect(() => {
        fetchOrderStatusCounts();
    }, []);

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
        <div style={{ padding: 32, fontFamily: "'Poppins', sans-serif", backgroundColor: '#088ba1', minHeight: '100vh', }}>
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
                <Title level={3} style={{ margin: 0, color: '#fff' }}>🎓 Admin Dashboard</Title>
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
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <ProfileUser />
                </div>
            )}

            {/* Status Cards */}
            <Row gutter={[24, 24]} justify="start">
                {loading ? (
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Spin size="large" />
                    </Col>
                ) : (
                    Object.entries(orderStatusCounts).map(([status, count]) => (
                        <Col xs={24} sm={12} md={6} key={status}>
                            <Card
                                bordered={false}
                                hoverable
                                style={{
                                    backgroundColor: statusMeta[status as keyof typeof statusMeta].color,
                                    color: '#fff',
                                    textAlign: 'center',
                                    borderRadius: 16,
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                                    transition: 'transform 0.3s',
                                }}
                            >
                                <div style={{ fontSize: '36px', marginBottom: 8 }}>
                                    {statusMeta[status as keyof typeof statusMeta].icon}
                                </div>
                                <div style={{ fontSize: '18px', fontWeight: 600 }}>
                                    {status.replace(/([A-Z])/g, ' $1').toUpperCase()}
                                </div>
                                <div style={{ fontSize: '28px', fontWeight: 700 }}>
                                    {count}
                                </div>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>

            {/* Birthday Section */}
            <div style={{ marginTop: 40 }}>
                <BirthdayNotifications />
            </div>
        </div>
    );
};

export default AdminDashboard;

