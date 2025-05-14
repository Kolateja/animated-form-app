// // // src/pages/About.tsx
// // import React from 'react';
// // import { Row, Col, Card, Typography } from 'antd';
// // import { motion } from 'framer-motion';
// // import AnimatedPage from '../components/AnimatedPage';
// // import './About.css';
// // // Remove this (it's causing the error)
// // // import '../assets/css/aboutus.css'; // Adjust the path based on file location



// // const { Title, Paragraph } = Typography;
// // const features = [
// //   { title: 'Best experienced organisation', img: '/assets/img/aboutus/experiance-organization.png', },
// //   { title: 'Team of expert writers', img: '/assets/img/aboutus/team-professional-writers.png' },
// //   { title: 'Award winners', img: '/assets/img/aboutus/award-winners.png' },
// //   { title: 'Service oriented', img: '/assets/img/aboutus/service-oriented.png' },
// //   { title: 'Values oriented', img: '/assets/img/aboutus/values-oriented-removebg-preview.png' },
// //   { title: 'Passionate', img: '/assets/img/aboutus/passionate.png' },
// //   { title: 'Not money minded', img: '/assets/img/aboutus/affordable.png' },
// //   { title: 'Trustworthy', img: '/assets/img/aboutus/trustworthy.png' },
// // ];

// // const About: React.FC = () => {
// //   return (
// //     <AnimatedPage>
// //       <div className="about-container" style={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',      // Horizontal center
// //         justifyContent: 'center', // Optional: vertical center if used full height
// //         textAlign: 'center',
// //         padding: '4rem 2rem',
// //         // maxWidth: 800,
// //         margin: '0 auto',
// //       }}>
// //         {/* <Header /> */}
// //         {/* <section className="about-section"> */}
// //         <motion.div
// //           className="about-header"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <Title level={3} style={{ marginBottom: '1rem', color: '#333' }}>Who we are?</Title>
// //           <Paragraph style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
// //             Struggling with assignments? We offer top-notch, reliable academic help to alleviate stress
// //             and boost your grades. Trust our expert writers to guide you towards success.
// //           </Paragraph>
// //         </motion.div>

// //         <Row gutter={[24, 24]} justify="center">
// //           {features.map((feature, idx) => (
// //             <Col xs={12} sm={8} md={6} key={idx}>
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// //               >
// //                 <Card bordered={false} className="about-card-feature" hoverable>
// //                   <img src={feature.img} alt={feature.title} width="100%" style={{ maxWidth: 120 }} />
// //                   <Paragraph className="feature-title">{feature.title}</Paragraph>
// //                 </Card>
// //               </motion.div>
// //             </Col>
// //           ))}
// //         </Row>
// //         {/* </section> */}

// //         <section className="about-section">
// //           <motion.div
// //             className="about-header"
// //             initial={{ opacity: 0, y: -20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <Title level={3}>Our Presence</Title>
// //           </motion.div>
// //           <motion.div
// //             className="about-global-img"
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <img src="/assets/img/aboutus/globalpresence.png" alt="Global Presence" style={{ width: '100%', maxWidth: 800 }} />
// //           </motion.div>
// //         </section>
// //         {/* <Footer /> */}
// //       </div>
// //     </AnimatedPage >
// //   );
// // };

// // export default About;
// import React from 'react';
// import { Row, Col, Card, Typography } from 'antd';
// import { motion } from 'framer-motion';
// import AnimatedPage from '../components/AnimatedPage';
// import './About.css';
// import CoreValues from './CoreValues';
// import HowItWorks from './HowItWorks';
// import Achievements from './Achievements';
// import Advantages from './Advantages';
// import FaqPage from './FaqPage';

// const { Title, Paragraph } = Typography;

// const features = [
//   { title: 'Best experienced organisation', img: '/assets/img/aboutus/experiance-organization.png' },
//   { title: 'Team of expert writers', img: '/assets/img/aboutus/team-professional-writers.png' },
//   { title: 'Award winners', img: '/assets/img/aboutus/award-winners.png' },
//   { title: 'Service oriented', img: '/assets/img/aboutus/service-oriented.png' },
//   { title: 'Values oriented', img: '/assets/img/aboutus/values-oriented-removebg-preview.png' },
//   { title: 'Passionate', img: '/assets/img/aboutus/passionate.png' },
//   { title: 'Not money minded', img: '/assets/img/aboutus/affordable.png' },
//   { title: 'Trustworthy', img: '/assets/img/aboutus/trustworthy.png' },
// ];

