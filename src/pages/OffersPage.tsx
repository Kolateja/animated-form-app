import React from "react";
import { Row, Col, Button, Typography, Card, Image } from "antd";
import { PercentageOutlined } from "@ant-design/icons";
import "../assets/css/offers.css";

const { Title } = Typography;

const items = [
  { src: "/assets/img/new.jpg", color: "#b9f2ff" },
  { src: "/assets/img/ass.jpg", color: "#e5e4e2" },
  { src: "/assets/img/i3.jpg", color: "#ffd700" },
  { src: "/assets/img/i4.jpg", color: "#cd7f32" },
  { src: "/assets/img/i5.jpg", color: "#c0c0c0" },
];
const item1 = [
  { src: "/assets/img/i6.jpg", color: "#ffd700" },
  { src: "/assets/img/i7.jpg", color: "#cd7f32" },
  { src: "/assets/img/i8.jpg", color: "#c0c0c0" },
];

const OffersPage: React.FC = () => {
  return (
    <div id="main">
      {/* <Header /> */}
      <section className="offer-card-section">

        <Title
          level={2}
          style={{ textAlign: "center", marginBottom: 20, color: "#f5850e" }}
        >
          <span>Assignment Offers</span>
        </Title>

        <Row gutter={[24, 24]} justify="center" >
          {items.slice(0, 3).map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${item.color}30, #ffffff05)`,
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                bodyStyle={{ padding: "16px" }}
                cover={
                  <div style={{ padding: "16px" }}>
                    <Image
                      src={item.src}
                      preview={true}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
              />
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
          {items.slice(3).map((item, index) => (
            <Col key={index + 3} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${item.color}30, #ffffff05)`,
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                bodyStyle={{ padding: "16px" }}
                cover={
                  <div style={{ padding: "16px" }}>
                    <Image
                      src={item.src}
                      preview={true}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
              />
            </Col>
          ))}
        </Row>

        <Title
          level={2}
          style={{ textAlign: "center", marginBottom: 20, color: "#f5850e" }}
        >
          <span>Dissertation Offers</span>
        </Title>
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
  {item1.map((item, index) => (
    <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
      <Card
        hoverable
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${item.color}30, #ffffff05)`,
          backdropFilter: "blur(8px)",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        bodyStyle={{ padding: "16px" }}
        cover={
          <div style={{ padding: "16px" }}>
            <Image
              src={item.src}
              preview={true}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </div>
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        }}
      />
    </Col>
  ))}
</Row>

      </section>
    </div>
  );
};

export default OffersPage;
