import React, { useState } from 'react';
import { Tabs, Card } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import './SubjectsTab.css';

const { TabPane } = Tabs;

type SubjectCategory = {
    title: string;
    subjects: string[][];
};

type SubjectData = {
    [key: string]: SubjectCategory;
};

const data: SubjectData = {
    STEM: {
        title: 'Science, Technology, Engineering, and Mathematics',
        subjects: [
            [
                'Aerospace Engineering', 'Agriculture', 'Biology', 'Environmental Science',
                'Physics', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering',
                'Electrical Engineering', 'Electronics & Communication Engineering',
            ],
            ['Computer Science', 'Cybersecurity', 'Data Science', 'Web Development', 'Software Engineering'],
        ],
    },
    BusinessManagement: {
        title: 'Business and Management',
        subjects: [
            [
                'Accounting', 'Business Administration', 'Finance', 'Hospitality Management',
                'Human Resources Management', 'Management', 'Marketing', 'Public Relations',
                'Sports Management', 'Logistics & Supply Chain Management', 'Project management',
            ],
            [],
        ],
    },
    SocialSciences: {
        title: 'Social Sciences and Humanities',
        subjects: [
            [
                'Anthropology', 'Art', 'Creative Writing', 'Economics', 'Education',
                'Film Studies', 'History', 'International Relations', 'Journalism', 'Linguistics', 'Music',
            ],
            [
                'Philosophy', 'Political Science', 'Psychology', 'Religious Studies',
                'Social Work', 'Sociology', 'Urban Planning', 'Tourism', 'Veterinary Medicine',
            ],
        ],
    },
    HealthSciences: {
        title: 'Health Sciences',
        subjects: [
            ['Dentistry', 'Medicine', 'Nursing', 'Nutrition', 'Pharmacy', 'Public health'],
            [],
        ],
    },
    CommunicationsMedia: {
        title: 'Communications and Media',
        subjects: [
            ['Communications', 'Graphic Design', 'Digital Media', 'Event Management'],
            [],
        ],
    },
};

const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
    }),
};

const SubjectsTab = () => {
    const [activeKey, setActiveKey] = useState('STEM');
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

    const handleSubjectClick = (subject: string) => {
        setSelectedSubject(subject);
    };

    return (
        <div className="subjects-tab-container">
            <Tabs
                activeKey={activeKey}
                onChange={(key) => {
                    setActiveKey(key);
                    setSelectedSubject(null);
                }}
                tabPosition="left"
                style={{ minHeight: '400px' }}
            >
                {Object.entries(data).map(([key, value]) => (
                    <TabPane
                        tab={<span className="tab-title">{value.title}</span>}
                        key={key}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="tab-content">
                                    <div className="subject-grid">
                                        {value.subjects.map((list, i) =>
                                            list.length > 0 ? (
                                                <motion.div
                                                    key={i}
                                                    custom={i}
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                >
                                                    <Card className={`category-card ${key}`}>
                                                        <ul className="subject-list">
                                                            {list.map((item, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="subject-item"
                                                                    onClick={() => handleSubjectClick(item)}
                                                                >
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </Card>
                                                </motion.div>
                                            ) : null
                                        )}
                                    </div>

                                    {/* {selectedSubject && (
                                        <motion.div
                                            className="selected-subject-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Card className="selected-subject-display">
                                                <h3>{selectedSubject}</h3>
                                                <p>
                                                    Explore everything about <strong>{selectedSubject}</strong>. From assignments to project help,
                                                    we’ve got you covered!
                                                </p>
                                            </Card>
                                        </motion.div>
                                    )} */}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
};

export default SubjectsTab;