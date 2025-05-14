// import React from 'react';
// import WhyChooseUs from './WhyChooseUs';
// import ClientQuote from './ClientQuote';
// import Consultancy from './Consultanices';
// const Home: React.FC = () => {
//   return (
//     <div>

//       <div
//         style={{
//           // background: url('/src/assets/img/contact/wonder.jpg') bottom no-repeat;

//           backgroundImage: 'url("https://images.unsplash.com/photo-1588072432836-e10032774350/")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           padding: '100px 20px',
//           color: '#fff',
//           textAlign: 'center',
//         }}
//       >
//         <h1>Achieve Academic Excellence</h1>
//         <p>Top-quality assignment help from experts — trusted by 2000+ students</p>
//         <button style={{ padding: '10px 20px', backgroundColor: '#1890ff', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>
//           Order Now
//         </button>
//       </div>

//       <section style={{ backgroundColor: '#f0f2f5', padding: '60px 20px' }}>
//         <WhyChooseUs />
//       </section>

//       <section style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
//         <Consultancy />
//       </section>

//       <section style={{ backgroundColor: '#f9f9f9', padding: '60px 20px' }}>
//         <ClientQuote />
//       </section>

//     </div>

//   );
// };

// export default Home;
import React, { useEffect } from 'react';
import WhyChooseUs from './WhyChooseUs';
import ClientQuote from './ClientQuote';
import Consultancy from './Consultanices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Button, Divider, Typography } from 'antd';
import bag from '../assets/img/bgg.png';
import reg from '../assets/img/remining.png'
import FreeQuote from './getFreeQuote';
import FeedbackCard from './writersReviews';
import HowItWorks from './HowItWorks';
import FeaturesComponent from './FeaturesComponent';
import AssignmentTypes from './AssignmentTypes';
import Tools from './Tools';
import bg from '../assets/img/remining.png'
const { Text, Paragraph, Title } = Typography;

const contentSectionStyle: React.CSSProperties = {
  backgroundColor: '#b1d0e2', // light, professional background
  padding: '80px 20px',
};

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', width: '100vw' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '220px 20px 180px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto 30px', color: '#252221' }}>
          Achieve Academic Excellence
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto 30px', color: '#252221' }}>
          Top-quality assignment help from experts — trusted by 2000+ students worldwide.
          Comprehensive Assignment Assistance With a No-AI Guarantee!
        </p>
        <Link to="/auth/login-signup">
          <Button
            type="primary"
            style={{
              padding: '20px 30px',
              backgroundColor: '#1890ff',
              border: 'none',
              borderRadius: '6px',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#40a9ff')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1890ff')}
          >
            Order now
          </Button>
        </Link>
      </div>
      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 20px 40px',
        color: '#fff',
        textAlign: 'center',
      }} >
        <FeedbackCard />
      </div>
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>How It Works
        </Title>
        <HowItWorks />
      </section>
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
        <FeaturesComponent />
      </section> <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
        <AssignmentTypes />
      </section> <section style={{ padding: '4rem 2rem', backgroundColor: '#f0f2f5' }}>
        <Tools />
      </section>
      {/* Why Choose Us Section */}
      {/* <section style={contentSectionStyle} data-aos="fade-up">
        <WhyChooseUs />
      </section> */}
      {/* <section style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
        <Consultancy />
      </section> */}



      <section style={contentSectionStyle} data-aos="fade-up">
        <Consultancy />
      </section>

      {/* Testimonials Section */}
      {/* <section style={contentSectionStyle} data-aos="fade-up">
        <ClientQuote />
      </section> */}
    </div>
  );
};

export default Home;


