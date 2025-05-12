import React from 'react';
import ViewComponent from './viewComponent';
import AcademicDetailsComponent from './userAcademicDetails';
import OrderDetailsComponent from './userOrderDetails';
import { Row, Col, Typography, Card } from 'antd';
import {
    UserOutlined,
    ReadOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import './CombinedUserDetailsComponent.css';

const { Title } = Typography;

const CombinedUserDetailsComponent: React.FC = () => {
    return (
        <div className="dashboard-container-user-view">
            <Title level={2} className="dashboard-title-user-view">
                User Dashboard
            </Title>

            <Row align="stretch">
                <Col span={8} offset={1} style={{ height: '100%' }}>
                    <Card
                        className="dashboard-card card-blue"
                        style={{ height: '100%' }}
                        title={
                            <span className="card-title-user-view">
                                <UserOutlined style={{ color: '#1677ff', marginRight: 8 }} />
                                User Details
                            </span>
                        }
                    >
                        <ViewComponent />
                    </Card>
                </Col>

                <Col span={8} offset={1} style={{ height: '100%' }}>
                    <Card
                        className="dashboard-card card-green"
                        style={{ height: '100%' }}
                        title={
                            <span className="card-title-user-view">
                                <ReadOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                                Academic Details
                            </span>
                        }
                    >
                        <AcademicDetailsComponent />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card
                        className="dashboard-card"
                        title={
                            <span className="card-title-user-view">
                                <ShoppingCartOutlined style={{ color: '#fa8c16', marginRight: 8 }} />
                                Order Details
                            </span>
                        }
                    >
                        <OrderDetailsComponent />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CombinedUserDetailsComponent;


