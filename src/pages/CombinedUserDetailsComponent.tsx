// import React from 'react';
// import ViewComponent from './viewComponent';
// import AcademicDetailsComponent from './userAcademicDetails';
// import OrderDetailsComponent from './userOrderDetails';
// import { Row, Col, Typography, Card } from 'antd';
// import {
//     UserOutlined,
//     ReadOutlined,
//     ShoppingCartOutlined,
// } from '@ant-design/icons';
// import './CombinedUserDetailsComponent.css';

// const { Title } = Typography;

// const CombinedUserDetailsComponent: React.FC = () => {
//     return (
//         <div className="dashboard-container-user-view">
//             <Title level={2} className="dashboard-title-user-view">
//                 User Dashboard
//             </Title>

//             <Row align="stretch">
//                 <Col span={8} offset={1} style={{ height: '100%' }}>
//                     <Card
//                         className="dashboard-card card-blue"
//                         style={{ height: '100%' }}
//                         title={
//                             <span className="card-title-user-view">
//                                 <UserOutlined style={{ color: '#1677ff', marginRight: 8 }} />
//                                 User Details
//                             </span>
//                         }
//                     >
//                         <ViewComponent />
//                     </Card>
//                 </Col>

//                 <Col span={8} offset={1} style={{ height: '100%' }}>
//                     <Card
//                         className="dashboard-card card-green"
//                         style={{ height: '100%' }}
//                         title={
//                             <span className="card-title-user-view">
//                                 <ReadOutlined style={{ color: '#52c41a', marginRight: 8 }} />
//                                 Academic Details
//                             </span>
//                         }
//                     >
//                         <AcademicDetailsComponent />
//                     </Card>
//                 </Col>

//                 <Col span={24}>
//                     <Card
//                         className="dashboard-card"
//                         title={
//                             <span className="card-title-user-view">
//                                 <ShoppingCartOutlined style={{ color: '#fa8c16', marginRight: 8 }} />
//                                 Order Details
//                             </span>
//                         }
//                     >
//                         <OrderDetailsComponent />
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default CombinedUserDetailsComponent;


import React, { useState } from 'react';
import { Typography, Tabs, Card } from 'antd';
import {
    UserOutlined,
    ReadOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import ViewComponent from './viewComponent';
import AcademicDetailsComponent from './userAcademicDetails';
import OrderDetailsComponent from './userOrderDetails';

const { Title } = Typography;
const { TabPane } = Tabs;

const CombinedUserDetailsComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div style={{ padding: '24px' }}>
            <Title level={3} style={{ marginBottom: '16px' }}>
                Student Dashboard
            </Title>

            <Card>
                <Tabs activeKey={activeTab} onChange={setActiveTab} type="card">
                    <TabPane
                        tab={
                            <span>
                                <UserOutlined /> User Details
                            </span>
                        }
                        key="1"
                    >
                        <ViewComponent />
                    </TabPane>

                    <TabPane
                        tab={
                            <span>
                                <ReadOutlined /> Academic Details
                            </span>
                        }
                        key="2"
                    >
                        <AcademicDetailsComponent />
                    </TabPane>

                    <TabPane
                        tab={
                            <span>
                                <ShoppingCartOutlined /> Order Details
                            </span>
                        }
                        key="3"
                    >
                        <OrderDetailsComponent />
                    </TabPane>
                </Tabs>
            </Card>
        </div>
    );
};

export default CombinedUserDetailsComponent;
