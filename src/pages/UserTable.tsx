import React, { useState, useRef } from 'react';
import { Table, Input, Button, Space, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';
import { SearchOutlined, EyeOutlined } from '@ant-design/icons';
import type { FilterConfirmProps } from 'antd/es/table/interface';

interface User {
  key: string;
  name: string;
  userId: string;
  email: string;
  mobile: string;
  role: 'student' | 'admin' | 'writer';
}

type DataIndex = keyof User;

const sampleData: User[] = [
  {
    key: '1',
    name: 'John Doe',
    userId: 'U1001',
    email: 'john@example.com',
    mobile: '1234567890',
    role: 'student',
  },
  {
    key: '2',
    name: 'Alice Smith',
    userId: 'U1002',
    email: 'alice@example.com',
    mobile: '9876543210',
    role: 'admin',
  },
  {
    key: '3',
    name: 'Michael Johnson',
    userId: 'U1003',
    email: 'michael@example.com',
    mobile: '5556667777',
    role: 'writer',
  },
];

const UserTable: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<User> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters!)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <span style={{ fontWeight: 'bold', backgroundColor: '#ffd' }}>{text}</span>
      ) : (
        text
      ),
  });

  const handleSearch = (
    selectedKeys: React.Key[],
    confirm: () => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]?.toString() || '');
    setSearchedColumn(dataIndex);
  };
  
  

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const columns: ColumnType<User>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
      ...getColumnSearchProps('userId'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobile',
      key: 'mobile',
      ...getColumnSearchProps('mobile'),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      filters: [
        { text: 'Student', value: 'student' },
        { text: 'Admin', value: 'admin' },
        { text: 'Writer', value: 'writer' },
      ],
      onFilter: (value, record) => record.role === value,
      render: (role: string) => {
        const color = role === 'admin' ? 'red' : role === 'writer' ? 'blue' : 'green';
        return <Tag color={color}>{role.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          onClick={() => console.log('Viewing user:', record)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>User List</h2>
      <Table columns={columns} dataSource={sampleData} bordered />
    </div>
  );
};

export default UserTable;
