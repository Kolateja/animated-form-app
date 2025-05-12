import React, { useEffect, useState } from 'react';
import { Table, Button, message, Space, Popconfirm, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ApiService from '../services/ApiService';
import { useNavigate } from 'react-router-dom';

interface Sample {
    id: number;
    title: string;
    category: string;
    pdfUrl: string;
}

const SampleTable: React.FC = () => {
    const [samples, setSamples] = useState<Sample[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const fetchSamples = async () => {
        setLoading(true);
        try {
            const res: any = await ApiService.get('/samples/');
            if (res.success) {
                setSamples(res.data);
            } else {
                message.error(res.message || 'Failed to load samples');
            }
        } catch (err) {
            console.error(err);
            message.error('Error fetching samples');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSamples();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await ApiService.delete(`/samples/${id}`);
            message.success('samples deleted successfully');
            fetchSamples();
        } catch (err) {
            console.error(err);
            message.error('Delete failed');
        }
    };

    const columns: ColumnsType<Sample> = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'View File',
            dataIndex: 'pdfUrl',
            key: 'pdf',
            render: (url: string) => (
                url ? (
                    <Button type="link" onClick={() => window.open(url, '_blank')}>View PDF</Button>
                ) : (
                    'No PDF'
                )
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <Space>
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
                title={<span style={{ color: '#eb987d', display: 'flex', justifyContent: 'center' }} >Samples</span>}
                extra={
                    <Button type="primary" onClick={() => navigate('/sample')}>Add Sample</Button>
                }
                style={{ width: 900, margin: '0 auto' }}
            >
                <Table
                    columns={columns}
                    dataSource={samples}
                    bordered
                    rowKey="id"
                    size='small'
                    className="table-wrapper"
                    pagination={{ pageSize: 10 }}

                // scroll={{ x: 1500, y: 500 }}
                />
            </Card>
        </>

    );
};

export default SampleTable;