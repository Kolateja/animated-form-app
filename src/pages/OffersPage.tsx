import React from "react";
import { Row, Col, Button, Typography, Card } from "antd";
import { PercentageOutlined } from "@ant-design/icons";
import "../assets/css/offers.css";

const { Title, Paragraph } = Typography;

const offers = [
  {
    title: "New Signup Offer",
    bg: "linear-gradient(to right, #ffd700, #ffa500)",
    points: [
      "Order an assignment and get 20% off on your first assignment",
      "Order 2 assignments and get flat 50% off on the 2nd assignment.",
      "Order 3 assignments and get flat 75% off on the 3rd assignment.",
      "Order 4 assignments and get flat 100% off on the 4th assignment.",
    ],
  },
  {
    title: "Similar Assignment Offer",
    bg: "linear-gradient(to right, #20b2aa, #00ced1)",
    points: [
      "Bring 5 members with similar assignments and get 5th assignment free.",
      "Bring 4 members with similar assignments and get 75% off on the 4th assignment.",
      "Bring 3 members with similar assignments and get 50% off on the 3rd assignment.",
    ],
  },
  {
    title: "Bulk Order Offer",
    bg: "linear-gradient(to right, #2ecc71, #27ae60)",
    points: [
      "Book three assignments (3000 words each) and get the 3rd one absolutely free.",
      "Book two assignments (5000 words each) and get the 2nd one 50% off.",
    ],
  },
  {
    title: "Referral Offer",
    bg: "linear-gradient(to right, #b188d5, #b499c4)",
    points: [
      "Enjoy a fantastic 20% discount on your next assignment when you refer a friend, who will also receive an exclusive 20% discount on their first assignment!",
      "Get a whopping 40% discount on your upcoming assignment by referring just two friends, who will each enjoy a fantastic 20% discount on their first assignments!",
    ],
  },
  {
    title: "Repetition Offer",
    bg: "linear-gradient(to right, #ffa07a, #ff7f50)",
    points: [
      "Order every assignment with us and get 50% off on the 5th order.",
    ],
  },
];

const dissertationOffers = [
  {
    title: "5% Discount",
    bg: "linear-gradient(to right, #ccbf2e, #27ae60)",
    point:
      "We offer a 5% discount on any order of a dissertation or an essay of 250 to 5,000 words. Place your order now!",
  },
  {
    title: "10% Discount",
    bg: "linear-gradient(to right, #00ced1, #20b270)",
    point:
      "We offer a 10% discount on any order of a dissertation or an essay of 5250 to 10,000 words. Place your order now!",
  },
  {
    title: "15% Discount",
    bg: "linear-gradient(to right, #fbfbf9, #c8c0b2)",
    point:
      "On all orders of 10,000 words and above, you will receive an automatic 15% discount! Place your order now!",
  },
];

const OfferCard = ({ title, points, bg }: any) => (
  <Col xs={24} sm={12} lg={8}>
    <Card className="offer-card" style={{ background: bg }}>
      <div className="offer-badge">
        <img src="/assets/img/offers/cartoon.png" alt="badge" width="70px" />
      </div>
      <Title level={4} className="text-center">
        {title}
      </Title>
      {points.map((text: string, idx: number) => (
        <Paragraph key={idx}>
          <PercentageOutlined /> {text}
        </Paragraph>
      ))}
      <a href="/auth/login-signup">
        <Button className="order-button">Order Now</Button>
      </a>
    </Card>
  </Col>
);

const DissertationCard = ({ title, point, bg }: any) => (
  <Col xs={24} sm={12} lg={8}>
    <Card
      id="main"
      className="dissertion-offer-card"
      style={{ background: bg }}
    >
      <div className="offer-badge">
        <img src="/assets/img/offers/cartoon.png" alt="badge" width="70px" />
      </div>
      <Title level={4} className="text-center">
        {title}
      </Title>
      <Paragraph>
        <PercentageOutlined /> {point}
      </Paragraph>
      <a href="/auth/login-signup">
        <Button className="order-button">Order Now</Button>
      </a>
    </Card>
  </Col>
);

const OffersPage: React.FC = () => {
  return (
    <div id="main">
      {/* <Header /> */}
      <section className="offer-card-section">
        <Title
          level={4}
          style={{ textAlign: "center", marginBottom: 20, color: "#f5f9f9" }}
        >
          <span>Assignment Offers</span>
        </Title>
        <Row gutter={[16, 16]}>
          {offers.map((offer, idx) => (
            <OfferCard key={idx} {...offer} />
          ))}
        </Row>

        {/* <Title
          level={4}
          className="dissertion-offer-card"
          style={{
            textAlign: "center",
            marginBottom: 20,
            marginTop: 20,
            color: "#f5f9f9",
          }}
        >
          <span>Dissertation Offers</span>
        </Title> */}
        <Row gutter={[16, 16]}>
          {dissertationOffers.map((offer, idx) => (
            <DissertationCard key={idx} {...offer} />
          ))}
        </Row>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default OffersPage;
