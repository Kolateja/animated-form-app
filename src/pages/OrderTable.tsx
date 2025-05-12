import React, { useState, useRef, useEffect } from 'react';
import { Table, Input, Button, Space, Tag, Popconfirm, message, Select, Modal, Card } from 'antd';

import type { ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';
import { SearchOutlined, EyeOutlined } from '@ant-design/icons';
import axios from 'axios';
import ApiService from '../services/ApiService';
import { Link } from 'react-router-dom';
interface Order {
  id: string
  key: string;
  orderId: string;
  subject: string;
  userId: string
  deadline: string;
  wordCount: number;
  pages: number;
  orderStatus: 'pending' | 'inProgress' | 'completed' | 'awaitingClarification';
}

type DataIndex = keyof Order;

const OrderTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [updating, setUpdating] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>('');


  // 🔹 Fetch assignments from backend
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await ApiService.get('/assignments/', { withCredentials: true });
        const data = Array.isArray(response.data) ? response.data : [];

        const formatted: Order[] = data.map((item: any, index: number) => ({
          id: item.id,
          key: index.toString(),
          orderId: item.orderId,
          userId: item.userId,
          subject: item.subject || 'N/A',
          deadline: item.deadline || 'N/A',
          wordCount: item.wordCount || 0,         // match interface
          pages: item.pages || 0,         // match interface
          orderStatus: item.orderStatus || 'pending',   // match interface
        }));


        console.log(formatted, "??????")
        setOrders(formatted);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  const updateOrderStatus = async (id: string, orderStatus: string) => {
    setUpdating(true);
    try {
      const response: any = await ApiService.put(`/assignments/${id}`, { orderStatus: orderStatus });
      console.log(response, ":::::::::::")
      if (response.success) {
        alert('Order status updated successfully');
        message.success('Order status updated successfully');
        setOrders((prevData) =>
          prevData.map((order) =>
            order.id === id
              ? { ...order, orderStatus: orderStatus as Order['orderStatus'] }
              : order
          )
        );
      } else {
        message.error(response.message || 'Failed to update order status');
      }
    } catch (error) {
      message.error('Error updating order status');
    } finally {
      setUpdating(false);
    }
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setSelectedOrderId(orderId);
    setSelectedStatus(newStatus);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    if (selectedOrderId && selectedStatus) {
      updateOrderStatus(selectedOrderId, selectedStatus);
    }
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedOrderId(null);
    setSelectedStatus('');
  };
  const filteredOrders = Array.isArray(orders)
    ? orders.filter(order =>
      Object.values(order).some(value =>
        String(value ?? '').toLowerCase().includes(searchText.toLowerCase())
      )
    )
    : [];


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const columns: ColumnType<Order>[] = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Deadline (IST)',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Words Count',
      dataIndex: 'wordCount',
      key: 'wordCount',
    },
    {
      title: 'Pages',
      dataIndex: 'pages',
      key: 'pages',
    },
    {
      title: 'Order Status',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      render: (orderStatus: string, record: Order) => {
        const status = orderStatus || 'pending';

        return (
          <Select
            value={status}
            onChange={(newStatus) => handleStatusChange(record.id, newStatus)} // <-- OPEN MODAL HERE
            style={{ width: 180 }}
          >
            <Select.Option value="pending">Pending</Select.Option>
            <Select.Option value="inProgress">In Progress</Select.Option>
            <Select.Option value="awaitingClarification">Awaiting Clarification</Select.Option>
            <Select.Option value="completed">Completed</Select.Option>
          </Select>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Order) => (
        <Space size="middle">
          <Link to={`/orderDetails/${record.userId}/${record.orderId}`}>
            <Button icon={<EyeOutlined />} type="link">View</Button>
          </Link>
        </Space>
      ),
    }
  ];

  return (
    // <>
    //   <h2>Orders List</h2>
    // <Space>
    //   <Input.Search
    //     placeholder="Search order Details..."
    //     allowClear
    //     value={searchText}
    //     onChange={handleSearch}
    //     onSearch={(value: any) => { setSearchText(value) }}
    //     style={{ width: 200, float: "right" }}
    //     size='small'
    //   />
    // </Space>
    // <Table
    //   columns={columns}
    //   dataSource={orders.filter(order =>
    //     Object.values(order).some(value =>
    //       String(value ?? '').toLowerCase().includes(searchText.toLowerCase())
    //     )
    //   )}
    //   loading={loading}
    //   bordered
    //   size='small'
    //   rowKey="id"
    // />


    // <Modal
    //   title="Confirm Status Change"
    //   visible={isModalVisible}
    //   onOk={handleModalOk}
    //   onCancel={handleModalCancel}
    //   okText="Update"
    //   cancelText="Cancel"
    // >
    //   <p>Are you sure you want to change the status to <strong>{selectedStatus}</strong>?</p>
    // </Modal>

    // </>

    <>

      <Card
        title={<span style={{ color: '#eb987d', display: 'flex', justifyContent: 'center' }} >Orders List</span>}
        style={{ width: 900, margin: '0 auto' }}
      >
        <Space>
          <Input.Search
            placeholder="Search order Details..."
            allowClear
            value={searchText}
            onChange={handleSearch}
            onSearch={(value: any) => { setSearchText(value) }}
            style={{ width: 200, float: "right" ,height:40}}
             size='large'
          />
        </Space>
        <Table
          columns={columns}
          dataSource={orders.filter(order =>
            Object.values(order).some(value =>
              String(value ?? '').toLowerCase().includes(searchText.toLowerCase())
            )
          )}
          loading={loading}
          bordered
          size='small'
          rowKey="id"
        />

        <Modal
          title="Confirm Status Change"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          okText="Update"
          cancelText="Cancel"
        >
          <p>Are you sure you want to change the status to <strong>{selectedStatus}</strong>?</p>
        </Modal>
      </Card>
    </>
  );
};

export default OrderTable;
