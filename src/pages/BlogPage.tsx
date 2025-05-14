// import React, { useEffect, useState } from 'react';
// import { Card, Button, Row, Col } from 'antd';
// import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Footer from './FooterSection';
// import '../assets/css/blog.css'; // Adjust the path based on file location
// import ApiService from '../services/ApiService';

// interface BlogPost {
//     id: string;
//     title: string;
//     image: string;
//     createdAt: string; // ISO format
//     author: string;
// }

// interface BlogPageProps {
//     blogList: BlogPost[];
// }

// const BlogPage: React.FC<BlogPageProps> = ({ blogList }) => {
//     const navigate = useNavigate();
//     const [blogs, setBlogs] = useState([]);

//     const fetchBlogs = async () => {
//         try {
//             const res: any = await ApiService.get('/blogs/');
//             setBlogs(res.data);
//         } catch (err) {
//             console.error(err);
//             message.error('Failed to load blogs');
//         }
//     };

//     useEffect(() => {
//         fetchBlogs();
//     }, []);

//     return (
//         <div className="blog-wrapper">
//             <header className="py-5 border-bottom blog-home-wel-sec" style={{ background: '#f9f9f9' }}>
//                 <div className="container blog-home-wel-container">
//                     <div className="text-center my-5">
//                         <h1 className="fw-bolder">Welcome to the Blog Section of Assignment Linkers!</h1>
//                         <p className="lead mb-0">
//                             Stay informed with the latest trends, news, and analysis in your field. From educational strategies to career development advice, we're here to support you on your journey.
//                         </p>
//                     </div>
//                 </div>
//             </header>

//             <div className="container blog-container" style={{ padding: '2rem 0' }}>
//                 <Row gutter={[24, 24]}>
//                     {blogList.map((blog) => (
//                         <Col key={blog.id} xs={24} sm={12} md={8}>
//                             <Card
//                                 hoverable
//                                 cover={
//                                     <img
//                                         alt={blog.title}
//                                         src={`/assets/uploads/blogimages/${blog.image}`}
//                                         style={{ height: 200, objectFit: 'cover' }}
//                                     />
//                                 }
//                             >
//                                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
//                                     <span>
//                                         <CalendarOutlined style={{ marginRight: 5 }} />
//                                         {new Date(blog.createdAt).toDateString()}
//                                     </span>
//                                     <span>
//                                         <UserOutlined style={{ marginRight: 5 }} />
//                                         {blog.author}
//                                     </span>
//                                 </div>
//                                 <h5 style={{ marginBottom: 16 }}>{blog.title}</h5>
//                                 <Button type="primary" block onClick={() => navigate(`/blog/${blog.id}`)}>
//                                     Read Now →
//                                 </Button>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>
//         </div>
//     );
// };

// export default BlogPage;
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, message } from "antd";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import "../assets/css/blog.css";

interface BlogPost {
  id: string;
  title: string;
  fileUrl: string;
  createdAt: string;
  author: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await ApiService.get("/blogs/");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
      message.error("Failed to load blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blog-wrapper">
      <header className="blog-home-wel-sec">
        <div className="blog-home-wel-container">
          <div className="blog-intro">
            <h1>Welcome to the Blog Section of Assignment Linkers!</h1>
            <p>
              Stay informed with the latest trends, news, and analysis in your
              field. From educational strategies to career development advice,
              we're here to support you on your journey.
            </p>
          </div>
        </div>

        <style>
          {`
      .blog-home-wel-sec {
        background-image: linear-gradient(to bottom, #1E3C72, #2A5298);
        padding: 60px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      .blog-home-wel-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .blog-intro {
        text-align: center;
        margin: 60px 0;
      }

      .blog-intro h1 {
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 1rem;
      }

      .blog-intro p {
        color: rgb(168, 168, 168);
        font-size: 1.1rem;
        max-width: 800px;
        margin: 0 auto;
      }
    `}
        </style>
      </header>

      <div
        className="container blog-container"
        style={{ padding: "2rem 0", width: "100%" }}
      >
        <Row gutter={[24, 24]}>
          {blogs.map((blog) => (
            <Col key={blog.id} xs={24} sm={12} md={8}>
              <Card
                className="blog-item"
                hoverable
                cover={
                  <img
                    alt={blog.title}
                    src={blog.fileUrl || "/placeholder.png"}
                    style={{ height: 200, objectFit: "cover", width: "100%" }}
                  />
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span className="blog-created-date">
                    <CalendarOutlined style={{ marginRight: 5 }} />
                    {new Date(blog.createdAt).toDateString()}
                  </span>
                  <span className="blog-author">
                    <UserOutlined style={{ marginRight: 5 }} />
                    {blog.author}
                  </span>
                </div>
                <h5>{blog.title}</h5>
                <Button
                  type="primary"
                  block
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
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
