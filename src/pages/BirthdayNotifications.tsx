// src/components/BirthdayNotifications.tsx
import React, { useEffect, useState } from 'react';
import { Card, List, Avatar, Spin, message } from 'antd';
import ApiService from '../services/ApiService';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
interface Birthday {
    userId: number;
    name: string;
    email: string;
    phone: string;
    university: string;
    semester: string;
    course: string;
    dateOfBirth: string;
}

const BirthdayNotifications: React.FC = () => {
    const [birthdays, setBirthdays] = useState<Birthday[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res: any = await ApiService.get('/notifications/birthdays');
                if (res.success) {
                    setBirthdays(res.data);
                } else {
                    message.error(res.message || 'Failed to fetch birthdays');
                }
            } catch (err) {
                console.error(err);
                message.error('Error fetching birthdays');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return <Spin />;
    }

    if (birthdays.length === 0) {
        return <Card>🎉 No birthdays today</Card>;
    }

    return (
        <Card title="🎂 Students Celebrating Birthday Today">
            <List
                itemLayout="horizontal"
                dataSource={birthdays}
                renderItem={b => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar icon="user" />}
                            title={<span style={{ fontWeight: 600 }}>{b.name}</span>}
                            description={`${b.course} (Semester ${b.semester}) at ${b.university}`}
                        />
                        <div>
                            <div>
                                <MailOutlined style={{ marginRight: 8 }} />
                                <a href={`mailto:${b.email}`}>{b.email}</a>
                            </div>
                            <div>
                                <PhoneOutlined style={{ marginRight: 8 }} />
                                <a href={`tel:${b.phone}`}>{b.phone}</a>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default BirthdayNotifications;
