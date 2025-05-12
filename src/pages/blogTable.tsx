import React, { useEffect, useState } from 'react';
import { Table, Image, Tag, message, Button, Popconfirm, Space, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiService from '../services/ApiService';

const BlogTable: React.FC = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    const fetchBlogs = async () => {
        try {
            const res = await ApiService.get('/blogs/');
            setBlogs(res.data);
        } catch (err) {
            console.error(err);
            message.error('Failed to load blogs');
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await ApiService.delete(`/blogs/${id}`);
            message.success('Blog deleted successfully');
            fetchBlogs();
        } catch (err) {
            console.error(err);
            message.error('Delete failed');
        }
    };

    const handleEdit = (id: number) => {
        navigate(`/editblog/${id}`);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Subtitle',
            dataIndex: 'subtitle',
            key: 'subtitle',
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            render: (tagString: string) =>
                tagString
                    ?.split(',')
                    .map((tag, index) => <Tag key={index}>{tag.trim()}</Tag>),
        },
        // {
        //     title: 'Content',
        //     dataIndex: 'content',
        //     key: 'content',
        //     ellipsis: true,
        // },
        {
            title: 'Image',
            dataIndex: 'fileUrl',
            key: 'image',
            render: (url: string) =>
                url ? (
                    <Image
                        src={url}
                        alt="blog"
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover' }}
                    />
                ) : (
                    'No Image'
                ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <Space>
                    <Button type="link" onClick={() => handleEdit(record.id)}>Edit</Button>
                    <Popconfirm
                        title="Are you sure you want to delete this blog?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>

            <Card
                title={<span style={{ color: '#eb987d',display: 'flex', justifyContent: 'center' }} >Blog</span>}
                extra={
                    <Button type="primary" onClick={() => navigate('/createblog')}>Add Blog</Button>
                }
                style={{ width: 900, margin: '0 auto' }}
            >
                <Table
                    columns={columns}
                    dataSource={blogs}
                    bordered
                    rowKey="id"
                    size='small'
                    className="table-wrapper"
                    // scroll={{ x: 1500, y: 500 }}
                />
            </Card>
        </>
    );
};

export default BlogTable;
