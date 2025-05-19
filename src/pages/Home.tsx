
// import React, { useEffect } from 'react';
// import WhyChooseUs from './WhyChooseUs';
// import ClientQuote from './ClientQuote';
// import Consultancy from './Consultanices';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import { Button, Divider, Typography } from 'antd';
// import bag from '../assets/img/bgg.png';
// import reg from '../assets/img/remining.png'
// import FreeQuote from './getFreeQuote';
// import FeedbackCard from './writersReviews';
// import HowItWorks from './HowItWorks';
// import FeaturesComponent from './FeaturesComponent';
// import AssignmentTypes from './AssignmentTypes';
// import Tools from './Tools';
// import bg from '../assets/img/remining.png'
// import junction from '../assets/img/assignmentjunction.png'
// import ChatWidget from './ChatWidget';
// const { Text, Paragraph, Title } = Typography;

// const contentSectionStyle: React.CSSProperties = {
//   backgroundColor: "#b1d0e2", // light, professional background
//   padding: "80px 20px",
// };

// const Home: React.FC = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div style={{ fontFamily: "Roboto, sans-serif" }}>
//       {/* Hero Section */}
//       <div
// style={{
//   backgroundImage: `url(${junction})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   padding: '220px 20px 180px',
//   color: '#fff',
//   textAlign: 'center',
// }}
//       >
//         <p
//           style={{
//             fontSize: "30px",
//             maxWidth: "700px",
//             margin: "0 auto 30px",
//             color: "#252221",
//             marginTop: '30px',
//             marginBottom: '40px',
//             fontWeight: 'bold',
//             marginRight: '290px'
//           }}
//         >
//           Comprehensive Assignment Assistance With a No-AI Guarantee!
//         </p>
//         <Link to="/auth/login-signup">
//           <Button
//             type="primary"
//             style={{
//               padding: "12px 28px",
//               backgroundColor: "#1890ff",
//               border: "none",
//               borderRadius: "6px",
//               color: "white",
//               fontSize: "16px",
//               cursor: "pointer",
//               transition: "background 0.3s",
//             }}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.backgroundColor = "#40a9ff")
//             }
//             onMouseOut={(e) =>
//               (e.currentTarget.style.backgroundColor = "#1890ff")
//             }
//           >
//             Order now
//           </Button>
//         </Link>
//       </div>
//       <Consultancy />
//       <div style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '20px 20px 40px',
//         color: '#fff',
//         textAlign: 'center',
//       }} >
//         <FeedbackCard />
//       </div>
//       <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
//         <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>How It Works
//         </Title>
//         <HowItWorks />
//       </section>
//       <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
//         <FeaturesComponent />
//       </section> <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
//         <AssignmentTypes />
//       </section> <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
//         <Tools />
//       </section>
//       <ChatWidget />
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

import WhyChooseUs from './WhyChooseUs';
import ClientQuote from './ClientQuote';
import Consultancy from './Consultanices';
import FreeQuote from './getFreeQuote';
import FeedbackCard from './writersReviews';
import HowItWorks from './HowItWorks';
import FeaturesComponent from './FeaturesComponent';
import AssignmentTypes from './AssignmentTypes';
import Tools from './Tools';
import ChatWidget from './ChatWidget';

import junction from '../assets/img/assignmentjunction.png';
import bg from '../assets/img/remining.png';

const { Title } = Typography;

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${junction})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '220px 20px 180px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <p className="hero-text">
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
        <Link to="/auth/login-signup">
          <Button type="primary" className="hero-button">
            Order now
          </Button>
        </Link>
      </div>

      <Consultancy />

      <div
        className="feedback-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <FeedbackCard />
      </div>

      <section className="content-section">
        <Title level={2} className="content-title">How It Works</Title>
        <HowItWorks />
      </section>

      <section className="content-section">
        <FeaturesComponent />
      </section>

      <section className="content-section">
        <AssignmentTypes />
      </section>

      <section className="content-section">
        <Tools />
      </section>

      <ChatWidget />
    </div>
  );
};

export default Home;

