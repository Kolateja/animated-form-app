import React, { useEffect, useState } from 'react';
import { Table, Rate, message, Card } from 'antd';
import axios from 'axios';
import ApiService from '../services/ApiService';

interface Feedback {
    key: string;
    name: string;
    phoneNumber: string;
    orderCode: string;
    comment: string;
    rating: number;
}

const FeedbackTable: React.FC = () => {
    const [data, setData] = useState<Feedback[]>([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const res = await ApiService.get('/feedback/'); // Adjust if backend URL is different
                const formattedData = res.data.map((item: any, index: number) => ({
                    key: String(index + 1),
                    name: item.name,
                    phoneNumber: item.phoneNumber,
                    orderCode: item.orderCode,
                    comment: item.comment,
                    rating: item.rating,
                }));
                setData(formattedData);
            } catch (err: any) {
                message.error('Failed to fetch feedback');
            }
        };

        fetchFeedback();
    }, []);

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Order Code',
            dataIndex: 'orderCode',
            key: 'orderCode',
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating: number) => <Rate disabled defaultValue={rating} />,
        },
    ];

    return (

        <>
            <Card
                title={<span style={{ color: '#08a19a', display: 'flex', justifyContent: 'center' }} >All Feed Backs</span>}

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
            </Card></>
        // <Table
        //     columns={columns}
        //     dataSource={data}
        //     bordered
        //     pagination={{ pageSize: 10 }}
        //     size='small'
        //     rowKey="id"
        // />
    );
};

export default FeedbackTable;
