import React from "react";
import { Card, Row, Col } from "antd";
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

const CareerPage: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        background: "#1d7db2",
        // borderRadius: 22,
        boxShadow: "0 2px 12px rgba(18, 45, 133, 0.05)",
        paddingTop: 16,
        paddingBottom: 16,
        width: "100%", // make it fill the wrapper
        margin: "0px"
      }}
    >
      {/* <div className="hero-section"> */}
      <Row>
        <Col span={12} offset={1}>
          <h1 style={{ color: "#ffffff", marginTop: "20px" }}>
            <strong>JOIN US</strong>
          </h1>
          <h2 style={{ color: "#0c4e73" }}>
            <strong>
              Join our vibrant community of knowledge enthusiasts, where
              collaboration sparks innovation.
            </strong>
          </h2>
          <h3 style={{ color: "#ffffff" }}>
            Together, let's turn ideas into impactful realities. Your unique
            perspective is the key to our collective success.
          </h3>
        </Col>
        <Col span={8}>
          <img
            src="/assets/img/Thumbnail.png"
            alt="careers"
            className="img-fluid"
            style={{height: "150px",width: "200px"}}
          />
        </Col>
      </Row>
      {/* </div> */}

      <div className="why-choose-assignment-linkers" >
        <Row gutter={[16, 16]} justify="center" style={{ marginBottom: 24 }}>
          <div className="section-header">
            <h4>Why Should You Choose Assignment Linkers?</h4>
          </div>

          <div className="why-assignment-linkers-content mt-4" style={{padding: "10px"}}>
            <Row gutter={[16, 16]} style={{padding: "10px"}}>
              <Col span={8}>
                <Card>
                  <div className="card-body">
                    <ReadOutlined
                      style={{
                        fontSize: 24,
                        color: "#1890ff",
                        marginRight: 12,
                      }}
                    />
                    <span>
                      Huge learning opportunity as you get to Learn and Train
                      directly under the supervision of experienced team leaders
                      who have seen discussions becoming products and services.
                    </span>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card>
                  <div className="card-body">
                    <TeamOutlined
                      style={{
                        fontSize: 24,
                        color: "#1890ff",
                        marginRight: 12,
                      }}
                    />
                    <span>
                      Become a part of the team that works passionately and
                      tirelessly to create solutions for different problems in
                      the E-learning sector.
                    </span>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card>
                  <div className="card-body">
                    <BulbOutlined
                      style={{
                        fontSize: 24,
                        color: "#1890ff",
                        marginRight: 12,
                      }}
                    />
                    <span>
                      Interact with the founding team members to share your
                      ideas and create an impact.
                    </span>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card>
                  <div className="card-body">
                    <HeartOutlined
                      style={{
                        fontSize: 24,
                        color: "#1890ff",
                        marginRight: 12,
                      }}
                    />
                    <span>
                      We value our employees, and the efforts they put day &
                      night tirelessly.
                    </span>
                  </div>
                </Card>
              </Col>

              <Col span={8}>
                <Card>
                  <div className="card-body">
                    <RiseOutlined
                      style={{
                        fontSize: 24,
                        color: "#1890ff",
                        marginRight: 12,
                      }}
                    />
                    <span>
                      We are committed to helping employees grow and succeed
                      within our company culture.
                    </span>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
      {/* <div > */}
      <div className="section-header">
        <h2 style={{ color: "#ffffff" }}>
          <strong>Send Your Resume Now</strong>
        </h2>
      </div>
      <CreateResume />
    </div>
  );
};

export default CareerPage;
