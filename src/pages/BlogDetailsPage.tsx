
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, Image, Spin } from 'antd';
import ApiService from '../services/ApiService';

const { Title } = Typography;

interface BlogPost {
    id: string;
    title: string;
    tags: string;
    fileUrl: string;
    image: string;
    createdAt: string;
    subtitle: string;
    content: string;
}

const BlogDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await ApiService.get(`/blogs/${id}`);
                setBlog(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBlogDetails();
        }
    }, [id]);

    if (loading) return <Spin size="large" style={{ display: 'block', margin: 'auto' }} />;
    if (!blog) return <div>Blog not found</div>;

    return (
        <section style={{ padding: '24px' }}>
            <header className="py-2 mb-4">
                <div className="container">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Image
                                alt={blog.title}
                                src={blog.fileUrl || '/placeholder.png'}
                                style={{ height: 200, objectFit: 'cover', width: '100%' }}
                                height={400}
                                preview={false}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <Title level={2}>{blog.title}</Title>
                            <p><strong>Author:</strong> {blog.subtitle}</p>
                            <p><strong>Published on:</strong> {new Date(blog.createdAt).toDateString()}</p>
                        </Col>
                    </Row>
                </div>
            </header>
            <div className="container">
                <Row>
                    <Col span={24}>
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default BlogDetailsPage;
