// import React from 'react';
// import ViewComponent from './viewComponent';
// import OrderViewComponent from './orderViewDetails';
// import { Row, Col, Typography, Card } from 'antd';
// import {
//     UserOutlined,
//     ShoppingCartOutlined,
// } from '@ant-design/icons';

// const { Title } = Typography;

// const cardBaseStyle = {
//     height: '100%',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
// };

// const CombinedOrderDetailsComponent = () => {
//     return (
//         <div
//             style={{
//                 margin: '40px auto',
//                 padding: '24px',
//                 background: '#f0f2f5',
//                 borderRadius: '16px',
//                 boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
//                 // width: '100vw'
//             }}
//         >
//             <Title
//                 level={2}
//                 style={{
//                     textAlign: 'center',
//                     color: '#1f1f1f',
//                     marginBottom: '32px',
//                 }}
//             >
//                 Orders Dashboard
//             </Title>

//             <Row align="stretch">
//                 <Col span={10} offset={1} style={{ height: '100%' }}>
//                     <Card
//                         hoverable
//                         title={
//                             <span style={{ fontWeight: 'bold', fontSize: 14 }}>
//                                 <UserOutlined style={{ color: '#1677ff', marginRight: 6 }} />
//                                 User Details
//                             </span>
//                         }
//                         style={{
//                             // width: 300,
//                             borderRadius: 12,
//                             background: '#e6f7ff',
//                             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
//                             transition: 'all 0.3s ease',
//                             cursor: 'pointer',
//                         }}
//                         bodyStyle={{
//                             padding: 16,
//                             minHeight: 180,
//                         }}
//                     >
//                         <ViewComponent />
//                     </Card>
//                 </Col>

//                 <Col span={10} offset={2} style={{ height: '100%' }}>
//                     <Card
//                         hoverable
//                         title={
//                             <span style={{ fontWeight: 'bold', fontSize: 16 }}>
//                                 <ShoppingCartOutlined style={{ color: '#fa8c16', marginRight: 8 }} />
//                                 Order Details
//                             </span>
//                         }
//                         style={{
//                             ...cardBaseStyle,
//                             background: '#fff7e6',
//                         }}
//                         bodyStyle={{ padding: 20 }}
//                     >
//                         <OrderViewComponent />
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default CombinedOrderDetailsComponent;
import React, { useState } from 'react';
import { Typography, Tabs, Card } from 'antd';
import {
    UserOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import ViewComponent from './viewComponent';
import OrderViewComponent from './orderViewDetails';

const { Title } = Typography;
const { TabPane } = Tabs;

const CombinedOrderDetailsComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div style={{ padding: '24px' }}>
            <Title level={3} style={{ textAlign: 'center', marginBottom: '24px' }}>
                Orders Dashboard
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
                                <ShoppingCartOutlined /> Order Details
                            </span>
                        }
                        key="2"
                    >
                        <OrderViewComponent />
                    </TabPane>
                </Tabs>
            </Card>
        </div>
    );
};

export default CombinedOrderDetailsComponent;
