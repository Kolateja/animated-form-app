import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Row, Col, Typography, Image, Spin } from 'antd';

const { Title } = Typography;

interface BlogPost {
    id: string;
    title: string;
    image: string;
    createdAt: string;
    author: string;
    content: string;
}

interface BlogDetailsProps {
    getBlogDetails: (id: string) => Promise<BlogPost | null>;
}

const BlogDetailsPage: React.FC<BlogDetailsProps> = ({ getBlogDetails }) => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getBlogDetails(id).then((data) => {
                setBlog(data);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <Spin size="large" style={{ display: 'block', margin: 'auto' }} />;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <section style={{ padding: '24px' }}>
            <header className="py-2 mb-4">
                <div className="container">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                            <Image
                                src={`/assets/uploads/blogimages/${blog.image}`}
                                alt={blog.title}
                                height={400}
                                style={{ objectFit: 'cover', width: '100%' }}
                                preview={false}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <Title level={2}>{blog.title}</Title>
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
