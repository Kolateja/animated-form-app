
import React, { useState } from 'react';
import { Carousel, Row, Col, Rate, Typography, Card, Form, Input, Button, message, Avatar } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import ApiService from '../services/ApiService';
import '../assets/css/reviews.css';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;


const feedbackData = [
    {
        name: 'Arjun',
        orderId: 'ALO - 4568',
        message:
            'Excellent service, delivered my assignment on time with high quality content. Highly recommend AssignmentAce for all subjects!',
        rating: 5,
    },
    {
        name: 'Aishwarya',
        orderId: 'ALO - 4567',
        message:
            'Assignment Linkers exceeded my expectations! Their expert team provided comprehensive assistance for my assignments across various subjects.',
        rating: 4,
    },
    {
        name: 'Aditya',
        orderId: 'ALO - 1478',
        message:
            'Superb support from Assignment Linkers! They tackled my assignments in diverse subjects with professionalism and accuracy.',
        rating: 5,
    },
    {
        name: 'Kavya',
        orderId: 'ALO - 45678',
        message:
            'Impressive work from Assignment Linkers! They covered all my assignment needs promptly and efficiently, ensuring top-notch quality across subjects.',
        rating: 5,
    },
    {
        name: 'Karthik',
        orderId: 'ALO - 4562',
        message:
            'Assignment Linkers proved to be a reliable partner for my academic needs. Their expert guidance and timely delivery across subjects earned my trust.',
        rating: 5,
    },
    {
        name: 'Divya',
        orderId: 'ALO - 4578',
        message:
            'Top-notch service from Assignment Linkers! They offered exceptional assistance across subjects, ensuring thorough research and precise content.',
        rating: 5,
    },
    {
        name: 'Vikram',
        orderId: 'ALO - 4568',
        message:
            'Assignment Linkers provided outstanding support for my assignments in various subjects. Their expertise and dedication truly stood out!',
        rating: 5,
    },
    {
        name: 'Priya',
        orderId: 'ALO - 4567',
        message:
            'Highly satisfied with the service from Assignment Linkers! They offered comprehensive assistance for my assignments across subjects, delivering impeccable results every time.',
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
const FeedbackForm: React.FC = () => {
    const [form] = Form.useForm();
    const slides = chunkArray(feedbackData, 3);
    console.log(slides, "}}}}}}}}}}}}}}}}}}}}}}}}")
    // const slides = chunkArray(feedbackData, 2);
    const onFinish = async (values: any) => {
        try {
            // 1. Store feedback in DB
            await ApiService.post('/feedback/', values);

            // 2. Send feedback email
            await ApiService.post("/webPageRoutes/reviews", {
                name: values.name,
                phoneNumber: values.phoneNumber,
                orderCode: values.orderCode,
                comment: values.comment,
                rating: values.rating,
            });
            alert("Thank you for your valuable feedback")
            message.success('Feedback submitted successfully');
            form.resetFields();
        } catch (error: any) {
            console.error('Feedback submission error:', error);
            message.error(error.response?.data?.message || 'Submission failed');
        }
    };
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 5000, // very slow animation
        autoplay: true,
        autoplaySpeed: 0, // no wait between slides
        cssEase: 'linear', // smooth continuous effect
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    const StyledSlider = styled(Slider)`
    .slick-slide {
      padding: 0 !important;
      margin: 0 !important;
      display: flex !important;
      justify-content: center; /* Center the card inside the slide */
    }
  
    .slick-track {
      display: flex !important;
      align-items: center;
    }
  
    .slick-slide > div {
      margin: 0 !important;
      padding: 0 !important;
    }
  `;

    return (
        <div id="main">
            <section id="hero" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row img-fluid">
                                <img
                                    src="./assets/img/reviews/reviews.png"
                                    alt="review=image"
                                />
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <img
                                        src="./assets/img/reviews/trustpilot-review.png"
                                        alt="trustpilot-review"
                                        style={{ width: '150px' }}
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        src="./assets/img/reviews/google-reviews.png"
                                        alt="google-review"
                                        style={{ width: '150px' }}
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        src="./assets/img/reviews/glassdoor-reviews.png"
                                        alt="glassdoor-review"
                                        style={{ width: '150px' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 review-form">
                            <h4 className="text-center">Submit Your Feedback</h4>
                            <Form
                                id="studentFeedbackForm"
                                form={form}
                                onFinish={onFinish}
                                layout="vertical"
                                className="review-form"
                            >
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter your name' }]}
                                    className="form-group"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="phoneNumber"
                                    label="Phone Number"
                                    rules={[{ required: true }]}
                                    className="form-group"
                                >
                                    <Input placeholder="Phone No." />
                                </Form.Item>
                                <Form.Item
                                    name="orderCode"
                                    label="Order Code"
                                    rules={[{ required: true, message: 'Order code is required' }]}
                                    className="form-group"
                                >
                                    <Input placeholder="Order Code*" />
                                </Form.Item>
                                <Form.Item
                                    name="comment"
                                    label="Comment"
                                    className="form-group"
                                >
                                    <Input.TextArea rows={4} placeholder="Comment*" />
                                </Form.Item>
                                <Form.Item
                                    name="rating"
                                    label="Rating"
                                    rules={[{ required: true }]}
                                    className="form-group rating-container"
                                >
                                    <Rate />
                                </Form.Item>
                                <Form.Item className="form-group text-center">
                                    <Button type="primary" htmlType="submit" className="btn btn-success">
                                        Submit Feedback
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            <div
            // style={{
            //     padding: '50px 20px',
            //     background: 'linear-gradient(120deg, #f0f4f8, #d9e2ec)',
            //     minHeight: '100vh',
            // }}
            >
                <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>
                    Our Student's <span style={{ color: '#1890ff' }}>Feedback</span>
                </h2>

                <StyledSlider  {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    gap: '30px',
                                    padding: '20px 0',
                                }}
                            >
                                {slide.map((feedback, i) => (
                                    <Card
                                        key={i}
                                        bordered={false}
                                        style={{
                                            width: 300,
                                            margin: '0 auto',
                                            textAlign: 'center',
                                            background: '#fff',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            borderRadius: '16px',
                                            padding: '20px',
                                        }}
                                    >

                                        <p style={{ fontStyle: 'italic', marginBottom: 16 }}>
                                            “{feedback.message}”
                                        </p>
                                        <Rate
                                            disabled
                                            defaultValue={feedback.rating}
                                            style={{ marginBottom: 16 }}
                                        />
                                        <p style={{ fontWeight: 600, fontSize: '16px', marginBottom: 0 }}>
                                            {feedback.name}
                                        </p>
                                        <p style={{ color: '#999' }}>{feedback.orderId}</p>
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

