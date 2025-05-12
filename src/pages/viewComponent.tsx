// src/pages/ViewComponent.tsx

import React, { useEffect, useState } from 'react';
import { Card, Spin, message } from 'antd';
import { useParams } from 'react-router-dom'; // <-- Import useParams
import ApiService from '../services/ApiService';

interface UserDetails {
    role: string;
    accessStatus: string | null;
    username: string;
    email: string;
    phone: string;
    userId: string;
    id: string
}


const ViewComponent: React.FC = () => {
    const { userId } = useParams<{ userId: string }>(); // <-- Capture 'userId' from URL
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userId) {
            fetchUserDetails(userId); // <-- Fetch user details based on 'userId' from URL
        }
    }, [userId]);

    const fetchUserDetails = async (userId: string) => {
        setLoading(true);
        try {
            const response: any = await ApiService.get(`/users/user/${userId}`);
            console.log('User Details response:', response);

            if (response.success) {
                setUserDetails(response.data);
            } else {
                message.error(response.message || 'Failed to fetch user details.');
            }
        } catch (error: unknown) {
            console.error('Fetch error:', error);
            message.error('An error occurred while fetching user details.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div style={{ padding: '24px' }}>
                {/* <h2>User Details</h2> */}
                {loading ? (
                    <Spin size="small" />
                ) : (
                    userDetails && (
                        <Card title={userDetails.username} bordered={false}>
                            <p><strong>Role:</strong> {userDetails.role}</p>
                            <p><strong>Email:</strong> {userDetails.email}</p>
                            <p><strong>Phone:</strong> {userDetails.phone}</p>
                            <p><strong>User ID:</strong> {userDetails.userId}</p>
                            <p><strong>Access Status:</strong> {userDetails.accessStatus ?? 'N/A'}</p>
                        </Card>
                    )
                )}
            </div>

        </>
    );
};

export default ViewComponent;

