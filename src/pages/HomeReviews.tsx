import React from 'react';
import { Carousel, Row, Col, Rate, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import FeedbackForm from './FeedbackForm';
import { Helmet } from 'react-helmet';

const { Title, Paragraph } = Typography;

interface Review {
    name: string;
    orderId: string;
    text: string;
    rating: number;
}

const reviews: Review[] = [
    {
        name: 'Arjun',
        orderId: 'ALO - 4568',
        text: 'Excellent service, delivered my assignment on time with high quality content. Highly recommend AssignmentAce for all subjects!',
        rating: 4,
    },
    {
        name: 'Aishwarya',
        orderId: 'ALO - 4567',
        text: 'Assignment Linkers exceeded my expectations! Their expert team provided comprehensive assistance for my assignments across various subjects.',
        rating: 4,
    },
    {
        name: 'Aditya',
        orderId: 'ALO - 1478',
        text: 'Superb support from Assignment Linkers! They tackled my assignments in diverse subjects with professionalism and accuracy.',
        rating: 4,
    },
    {
        name: 'Kavya',
        orderId: 'ALO - 45678',
        text: 'Impressive work from Assignment Linkers! They covered all my assignment needs promptly and efficiently, ensuring top-notch quality across subjects.',
        rating: 4,
    },
    {
        name: 'Karthik',
        orderId: 'ALO - 4562',
        text: 'Assignment Linkers proved to be a reliable partner for my academic needs. Their expert guidance and timely delivery across subjects earned my trust.',
        rating: 4,
    },
    {
        name: 'Divya',
        orderId: 'ALO - 4578',
        text: 'Top-notch service from Assignment Linkers! They offered exceptional assistance across subjects, ensuring thorough research and precise content.',
        rating: 4,
    },
    {
        name: 'Vikram',
        orderId: 'ALO - 4568',
        text: 'Assignment Linkers provided outstanding support for my assignments in various subjects. Their expertise and dedication truly stood out!',
        rating: 4,
    },
    {
        name: 'Priya',
        orderId: 'ALO - 4567',
        text: 'Highly satisfied with the service from Assignment Linkers! They offered comprehensive assistance for my assignments across subjects, delivering impeccable results every time.',
        rating: 4,
    },
];

const chunkArray = (arr: Review[], size: number): Review[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

const HomeReviews: React.FC = () => {
    const reviewChunks = chunkArray(reviews, 2); // Show 2 per slide
    return (

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Assignment Linkers</title>
                <meta
                    name="keywords"
                    content="Assignment Help, Academic Writing, Homework Help, Research Paper Writing Help, Case Study Help, Coursework Help, Thesis Help, Narrative Writing, Dissertation Help, Statistical Analysis, Proposal Writing Service, Manuscript Writing Service, Editing and Proofreading Service, Essay Writing Service, Practical Assignments Help, Capstone Projects, CDR Reports, Write My Paper, Lab Report, Video Solutions, Speech Writing, Project Report Writing, Take My Online Exam, PowerPoint Presentation Service, professional writing services, academic assistance, custom writing services"
                />
                <meta
                    name="description"
                    content="Professional writing services company offering a wide range of academic and professional writing assistance. Our services include Assignment Help, Academic Writing, Homework Help, Research Paper Writing, Case Study Help, Coursework Help, Thesis and Dissertation Help, Statistical Analysis, Proposal Writing, Manuscript Writing, Editing and Proofreading, Essay Writing, Practical Assignments, Capstone Projects, CDR Reports, Lab Reports, Video Solutions, Speech Writing, Project Report Writing, Online Exam Assistance, and PowerPoint Presentation Services. Achieve your academic and professional goals with expert support and high-quality writing solutions."
                />
                <link href="/assets/img/favicon/favicon-16x16.png" rel="icon" />
                <link href="/assets/img/favicon/favicon-32x32.png" rel="icon" />
                <link href="/assets/img/favicon/apple-touch-icon.png" rel="icon" />
                <link href="/assets/img/favicon/android-chrome-192x192.png" rel="icon" />
                <link href="/assets/img/favicon/android-chrome-512x512.png" rel="icon" />
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link rel="stylesheet" href="/assets/css/common.css" />
                <link rel="stylesheet" href="/assets/css/reviews.css" />
            </Helmet>

            <FeedbackForm />
            <Title level={2} style={{ textAlign: 'center', margin: '40px 0 20px' }}>
                Our Student's <b>Feedback</b>
            </Title>

            <Carousel autoplay>
                {reviewChunks.map((chunk, index) => (
                    <div key={index}>
                        <Row gutter={[16, 16]}>
                            {chunk.map((review, i) => (
                                <Col xs={24} sm={24} md={12} key={i}>
                                    <div
                                        style={{
                                            backgroundColor: '#fff',
                                            padding: '20px',
                                            borderRadius: '10px',
                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Paragraph style={{ fontSize: 16, marginBottom: 20 }}>
                                            “{review.text}”
                                        </Paragraph>
                                        <div>
                                            <strong style={{ fontSize: 14 }}>{review.name}</strong>
                                            <div style={{ fontSize: 13, color: '#999' }}>
                                                Order Id: {review.orderId}
                                            </div>
                                            <Rate
                                                disabled
                                                defaultValue={review.rating}
                                                character={<StarOutlined />}
                                                style={{ marginTop: 8 }}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeReviews;