// const About: React.FC = () => {
//   return (
//     <AnimatedPage>
//       <div
//       >

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Title level={2} style={{ color: '#fff', textAlign: 'center' }}>Assignment Writing Service</Title>
//           <Paragraph style={{ color: '#eee', fontSize: '1.1rem', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
//             Assignmnet Junction is  an assignment writing company where you can hire experts to write and proofread all academic papers, including essays, research papers, and more.
//           </Paragraph>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
// <Title level={2} style={{ color: '#fff', textAlign: 'center' }}>Who We Are</Title>
// <Paragraph style={{ color: '#eee', fontSize: '1.1rem', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
//   Struggling with assignments? We offer top-notch, reliable academic help to alleviate stress
//   and boost your grades. Trust our expert writers to guide you towards success.
// </Paragraph>
//         </motion.div>

//         <Row gutter={[24, 24]} justify="center" style={{ marginTop: '3rem' }}>
//           {features.map((feature, idx) => (
//             <Col xs={12} sm={8} md={6} key={idx}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//               >
//                 <Card bordered={false} hoverable style={{ textAlign: 'center', borderRadius: 12 }}>
//                   <img src={feature.img} alt={feature.title} style={{ width: 100, marginBottom: 12 }} />
//                   <Paragraph style={{ fontWeight: 'bold' }}>{feature.title}</Paragraph>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </div>


//       <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
//         <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Achievements</Title>
//         <Achievements />
//       </section>
//       <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
//         <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Leading Advantages</Title>
//         <Advantages />
//       </section>

//       {/* Core Values Section */}
//       {/* <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}> */}
//       {/* <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Core Values</Title> */}
//       <CoreValues />
//       {/* </section> */}

//       {/* How It Works Section */}
//       {/* <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}> */}
//       {/* <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>How It Works</Title> */}
//       <HowItWorks />
//       {/* </section> */}

//   <FaqPage />

//   <section style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
//     <motion.div
//       className="about-header"
//       initial={{ opacity: 0, y: -20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Presence</Title>
//     </motion.div>
//     <motion.div
//       className="about-global-img"
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.6 }}
//       style={{ textAlign: 'center' }}
//     >
//       <img
//         src="/assets/img/aboutus/globalpresence.png"
//         alt="Global Presence"
//         style={{ width: '100%', maxWidth: 800 }}
//       />
//     </motion.div>
//   </section>
// </AnimatedPage>
//   );
// };

// export default About;
import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import CoreValues from './CoreValues';
import HowItWorks from './HowItWorks';
import Achievements from './Achievements';
import Advantages from './Advantages';
import Slider from 'react-slick';
import images from '../assets/img/image.png'
import FaqPage from './FaqPage';
import bg from '../assets/img/aboutBanner.png'

const { Title, Paragraph } = Typography;

const features = [
  { title: 'Best experienced organisation', img: '/assets/img/aboutus/experiance-organization.png' },
  { title: 'Team of expert writers', img: '/assets/img/aboutus/team-professional-writers.png' },
  { title: 'Award winners', img: '/assets/img/aboutus/award-winners.png' },
  { title: 'Service oriented', img: '/assets/img/aboutus/service-oriented.png' },
  { title: 'Values oriented', img: '/assets/img/aboutus/values-oriented-removebg-preview.png' },
  { title: 'Passionate', img: '/assets/img/aboutus/passionate.png' },
  { title: 'Not money minded', img: '/assets/img/aboutus/affordable.png' },
  { title: 'Trustworthy', img: '/assets/img/aboutus/trustworthy.png' },
];

const About: React.FC = () => {
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
      {/* Hero Section with Background Image */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '220px 20px 180px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, minWidth: '300px', paddingRight: '2rem' }}
        >
          <Title level={1} style={{ color: '#ee6517', fontWeight: 'bold' }}>
            Assignment Writing Service
          </Title>
          <Paragraph style={{ color: '#ee6517', fontSize: '1.1rem', maxWidth: 600 }}>
            Assignment Junction is an assignment writing company where you can hire experts to write and proofread all academic papers, including essays, research papers, and more.
          </Paragraph>
        </motion.div>
      </div>
      {/* Feature Cards */}






      {/* Other Sections */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Achievements</Title>
        <Achievements />
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Leading Advantages</Title>
        <Advantages />
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
        <CoreValues />
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>How It Works
        </Title>
        <HowItWorks />
      </section>

      <FaqPage />

      <section style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={3} style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Presence</Title>
        </motion.div>
        <motion.div
          className="about-global-img"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <img
            src="/assets/img/aboutus/globalpresence.png"
            alt="Global Presence"
            style={{ width: '100%', maxWidth: 800 }}
          />
        </motion.div>
      </section>
    </AnimatedPage>
  );
};

export default About;
