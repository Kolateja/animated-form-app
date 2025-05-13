// import React from 'react';
// import { Row, Col, Card, Typography } from 'antd';
// import './WhyChooseUs.css'; // Assuming you have your CSS styles here
// import AnimatedPage from '../components/AnimatedPage';
// import { motion } from 'framer-motion';
// const { Title, Paragraph } = Typography;

// const WhyChooseUs: React.FC = () => {
//     const items = [
//         {
//             title: 'Rating',
//             image: '/assets/img/why-to-choose-us-images/rating.png',
//             bgColor: 'linear-gradient(135deg, #4169e1, #00ffff)',
//         },
//         {
//             title: '2000+ Orders Delivered',
//             image: '/assets/img/why-to-choose-us-images/order-delivered.png',
//             bgColor: 'linear-gradient(135deg, #ff4500, #ff69b4)',
//         },
//         {
//             title: 'PhD Writers',
//             image: '/assets/img/why-to-choose-us-images/phd-writers.png',
//             bgColor: 'linear-gradient(135deg, #800080, #008080)',
//         },
//         {
//             title: 'Offers',
//             image: '/assets/img/why-to-choose-us-images/offers.png',
//             bgColor: 'darkcyan',
//         },
//         {
//             title: '100% Privacy & Payment Secured',
//             image: '/assets/img/why-to-choose-us-images/privacy_security.png',
//             bgColor: 'linear-gradient(135deg, #191970, #4b0082)',
//         },
//         {
//             title: 'Unlimited Rewrites',
//             image: '/assets/img/why-to-choose-us-images/unlimited-revision.png',
//             bgColor: 'linear-gradient(135deg, #ff7f50, #ffdab9)',
//         },
//         {
//             title: 'Refund Guaranteed',
//             image: '/assets/img/why-to-choose-us-images/Refund-Guaranteed.png',
//             bgColor: 'linear-gradient(135deg, #ff00ff, #e6e6fa)',
//         },
//         {
//             title: 'Affordable Price',
//             image: '/assets/img/why-to-choose-us-images/affordable.png',
//             bgColor: 'linear-gradient(135deg, #40e0d0, #00ffff)',
//         },
//         {
//             title: 'Customer Support',
//             image: '/assets/img/why-to-choose-us-images/customer-support.png',
//             bgColor: 'linear-gradient(135deg, #50c878, #bfff00)',
//         },
//         {
//             title: 'Experienced Team',
//             image: '/assets/img/why-to-choose-us-images/expertise.png',
//             bgColor: 'linear-gradient(135deg, #dc143c, #800000)',
//         },
//         {
//             title: 'On time delivery & Quality',
//             image: '/assets/img/why-to-choose-us-images/ontime-delivery.png',
//             bgColor: 'linear-gradient(135deg, #228b22, #808000)',
//         },
//         {
//             title: 'Over 2000+ Satisfied Students',
//             image: '/assets/img/why-to-choose-us-images/satisfied-students.png',
//             bgColor: 'linear-gradient(135deg, #0f52ba, #87ceeb)',
//         },
//     ];

//     return (
//         <AnimatedPage>
//             <div className="about-container-why-choose-us" style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 textAlign: 'center',

//                 width: '100vw',   // ✅ Add this
//                 // margin: '0 auto',
//             }}>
//                 <motion.div
//                     className="about-header-why-choose-us"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <header className="section-header-why-choose-us">
//                         <h3 style={{ marginBottom: '1rem', color: '#0f52ba', fontWeight: 40 }}>Why to choose us?</h3>
//                         <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
//                             Struggling with assignments? We offer top-notch, reliable academic help to alleviate stress and boost your grades. Trust our expert tutors to guide you towards success.
//                         </p>
//                     </header>
//                 </motion.div>
//                 <Row gutter={[16, 16]} justify="center">
//                     {items.map((feature, idx) => (
//                         <Col lg={6} md={8} sm={12} xs={24} key={idx}>
//                             <motion.div
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                             >
//                                 <Card
//                                     bordered={false}
//                                     className="about-card-feature-why-choose-us"
//                                     hoverable
//                                     style={{
//                                         background: feature.bgColor, // ✅ Apply the gradient or color here
//                                         color: '#fff', // Optional: makes text white for contrast
//                                         borderRadius: '12px',
//                                         // minHeight: '200px',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         padding: '1rem',
//                                         border: '1px solid',
//                                         textAlign: 'center',
//                                     }}
//                                 >
//                                     <img
//                                         src={feature.image}
//                                         alt={feature.title}
//                                         width="100%"
//                                         style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '15px', }}
//                                     />
//                                     <Paragraph
//                                         className="card-title-why-choose-us"
//                                         style={{ color: '#fff', marginTop: '1rem', fontWeight: 600 }}
//                                     >
//                                         {feature.title}
//                                     </Paragraph>
//                                 </Card>

