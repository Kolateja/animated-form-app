// import React, { useState } from "react";
// import { Card, Row, Col, Button } from "antd";
// import {
//   ReadOutlined,
//   TeamOutlined,
//   BulbOutlined,
//   HeartOutlined,
//   RiseOutlined,
// } from "@ant-design/icons";

// import Header from "./Header";
// import Footer from "./FooterSection";
// import CreateResume from "./CreateResume";

// const CareerPage: React.FC = () => {
//   const [showResumeForm, setShowResumeForm] = useState(false);

//   const handleButtonClick = () => {
//     setShowResumeForm(true); // Show the CreateResume component
//   };
//   return (
//     <div
//       style={{
//         background: "#1d7db2",
//         // borderRadius: 22,
//         boxShadow: "0 2px 12px rgba(18, 45, 133, 0.05)",
//         paddingTop: 16,
//         paddingBottom: 16,
//         width: "100%", // make it fill the wrapper
//         margin: "0px"
//       }}
//     >
//       {/* <div className="hero-section"> */}
//       <div
//         style={{
//           backgroundImage: 'url(/assets/img/carrerbag.jpg)', // Or use the uploaded version
//           backgroundSize: 'cover',
//           // backgroundPosition: 'right',
//           backgroundRepeat: 'no-repeat',
//           backgroundColor: '#002B5B', // Fallback color for blend
//           padding: '14rem',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexDirection: 'column',
//           textAlign: 'center',
//           color: '#ffffff',
//           height:'450px'
//         }}
//       >
//         <Row style={{ width: '100%' }} justify="start">
//           <Col span={12} offset={1}>
//             <h1 style={{ fontSize: '120px', fontWeight: 'bold', marginBottom: '20px', color: '#f5430e' }}>
//               JOIN US
//             </h1>
//             <h3 style={{ fontSize: '40px', lineHeight: '1.6', maxWidth: '600px', color: '#f5430e' }}>
//               Join our vibrant community of knowledge enthusiasts, where collaboration sparks innovation.
//             </h3>
//           </Col>
//         </Row>
//       </div>


//       {/* </div> */}

//       <div  >
//         <Row gutter={[16, 16]} justify="center" style={{ marginBottom: 24, marginTop: '30px' }}>

//           <h4>Why Should You Choose Assignment Linkers?</h4>

//           <div className="why-assignment-linkers-content mt-4" style={{ padding: "10px" }}>
//             <Row gutter={[16, 16]} style={{ padding: "10px" }}>
//               <Col span={8}>
//                 <Card>
//                   <div className="card-body">
//                     <ReadOutlined
//                       style={{
//                         fontSize: 24,
//                         color: "#1890ff",
//                         marginRight: 12,
//                       }}
//                     />
// <span>
//   Huge learning opportunity as you get to Learn and Train
//   directly under the supervision of experienced team leaders
//   who have seen discussions becoming products and services.
// </span>
//                   </div>
//                 </Card>
//               </Col>

//               <Col span={8}>
//                 <Card>
//                   <div className="card-body">
//                     <TeamOutlined
//                       style={{
//                         fontSize: 24,
//                         color: "#1890ff",
//                         marginRight: 12,
//                       }}
//                     />
// <span>
//   Become a part of the team that works passionately and
//   tirelessly to create solutions for different problems in
//   the E-learning sector.
// </span>
//                   </div>
//                 </Card>
//               </Col>

//               <Col span={8}>
//                 <Card>
//                   <div className="card-body">
//                     <BulbOutlined
//                       style={{
//                         fontSize: 24,
//                         color: "#1890ff",
//                         marginRight: 12,
//                       }}
//                     />
                    // <span>
                    //   Interact with the founding team members to share your
                    //   ideas and create an impact.
                    // </span>
//                   </div>
//                 </Card>
//               </Col>

//               <Col span={8}>
//                 <Card>
//                   <div className="card-body">
//                     <HeartOutlined
//                       style={{
//                         fontSize: 24,
//                         color: "#1890ff",
//                         marginRight: 12,
//                       }}
//                     />
//                     <span>
//                       We value our employees, and the efforts they put day &
//                       night tirelessly.
//                     </span>
//                   </div>
//                 </Card>
//               </Col>

//               <Col span={8}>
//                 <Card>
//                   <div className="card-body">
//                     <RiseOutlined
//                       style={{
//                         fontSize: 24,
//                         color: "#1890ff",
//                         marginRight: 12,
//                       }}
//                     />
//                     <span>
//                       We are committed to helping employees grow and succeed
//                       within our company culture.
//                     </span>
//                   </div>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         </Row>
//       </div>
//       {/* <div > */}
//       <div className="section-header">
//         <h2 style={{ color: "#ffffff" }}>
//           <strong>Send Your Resume Now</strong>
//         </h2>

//         <Button type="primary" onClick={handleButtonClick}>
//           Hire Me
//         </Button>

//         {showResumeForm && <CreateResume />}
//       </div>
//     </div>
//   );
// };

// export default CareerPage;
import React, { useState } from "react";
import { Card, Row, Col, Button } from "antd";
import {
  ReadOutlined,
  TeamOutlined,
  BulbOutlined,
  HeartOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import Header from "./Header";
import Footer from "./FooterSection";
import CreateResume from "./CreateResume";
// import '/assets/img/carrerbag.jpg'
import "../assets/css/CareerPage.css"; // External CSS

const CareerPage: React.FC = () => {
  const [showResumeForm, setShowResumeForm] = useState(false);

  const handleButtonClick = () => {
    setShowResumeForm(true);
  };

  return (
    <div className="career-container">
      <div className="career-hero">
        <Row className="hero-content" justify="start">
          <Col xs={24} md={14} lg={12} className="hero-text">
            <h1 className="hero-title">JOIN US</h1>
            <h3 className="hero-subtitle">
              Join our vibrant community of knowledge enthusiasts, where collaboration sparks innovation.
            </h3>
          </Col>
        </Row>
      </div>

      <div className="why-choose-section">
        <h4 className="why-title">Why Should You Choose Assignment Linkers?</h4>

        <Row gutter={[16, 16]} justify="center" className="why-cards-row">
          <Col xs={24} sm={12} md={8}>
            <Card>
              <div className="card-body">
                <ReadOutlined className="card-icon" />
                <span>
                  Huge learning opportunity as you get to Learn and Train
                  directly under the supervision of experienced team leaders
                  who have seen discussions becoming products and services.
                </span>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <div className="card-body">
                <TeamOutlined className="card-icon" />
                <span>
                  Become a part of the team that works passionately and
                  tirelessly to create solutions for different problems in
                  the E-learning sector.
                </span>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <div className="card-body">
                <BulbOutlined className="card-icon" />
                <span>
                      Interact with the founding team members to share your
                      ideas and create an impact.
                    </span>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <div className="card-body">
                <HeartOutlined className="card-icon" />
                <span>
                  We value our employees and the effort they contribute daily.
                </span>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <div className="card-body">
                <RiseOutlined className="card-icon" />
                <span>
                  We are committed to helping employees grow within our culture.
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="resume-section">
        <h2 className="resume-title">
          <strong>Send Your Resume Now</strong>
        </h2>
        <Button type="primary" onClick={handleButtonClick}>
          Hire Me
        </Button>

        {showResumeForm && <CreateResume />}
      </div>
    </div>
  );
};

export default CareerPage;
