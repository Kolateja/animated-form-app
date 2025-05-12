import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Tag, Popconfirm, message, Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import ApiService from '../services/ApiService';
import { Link } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  accessStatus: string;
  userId: string;
}

const UserTable: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response: any = await ApiService.get('/users/all');
        if (response.success) {
          alert("All users fetched successfully")
          const users = response.data.filter((user: User) => user.role === 'student');
          setData(users);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const searchValue = searchText.toLowerCase();
    return (
      item.userId.toLowerCase().includes(searchValue) ||
      item.username.toLowerCase().includes(searchValue) ||
      item.email.toLowerCase().includes(searchValue) ||
      item.phone.toLowerCase().includes(searchValue) ||
      item.role.toLowerCase().includes(searchValue)
    );
  });

  const updateAccessStatus = async (id: string, status: string) => {
    setUpdating(true);
    try {
      const response: any = await ApiService.post(`/users/update/${id}`, { accessStatus: status });
      if (response.success) {
        alert("User access status updated successfully")
        message.success('User access status updated successfully');
        setData((prevData) => prevData.map((user) =>
          user.id === id ? { ...user, accessStatus: status } : user
        ));
      } else {
        message.error(response.message || 'Failed to update access status');
      }
    } catch (error) {
      message.error('Error updating access status');
    } finally {
      setUpdating(false);
    }
  };

  const columns = [
    {
      title: 'UserId',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <Tag color="green">{role?.toUpperCase()}</Tag>
      ),
    },
    {
      title: 'Access Status',
      dataIndex: 'accessStatus',
      key: 'accessStatus',
      render: (accessStatus: string, record: User) => {
        const status = accessStatus || 'Unknown';  // Don't uppercase it
        return (
          <Space>
            <Tag color={status === 'Allowed' ? 'green' : 'volcano'}>{status.toUpperCase()}</Tag>
            <Popconfirm
              title="Are you sure to change the access status?"
              onConfirm={() =>
                updateAccessStatus(record.id, status === 'Allowed' ? 'Denied' : 'Allowed')
              }
            >
              <Button type="link">Change</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: User) => (
        <Space size="middle">
          <Link to={`/userDetails/${record.id}/${record.userId}`}>
            <Button icon={<EyeOutlined />} type="link">View</Button>
          </Link>
        </Space>
      ),
    }

  ];

  return (
    <Card
      title={<span style={{ color: '#08a19a', display: 'flex', justifyContent: 'center' }} >Student List</span>}

      style={{ width: 900, margin: '0 auto' }}
    >

      <Space>
        <Input.Search
          placeholder="Search students Details..."
          allowClear
          value={searchText}
          onChange={handleSearch}
          onSearch={(value: any) => { setSearchText(value) }}
          style={{ width: 200, float: "right",height:40 }}
          size='large'
        />
      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        bordered
        loading={loading || updating}
        pagination={{ pageSize: 10 }}
        style={{
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          border: '1px solid #d9d9d9',
        }}
        rowClassName={() => 'custom-row'}
        size='small'
        rowKey="id"
      />
    </Card>
    // <>
    //   <h2>Student List</h2>

    // <Space>
    //   <Input.Search
    //     placeholder="Search students Details..."
    //     allowClear
    //     value={searchText}
    //     onChange={handleSearch}
    //     onSearch={(value: any) => { setSearchText(value) }}
    //     style={{ width: 200, float: "right" }}
    //     size='small'
    //   />
    // </Space>

    //   <Table
    //     columns={columns}
    //     dataSource={filteredData}
    //     loading={loading || updating}
    //     bordered
    //     size='small'
    //     rowKey="id"
    //   // scroll={{ x: 2200, y: 500 }}
    //   />
    // </>
  );
};

export default UserTable;
