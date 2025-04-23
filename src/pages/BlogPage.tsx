import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
    id: string;
    title: string;
    image: string;
    createdAt: string; // ISO format
    author: string;
}

interface BlogPageProps {
    blogList: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ blogList }) => {
    const navigate = useNavigate();

    return (
        <div className="blog-wrapper">
            <header className="py-5 border-bottom blog-home-wel-sec" style={{ background: '#f9f9f9' }}>
                <div className="container blog-home-wel-container">
                    <div className="text-center my-5">
                        <h1 className="fw-bolder">Welcome to the Blog Section of Assignment Linkers!</h1>
                        <p className="lead mb-0">
                            Stay informed with the latest trends, news, and analysis in your field. From educational strategies to career development advice, we're here to support you on your journey.
                        </p>
                    </div>
                </div>
            </header>

            <div className="container blog-container" style={{ padding: '2rem 0' }}>
                <Row gutter={[24, 24]}>
                    {blogList.map((blog) => (
                        <Col key={blog.id} xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        alt={blog.title}
                                        src={`/assets/uploads/blogimages/${blog.image}`}
                                        style={{ height: 200, objectFit: 'cover' }}
                                    />
                                }
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                    <span>
                                        <CalendarOutlined style={{ marginRight: 5 }} />
                                        {new Date(blog.createdAt).toDateString()}
                                    </span>
                                    <span>
                                        <UserOutlined style={{ marginRight: 5 }} />
                                        {blog.author}
                                    </span>
                                </div>
                                <h5 style={{ marginBottom: 16 }}>{blog.title}</h5>
                                <Button type="primary" block onClick={() => navigate(`/blog/${blog.id}`)}>
                                    Read Now →
                                </Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default BlogPage;
