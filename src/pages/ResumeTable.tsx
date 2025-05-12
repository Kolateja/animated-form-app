import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Modal, message, Upload, Form, Input, Card } from 'antd';
import type { UploadProps } from 'antd';
import { DeleteOutlined, EyeOutlined, UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import ApiService from '../services/ApiService';

interface ResumeEntry {
    key: string;
    id: number;
    name: string;
    email: string;
    phone: string;
    resumeUrl: string;
}

const ResumeTable: React.FC = () => {
    const [data, setData] = useState<ResumeEntry[]>([]);
    const [form] = Form.useForm();
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const [modalVisible, setModalVisible] = useState(false);

    const confirmDelete = async () => {
        if (deletingId !== null) {
            try {
                await ApiService.delete(`/resumes/${deletingId}`);
                message.success('Resume deleted');
                fetchResumes();
            } catch {
                message.error('Delete failed');
            } finally {
                setDeletingId(null);
                setModalVisible(false); // Close modal after action
            }
        }
    };


    // Fetch resumes on load
    useEffect(() => {
        fetchResumes();
    }, []);
    const fetchResumes = async () => {
        try {
            const res = await ApiService.get('/resumes/');
            const mapped = res.data.map((item: any) => ({
                key: item.id.toString(),
                id: item.id,
                name: item.username,
                email: item.email,
                phone: item.phone,
                resumeUrl: item.fileUrl, // Use fileUrl directly
            }));
            setData(mapped);
        } catch (err) {
            message.error('Failed to fetch resumes');
        }
    };



    const handleDelete = (id: number) => {
        setDeletingId(id);
        setModalVisible(true);
    };


    const handleView = (url: string) => {
        window.open(url, '_blank');
    };


    const columns = [
        {
            title: <span style={{ color: '#1a83c1', fontWeight: 'bold', fontSize: '16px' }}>Name</span>,
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <span style={{ fontSize: '15px' }}>{text}</span>,
        },
        {
            title: <span style={{ color: '#1a83c1', fontWeight: 'bold', fontSize: '16px' }}>Email</span>,
            dataIndex: 'email',
            key: 'email',
            render: (text: string) => <span style={{ fontSize: '15px' }}>{text}</span>,
        },
        {
            title: <span style={{ color: '#1a83c1', fontWeight: 'bold', fontSize: '16px' }}>PhoneNumber</span>,
            dataIndex: 'phone',
            key: 'phone',
            render: (text: string) => <span style={{ fontSize: '15px' }}>{text}</span>,
        },
        {
            title: <span style={{ color: '#1a83c1', fontWeight: 'bold', fontSize: '16px' }}>Resume</span>,
            key: 'actions',
            render: (_: any, record: ResumeEntry) => (
                <Space>
                    <Button
                        type="link"
                        icon={<EyeOutlined />}
                        style={{ fontWeight: 'bold', color: '#1890ff' }}
                        href={record.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View
                    </Button>
                    <Button
                        type="link"
                        icon={<DeleteOutlined />}
                        danger
                        style={{ fontWeight: 'bold' }}
                        onClick={() => handleDelete(record.id)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];


    return (
        <>
            <Card
                title={<span style={{ color: '#08a19a', display: 'flex', justifyContent: 'center' }} >Resume Table</span>}

                style={{ width: 900, margin: '0 auto' }}
            >
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    pagination={{ pageSize: 10 }}
                    style={{
                        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                        border: '1px solid #d9d9d9',
                    }}
                    rowClassName={() => 'custom-row'}
                    size='small'
                    rowKey="id"
                />

                <Modal
                    title="Are you sure you want to delete this resume?"
                    open={modalVisible}
                    onOk={confirmDelete}
                    onCancel={() => setModalVisible(false)}
                    okText="Yes"
                    okType="danger"
                >
                    <p>This action cannot be undone.</p>
                </Modal>
            </Card>


        </>
    );
};

export default ResumeTable;
