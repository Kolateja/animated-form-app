import { Card, Col, Row, Spin, message } from 'antd';
import { HourglassOutlined, CheckCircleOutlined, PlayCircleOutlined } from '@ant-design/icons'; // Importing Ant Design icons
import ApiService from '../services/ApiService';
import { useEffect, useState } from 'react';
import ProfileUser from './Profile';
import OrderDetailsComponent from './userOrderDetails';
import AcademicDetailsComponent from './userAcademicDetails';

interface OrderStatusCount {
    orderStatus: string;
    count: number;
}

const UserDashboard: React.FC = () => {
    const [orderStatusCounts, setOrderStatusCounts] = useState<OrderStatusCount[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchOrderStatusCounts();
    }, []);

    const fetchOrderStatusCounts = async () => {
        setLoading(true);
        try {
            const response: any = await ApiService.get('/assignments/status-counts');
            console.log('statusCounts response:', response);

            if (response.success) {
                setOrderStatusCounts(response.data);
                console.log(response.data, "?????????????");
            } else {
                message.error(response.message || 'Failed to fetch order status counts.');
            }
        } catch (error: unknown) {
            console.error('Fetch error:', error);
            message.error('An error occurred while fetching order status counts.');
        } finally {
            setLoading(false);
        }
    };
    const getCardColor = (status: string) => {
        switch (status) {
            case 'pending':
                return '#FF8C00'; // Subtle orange for pending
            case 'completed':
                return '#28a745'; // Vibrant green for completed
            case 'inProgress':
                return '#007bff'; // Calmer blue for inProgress
            default:
                return '#dcdcdc'; // Default grey
        }
    };


    const getCardIcon = (status: string) => {
        switch (status) {
            case 'pending':
                return <HourglassOutlined style={{ fontSize: '32px' }} />;
            case 'completed':
                return <CheckCircleOutlined style={{ fontSize: '32px' }} />;
            case 'inProgress':
                return <PlayCircleOutlined style={{ fontSize: '32px' }} />;
            default:
                return null;
        }
    };

    return (
        <div style={{ padding: '24px' }}>
            <div style={{ marginBottom: '24px' }}>
                <ProfileUser />
            </div>
            <h2>User Dashboard</h2>
            {loading ? (
                <Spin size="large" />
            ) : (
                <Row gutter={[16, 16]}>
                    {/* Show each order status count in a card */}
                    {orderStatusCounts.map((item) => (
                        <Col xs={24} sm={12} md={8} key={item.orderStatus}>
                            <Card
                                title={item.orderStatus.toUpperCase()}
                                bordered={false}
                                style={{
                                    backgroundColor: getCardColor(item.orderStatus),
                                    color: '#fff',
                                    textAlign: 'center',
                                }}
                                cover={getCardIcon(item.orderStatus)} // Adding an icon on top of the card
                            >
                                <p style={{ fontSize: '24px' }}>{item.count}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>


            )}
            <div style={{ marginBottom: '24px' }}>
                <OrderDetailsComponent />
            </div>

        </div>
    );
};

export default UserDashboard;
