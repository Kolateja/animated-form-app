// import React, { useState, useEffect } from 'react';
// import { Table, Input, Button, Space, Tag, Popconfirm, message, Card } from 'antd';
// import { EditOutlined, EyeOutlined } from '@ant-design/icons';
// import ApiService from '../services/ApiService';
// import { Link } from 'react-router-dom';

// interface User {
//     id: string;
//     username: string;
//     email: string;
//     phone: string;
//     role: string;
//     accessStatus: string;
//     userId: string;
// }

// const WritersTable: React.FC = () => {
//     const [data, setData] = useState<User[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [updating, setUpdating] = useState(false);

//     useEffect(() => {
//         const loggedInRole = localStorage.getItem('role');
//         if (loggedInRole === 'super admin') {
//             setData([]);
//         } else if (loggedInRole === 'admin') {
//             setData([]); // only student for admin
//         }
//     }, []);

//     // Moved fetchUsers outside so it's accessible elsewhere
//     const fetchUsers = async () => {
//         setLoading(true);
//         try {
//             const response: any = await ApiService.get('/users/all');
//             if (response.success) {
//                 const users = response.data.filter((user: User) => user.role === 'writer');
//                 setData(users);
//             }
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const handleDelete = async (id: string) => {
//         try {
//             setUpdating(true);
//             await ApiService.delete(`/users/delete/${id}`);
//             message.success('User deleted successfully');
//             await fetchUsers(); // Refresh list after delete
//         } catch (err) {
//             console.error(err);
//             message.error('Delete failed');
//         } finally {
//             setUpdating(false);
//         }
//     };

//     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchText(e.target.value);
//     };

//     const filteredData = data.filter((item) => {
//         const searchValue = searchText.toLowerCase();
//         return (
//             item.userId.toLowerCase().includes(searchValue) ||
//             item.username.toLowerCase().includes(searchValue) ||
//             item.email.toLowerCase().includes(searchValue) ||
//             item.phone.toLowerCase().includes(searchValue) ||
//             item.role.toLowerCase().includes(searchValue)
//         );
//     });

//     const columns = [
//         {
//             title: 'UserId',
//             dataIndex: 'userId',
//             key: 'userId',
//         },
//         {
//             title: 'Username',
//             dataIndex: 'username',
//             key: 'username',
//         },
//         {
//             title: 'Email',
//             dataIndex: 'email',
//             key: 'email',
//         },
//         {
//             title: 'Phone',
//             dataIndex: 'phone',
//             key: 'phone',
//         },
//         {
//             title: 'Role',
//             dataIndex: 'role',
//             key: 'role',
//             render: (role: string) => (
//                 <Tag color="green">{role?.toUpperCase()}</Tag>
//             ),
//         },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (_: any, record: User) => (
//                 <Space size="middle">
//                     <Link to={`/writerDetails/${record.id}/${record.userId}`}>
//                         <Button icon={<EyeOutlined />} type="link">View</Button>
//                     </Link>
//                     <Link to={`/writerEditDetails/${record.id}/${record.userId}`}>
//                         <Button icon={<EditOutlined />} type="link">Edit</Button>
//                     </Link>
//                     <Popconfirm
//                         title="Are you sure you want to delete this user?"
//                         onConfirm={() => handleDelete(record.id)}
//                         okText="Yes"
//                         cancelText="No"
//                     >
//                         <Button type="link" danger>Delete</Button>
//                     </Popconfirm>
//                 </Space>
//             ),
//         }
//     ];

//     return (
//          <>

//             <Card
//                 title={<span style={{ color: '#eb987d', display: 'flex', justifyContent: 'center' }} >Writers Table</span>}

//                 style={{ width: 900, margin: '0 auto' }}
//             >
//                 <Space >
//                     <Input.Search
//                         placeholder="Search Writers Details..."
//                         allowClear
//                         value={searchText}
//                         onChange={handleSearch}
//                         onSearch={(value: any) => { setSearchText(value) }}
//                         style={{ width: 200, float: "right", height: 40 }}
//                         size='large'
//                     />
//                 </Space>
//                 <Table
//                     columns={columns}
//                     dataSource={filteredData}
//                     bordered
//                     rowKey="id"
//                     size='small'
//                     className="table-wrapper"
//                     loading={loading || updating}
//                     pagination={{ pageSize: 10 }}

//                 // scroll={{ x: 1500, y: 500 }}
//                 />
//             </Card>
//         </>
//     );
// };

// export default WritersTable;
import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Tag, Popconfirm, message, Card } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
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

const WritersTable: React.FC = () => {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [updating, setUpdating] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null); // <-- Store user role

    useEffect(() => {
        const loggedInRole = localStorage.getItem('role');
        setUserRole(loggedInRole);
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response: any = await ApiService.get('/users/all');
            if (response.success) {
                const users = response.data.filter((user: User) => user.role === 'writer');
                setData(users);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            setUpdating(true);
            await ApiService.delete(`/users/delete/${id}`);
            message.success('User deleted successfully');
            await fetchUsers();
        } catch (err) {
            console.error(err);
            message.error('Delete failed');
        } finally {
            setUpdating(false);
        }
    };

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

    const baseColumns = [
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
        }
    ];

    const actionColumn = {
        title: 'Action',
        key: 'action',
        render: (_: any, record: User) => (
            <Space size="middle">
                <Link to={`/writerDetails/${record.id}/${record.userId}`}>
                    <Button icon={<EyeOutlined />} type="link">View</Button>
                </Link>
                <Link to={`/writerEditDetails/${record.id}/${record.userId}`}>
                    <Button icon={<EditOutlined />} type="link">Edit</Button>
                </Link>
                <Popconfirm
                    title="Are you sure you want to delete this user?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="link" danger>Delete</Button>
                </Popconfirm>
            </Space>
        ),
    };

    const columns = userRole === 'super admin'
        ? [...baseColumns, actionColumn]
        : baseColumns;

    return (
        <Card
            title={<span style={{ color: '#eb987d', display: 'flex', justifyContent: 'center' }}>Writers Table</span>}
            style={{ width: 900, margin: '0 auto' }}
        >
            <Space>
                <Input.Search
                    placeholder="Search Writers Details..."
                    allowClear
                    value={searchText}
                    onChange={handleSearch}
                    onSearch={(value: any) => { setSearchText(value) }}
                    style={{ width: 200, float: "right", height: 40 }}
                    size='large'
                />
            </Space>
            <Table
                columns={columns}
                dataSource={filteredData}
                bordered
                rowKey="id"
                size='small'
                className="table-wrapper"
                loading={loading || updating}
                pagination={{ pageSize: 10 }}
            />
        </Card>
    );
};

export default WritersTable;
