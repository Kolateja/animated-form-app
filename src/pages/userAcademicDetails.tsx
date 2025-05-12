// src/pages/ViewComponent.tsx

import React, { useEffect, useState } from 'react';
import { Card, Spin, message } from 'antd';
import { useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';

interface AcademicDetails {
    course: string;
    semester: string;
    university: string;
    stateProvinceOfOrigin: string;
    countryOfOrigin: string;
    currentCountryOfStudy: string;
    currentStateProvinceOfStudy: string;
    userId: string;
    id: string;
}

const AcademicDetailsComponent: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [academicDetails, setAcademicDetails] = useState<AcademicDetails | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchUserAcademicDetails = async (userId: string) => {
        setLoading(true);
        try {
            const response: any = await ApiService.get(`academic-details/${userId}`);
            console.log('User Details response:', response);

            if (response.success) {
                setAcademicDetails(response.data);
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

    useEffect(() => {
        if (userId) {
            fetchUserAcademicDetails(userId);
        }
    }, [userId]);

    return (
        <div style={{ padding: '24px' }}>
            {/* <h2>Academic Details</h2> */}
            {loading ? (
                <Spin size="large" />
            ) : (
                academicDetails && (
                    <Card title={`User ID: ${academicDetails.userId}`} bordered={false}>
                        <p><strong>Course:</strong> {academicDetails.course}</p>
                        <p><strong>Semester:</strong> {academicDetails.semester}</p>
                        <p><strong>University:</strong> {academicDetails.university}</p>
                        <p><strong>State/Province of Origin:</strong> {academicDetails.stateProvinceOfOrigin}</p>
                        <p><strong>Country of Origin:</strong> {academicDetails.countryOfOrigin}</p>
                        <p><strong>Current Country of Study:</strong> {academicDetails.currentCountryOfStudy}</p>
                        <p><strong>Current State/Province of Study:</strong> {academicDetails.currentStateProvinceOfStudy}</p>
                    </Card>
                )
            )}
        </div>
    );
};

export default AcademicDetailsComponent;
