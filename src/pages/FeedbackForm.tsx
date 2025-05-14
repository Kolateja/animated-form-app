import React, { useState } from "react";
import {
  Carousel,
  Row,
  Col,
  Rate,
  Typography,
  Card,
  Form,
  Input,
  Button,
  message,
} from "antd";
import { Helmet } from "react-helmet";
import { UserOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import styled from "styled-components";
import ApiService from "../services/ApiService";
import "../assets/css/reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title, Paragraph } = Typography;

const feedbackData = [
  {
    name: "Arjun",
    orderId: "ALO - 4568",
    message:
      "Excellent service, delivered my assignment on time with high quality content. Highly recommend AssignmentAce for all subjects!",
    rating: 5,
  },
  {
    name: "Aishwarya",
    orderId: "ALO - 4567",
    message:
      "Assignment Linkers exceeded my expectations! Their expert team provided comprehensive assistance for my assignments across various subjects.",
    rating: 4,
  },
  {
    name: "Aditya",
    orderId: "ALO - 1478",
    message:
      "Superb support from Assignment Linkers! They tackled my assignments in diverse subjects with professionalism and accuracy.",
    rating: 5,
  },
  {
    name: "Kavya",
    orderId: "ALO - 45678",
    message:
      "Impressive work from Assignment Linkers! They covered all my assignment needs promptly and efficiently, ensuring top-notch quality across subjects.",
    rating: 5,
  },
  {
    name: "Karthik",
    orderId: "ALO - 4562",
    message:
      "Assignment Linkers proved to be a reliable partner for my academic needs. Their expert guidance and timely delivery across subjects earned my trust.",
    rating: 5,
  },
  {
    name: "Divya",
    orderId: "ALO - 4578",
    message:
      "Top-notch service from Assignment Linkers! They offered exceptional assistance across subjects, ensuring thorough research and precise content.",
    rating: 5,
  },
  {
    name: "Vikram",
    orderId: "ALO - 4568",
    message:
      "Assignment Linkers provided outstanding support for my assignments in various subjects. Their expertise and dedication truly stood out!",
    rating: 5,
  },
  {
    name: "Priya",
    orderId: "ALO - 4567",
    message:
      "Highly satisfied with the service from Assignment Linkers! They offered comprehensive assistance for my assignments across subjects, delivering impeccable results every time.",
    rating: 5,
  },
];

const chunkArray = (arr: typeof feedbackData, size: number) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 !important;
    display: flex !important;
    justify-content: center;
  }

  .slick-track {
    display: flex !important;
    align-items: stretch;
  }

  .slick-dots li button:before {
    color: #1890ff;
  }
`;

const FeedbackForm: React.FC = () => {
  const [form] = Form.useForm();
  const slides = chunkArray(feedbackData, 3);

  const onFinish = async (values: any) => {
    try {
      await ApiService.post("/feedback/", values);
      await ApiService.post("/webPageRoutes/reviews", {
        name: values.name,
        phoneNumber: values.phoneNumber,
        orderCode: values.orderCode,
        comment: values.comment,
        rating: values.rating,
      });
      alert("Thank you for your valuable feedback");
      message.success("Feedback submitted successfully");
      form.resetFields();
    } catch (error: any) {
      console.error("Feedback submission error:", error);
      message.error(error.response?.data?.message || "Submission failed");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1, // Show 1 group of 3 cards per slide
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="main" className="reviewComponent-main">
      <section id="hero" className="reviewComponent-hero">
        <div className="reviewComponent-container">
          <div className="reviewComponent-row">
            <div className="reviewComponent-colLeft">
              <div className="reviewComponent-imageWrapper">
                <img
                  src="./assets/img/reviews/reviews.png"
                  alt="review-image"
                  className="reviewComponent-mainImage"
                />
              </div>
              <div className="reviewComponent-reviewImages">
                {["trustpilot", "google", "glassdoor"].map((name) => (
                  <div className="reviewComponent-reviewImage" key={name}>
                    <img
                      src={`./assets/img/reviews/${name}-reviews.png`}
                      alt={`${name}-review`}
                      className="reviewComponent-img"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="reviewComponent-formWrapper">
              <h4 className="reviewComponent-formTitle">
                Submit Your Feedback
              </h4>
              <Form
                id="studentFeedbackForm"
                form={form}
                onFinish={onFinish}
                layout="vertical"
                className="reviewComponent-form"
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                  className="reviewComponent-formGroup"
                >
                  <Input className="reviewComponent-input" />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[{ required: true }]}
                  className="reviewComponent-formGroup"
                >
                  <Input className="reviewComponent-input" />
                </Form.Item>
                <Form.Item
                  name="orderCode"
                  label="Order Code"
                  rules={[{ required: true }]}
                  className="reviewComponent-formGroup"
                >
                  <Input className="reviewComponent-input" />
                </Form.Item>
                <Form.Item
                  name="comment"
                  label="Comment"
                  className="reviewComponent-formGroup"
                >
                  <Input.TextArea
                    rows={4}
                    className="reviewComponent-textArea"
                  />
                </Form.Item>
                <Form.Item
                  name="rating"
                  label="Rating"
                  rules={[{ required: true }]}
                  className="reviewComponent-formGroup reviewComponent-ratingContainer"
                >
                  <Rate className="reviewComponent-rating" />
                </Form.Item>
                <Form.Item className="reviewComponent-formGroup reviewComponent-submitBtnWrapper">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="reviewComponent-submitBtn"
                  >
                    Submit Feedback
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <div className="reviewComponent-feedbackSection">
        <h2 className="reviewComponent-feedbackTitle">
          Our Student's{" "}
          <span className="reviewComponent-highlight">Feedback</span>
        </h2>

        <StyledSlider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="reviewComponent-cardRow">
                {slide.map((feedback, i) => (
                  <Card
                    key={i}
                    bordered={false}
                    className="reviewComponent-feedbackCard"
                  >
                    <p className="reviewComponent-feedbackMessage">
                      “{feedback.message}”
                    </p>
                    <Rate
                      disabled
                      defaultValue={feedback.rating}
                      className="reviewComponent-feedbackRating"
                    />
                    <p className="reviewComponent-feedbackName">
                      {feedback.name}
                    </p>
                    <p className="reviewComponent-feedbackOrder">
                      {feedback.orderId}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </StyledSlider>
      </div>
    </div>
  );
};

export default FeedbackForm;
