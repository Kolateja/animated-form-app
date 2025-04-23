import React, { useState, useRef } from 'react';
import { Table, Input, Button, Space, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';
import { SearchOutlined, EyeOutlined } from '@ant-design/icons';

interface Order {
  key: string;
  orderId: string;
  subject: string;
  deadline: string;
  wordsCount: number;
  status: 'pending' | 'in progress' | 'completed';
}

type DataIndex = keyof Order;

const sampleOrders: Order[] = [
  {
    key: '1',
    orderId: 'ORD001',
    subject: 'Mathematics Assignment',
    deadline: '2025-04-20 14:00',
    wordsCount: 1000,
    status: 'pending',
  },
  {
    key: '2',
    orderId: 'ORD002',
    subject: 'History Essay',
    deadline: '2025-04-21 16:30',
    wordsCount: 1500,
    status: 'in progress',
  },
  {
    key: '3',
    orderId: 'ORD003',
    subject: 'Marketing Plan',
    deadline: '2025-04-18 11:00',
    wordsCount: 2000,
    status: 'completed',
  },
];

const OrderTable: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

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

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<Order> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]?.toString()}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
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
    filterIcon: (filtered) => (
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
        <span style={{ backgroundColor: '#ffd', fontWeight: 500 }}>{text}</span>
      ) : (
        text
      ),
  });

  const columns: ColumnType<Order>[] = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
      ...getColumnSearchProps('orderId'),
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      ...getColumnSearchProps('subject'),
    },
    {
      title: 'Deadline (IST)',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
      title: 'Words Count',
      dataIndex: 'wordsCount',
      key: 'wordsCount',
    },
    {
      title: 'Order Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color =
          status === 'pending'
            ? 'orange'
            : status === 'in progress'
            ? 'blue'
            : 'green';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          onClick={() => console.log('Viewing Order:', record)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Orders List</h2>
      <Table columns={columns} dataSource={sampleOrders} bordered />
    </div>
  );
};

export default OrderTable;
