import React from "react";
import { Row, Col, Card, Image, Typography } from "antd";
import "./MembershipSection.css"; // Custom styles
import Header from "./Header";
import Footer from "./FooterSection";
import diamond from '../assets/img/diamond.png'
const { Title, Text } = Typography;

const MembershipSection: React.FC = () => {
  return (
    <section id="membership-section">
      <div
        className="container"
        style={{
          // background: '#1d7db2',
          borderRadius: 22,
          boxShadow: "0 2px 12px rgba(227, 230, 235, 0.05)",
          // padding: 16,
          width: "100%", // make it fill the wrapper
          paddingTop: "20px"
        }}
      >
        {/* <Header /> */}
        <div
          className="hero-section common-background"
          style={{
            padding: "60px 20px",
            overflow: "hidden",
            position: "relative",
            // width: "100vw",
            margin: "10px"
          }}
        >
          <Row align="middle" gutter={[32, 32]}>
            <Col xs={24} sm={12} md={12} lg={5}>
              <div
                className="hero-section-image"
                style={{ position: "relative", textAlign: "center" }}
              >
                <Image
                  src="/assets/img/membership/image-removebg-preview.png"
                  alt="Hero Image"
                  preview={false}
                  style={{
                    animation: "float 3s ease-in-out infinite",
                    // width: "100vm",
                  }}
                />
                <Image
                  src="/assets/img/offers/fireworks.gif"
                  alt="Fireworks"
                  preview={false}
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-30px",
                    width: "80px",
                    height: "80px",
                    zIndex: 1,
                  }}
                />
              </div>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12}>
              <div
                className="hero-section-content"
                style={{
                  textAlign: "left",
                  animation: "fadeInUp 1s ease",
                }}
              >
                <Title
                  level={1}
                  style={{
                    background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Join Assignment Linkers <br /> VIP Membership
                </Title>
                <Title
                  level={3}
                  style={{
                    color: "#ffffffcc",
                    fontWeight: 500,
                    marginBottom: 0,
                  }}
                >
                  Upgrade to VIP for Premium Perks and Priority Access!
                </Title>
              </div>
            </Col>
          </Row>

          {/* Animation styles */}
          <style>
            {`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
          </style>
        </div>

        <div
          // className="membership-details common-background"
          style={{
            padding: "60px 20px",
            textAlign: "center",
            // width: "100vw",
            margin: "10px",
            backgroundColor: '#1b1412'
          }}
        >
          <div className="container">
            <Title
              level={3}
              style={{
                fontSize: "28px",
                // background: "linear-gradient(to right, #f7971e, #ffd200)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "40px",
                animation: "fadeInDown 1s ease-in-out",
                // width: "100vw",
              }}
            >
              Be a proud privilege member of AL & get access to a world of
              rewards & prizes
            </Title>

            <Row gutter={[24, 24]} justify="center">
              {[
                {
                  name: "Diamond Membership",
                  src: '/assets/img/diamondAA.gif',
                  color: "#b9f2ff",
                },
                {
                  name: "Platinum Membership",
                  src: "/assets/img/platinumAA.gif",
                  color: "#e5e4e2",
                },
                {
                  name: "Gold Membership",
                  src: "/assets/img/oAA.gif",
                  color: "#ffd700",
                },
                {
                  name: "Bronze Membership",
                  src: "/assets/img/bAAA.gif",
                  color: "#cd7f32",
                },
                {
                  name: "Silver Membership",
                  src: "/assets/img/sAA.gif",
                  color: "#c0c0c0",
                },
              ].map((item, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={4}>
                  <Card
                    hoverable
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      background: "#ffffff10",
                      backdropFilter: "blur(10px)",
                      color: "#fff",
                      textAlign: "center",
                      animation: `fadeInUp 0.5s ease ${index * 0.1}s`,
                      animationFillMode: "both",
                      transition: "transform 0.3s ease",
                    }}
                    cover={
                      <Image
                        alt={item.name}
                        src={item.src}
                        preview={false}
                        style={{ height: "160px", objectFit: "cover" }}
                      />
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <Text
                      strong
                      style={{
                        fontSize: "16px",
                        color: item.color,
                        textShadow: "0 0 5px rgba(255,255,255,0.5)",
                      }}
                    >
                      {item.name}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <style>
            {`
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
          </style>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default MembershipSection;
