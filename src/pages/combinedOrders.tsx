import React from 'react';
import ViewComponent from './viewComponent';
import OrderViewComponent from './orderViewDetails';
import { Row, Col, Typography, Card } from 'antd';
import {
    UserOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const cardBaseStyle = {
    height: '100%',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
};

const CombinedOrderDetailsComponent = () => {
    return (
        <div
            style={{
                margin: '40px auto',
                padding: '24px',
                background: '#f0f2f5',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                width: '100vw'
            }}
        >
            <Title
                level={2}
                style={{
                    textAlign: 'center',
                    color: '#1f1f1f',
                    marginBottom: '32px',
                }}
            >
                Orders Dashboard
            </Title>

            <Row align="stretch">
                <Col span={10} offset={1} style={{ height: '100%' }}>
                    <Card
                        hoverable
                        title={
                            <span style={{ fontWeight: 'bold', fontSize: 14 }}>
                                <UserOutlined style={{ color: '#1677ff', marginRight: 6 }} />
                                User Details
                            </span>
                        }
                        style={{
                            // width: 300,
                            borderRadius: 12,
                            background: '#e6f7ff',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        bodyStyle={{
                            padding: 16,
                            minHeight: 180,
                        }}
                    >
                        <ViewComponent />
                    </Card>
                </Col>

                <Col span={10} offset={2} style={{ height: '100%' }}>
                    <Card
                        hoverable
                        title={
                            <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                                <ShoppingCartOutlined style={{ color: '#fa8c16', marginRight: 8 }} />
                                Order Details
                            </span>
                        }
                        style={{
                            ...cardBaseStyle,
                            background: '#fff7e6',
                        }}
                        bodyStyle={{ padding: 20 }}
                    >
                        <OrderViewComponent />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CombinedOrderDetailsComponent;
