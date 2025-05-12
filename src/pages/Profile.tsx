import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, message } from 'antd';
import ApiService from '../services/ApiService';

interface Birthday {
    userId: string;
    username: string;
    role: string;
    userEmail: string;
}

const ProfileUser: React.FC = () => {
    const [user, setUser] = useState<Birthday | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res: any = await ApiService.get('/auth/profile');
                if (res.success) {
                    setUser(res.data); // single object, not array
                } else {
                    message.error(res.message || 'Failed to fetch profile');
                }
            } catch (err) {
                console.error(err);
                message.error('Error fetching profile');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <Spin />;

    if (!user) return <Card>No user profile found</Card>;

    return (
        <Card
            title="👤 Your Profile"
            style={{
                width: 400,
                margin: '0 auto',
                borderRadius: 12,
                background: '#f0f5ff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
            hoverable
        >
            <Card.Meta
                avatar={
                    <Avatar style={{ backgroundColor: '#1890ff' }} size="large">
                        {user.username.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={<span style={{ fontWeight: 600 }}>{user.username}</span>}
                description={
                    <>
                        <div><strong>Role:</strong> {user.role}</div>
                        <div><strong>Email:</strong> {user.userEmail}</div>
                        <div><strong>User ID:</strong> {user.userId}</div>
                    </>
                }
            />
        </Card>
    );
};

export default ProfileUser;