//                             </motion.div>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>

//         </AnimatedPage>

//     );
// };

// export default WhyChooseUs;


import React from 'react';
import { Typography } from 'antd';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const { Paragraph } = Typography;

const WhyChooseUs: React.FC = () => {
    const items = [
        {
            title: 'Rating',
            image: '/assets/img/why-to-choose-us-images/rating.png',
            bgColor: 'linear-gradient(135deg, #4169e1, #00ffff)',
        },
        {
            title: '2000+ Orders Delivered',
            image: '/assets/img/why-to-choose-us-images/order-delivered.png',
            bgColor: 'linear-gradient(135deg, #ff4500, #ff69b4)',
        },
        {
            title: 'PhD Writers',
            image: '/assets/img/why-to-choose-us-images/phd-writers.png',
            bgColor: 'linear-gradient(135deg, #800080, #008080)',
        },
        {
            title: 'Offers',
            image: '/assets/img/why-to-choose-us-images/offers.png',
            bgColor: 'darkcyan',
        },
        {
            title: '100% Privacy & Payment Secured',
            image: '/assets/img/why-to-choose-us-images/privacy_security.png',
            bgColor: 'linear-gradient(135deg, #191970, #4b0082)',
        },
        {
            title: 'Unlimited Rewrites',
            image: '/assets/img/why-to-choose-us-images/unlimited-revision.png',
            bgColor: 'linear-gradient(135deg, #ff7f50, #ffdab9)',
        },
        {
            title: 'Refund Guaranteed',
            image: '/assets/img/why-to-choose-us-images/Refund-Guaranteed.png',
            bgColor: 'linear-gradient(135deg, #ff00ff, #e6e6fa)',
        },
        {
            title: 'Affordable Price',
            image: '/assets/img/why-to-choose-us-images/affordable.png',
            bgColor: 'linear-gradient(135deg, #40e0d0, #00ffff)',
        },
        {
            title: 'Customer Support',
            image: '/assets/img/why-to-choose-us-images/customer-support.png',
            bgColor: 'linear-gradient(135deg, #50c878, #bfff00)',
        },
        {
            title: 'Experienced Team',
            image: '/assets/img/why-to-choose-us-images/expertise.png',
            bgColor: 'linear-gradient(135deg, #dc143c, #800000)',
        },
        {
            title: 'On time delivery & Quality',
            image: '/assets/img/why-to-choose-us-images/ontime-delivery.png',
            bgColor: 'linear-gradient(135deg, #228b22, #808000)',
        },
        {
            title: 'Over 2000+ Satisfied Students',
            image: '/assets/img/why-to-choose-us-images/satisfied-students.png',
            bgColor: 'linear-gradient(135deg, #0f52ba, #87ceeb)',
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        centerPadding: '60px',
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <AnimatedPage>
            <div
                style={{
                    width: '100%', height: '100%', display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3
                        style={{
                            marginBottom: '1rem',
                            fontWeight: 600,
                            fontSize: '2rem',
                            color: '#fff',
                            textAlign: 'center',
                        }}
                    >
                        Why Choose Us?
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
                        Struggling with assignments? We offer top-notch, reliable academic help to alleviate stress and boost your grades. Trust our expert tutors to guide you towards success.
                    </p>
                </motion.div>
                <div style={{ width: '100%', marginTop: '2rem' }}>
                    <Slider {...sliderSettings}>
                        {items.map((feature, idx) => (
                            <div key={idx} style={{ padding: '0 10px' }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            padding: '1rem',
                                            backgroundImage: feature.bgColor.includes('linear-gradient')
                                                ? feature.bgColor
                                                : undefined,
                                            backgroundColor: !feature.bgColor.includes('linear-gradient')
                                                ? feature.bgColor
                                                : undefined,
                                        }}
                                    >
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            style={{
                                                borderRadius: '50%',
                                                width: '100px',
                                                height: '100px',
                                                marginBottom: '15px',
                                            }}
                                        />
                                        <h4 style={{ fontSize: '16px', marginTop: '1rem', color: '#fff' }}>
                                            {feature.title}
                                        </h4>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default WhyChooseUs;
