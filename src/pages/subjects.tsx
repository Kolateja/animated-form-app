import React, { useState } from 'react';
import { Tabs, Card } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
// import './SubjectsTab.css';
import '../assets/css/subjects.css'; // Make sure this path is correct

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
        <section id="main" style={{

            width: '100vw' // or '1500px' if you want fixed width
            // make it fill the wrapper
        }}>
            <div id="subjects" >
                <div className="container" >
                    <div className="row" >
                        <div className="subjects-category" >
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
                                                <div className="tab-content" >
                                                    <div className="subjects-list-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                                        {value.subjects.map((list, i) =>
                                                            list.length > 0 ? (
                                                                <motion.div
                                                                    key={i}
                                                                    custom={i}
                                                                    variants={listVariants}
                                                                    initial="hidden"
                                                                    animate="visible"
                                                                    className="subjects-list-row-column"
                                                                    style={{ flex: '1 1 calc(33.33% - 16px)', minWidth: '280px' }} // 3 cards per row
                                                                >

                                                                    <Card className="list-group">
                                                                        <h4>{value.title}</h4>
                                                                        <ul className="list-group" >
                                                                            {list.map((item, idx) => (
                                                                                <li
                                                                                    key={idx}
                                                                                    className={`list-group-item ${selectedSubject === item ? 'active' : ''}`}
                                                                                    style={{ width: "200px" }}

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
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </TabPane>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubjectsTab;
