import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { menuOptions } from '../pages/menuOptions';
import { LogoutOutlined } from '@ant-design/icons';

type MenuItem = {
    name: string;
    icon: React.ReactNode;
    route: string;
};

type MenuOptions = {
    'super admin': MenuItem[];
    admin: MenuItem[];
    student: MenuItem[];
};

interface SidebarProps {
    role: 'super admin' | 'admin' | 'student';
    handleLogoutFlag: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, handleLogoutFlag }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedOption, setSelectedOption] = useState('DashBoard');

    // Dynamically get menu items based on role
    const menuOptionsTyped: MenuOptions = menuOptions;
    const items: MenuItem[] = menuOptionsTyped[role?.toLowerCase() as keyof MenuOptions] || [];

    const handleLogout = () => {
        localStorage.clear();
        handleLogoutFlag();
        navigate('/auth/login-signup');
    };

    const handleClick = (item: MenuItem) => {
        navigate(item.route);
        setSelectedOption(item.name);
    };

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '250px', height: '100vh', backgroundColor: '#f8f9fa', zIndex: 1000 }}>

                <div>
                    <Link to="/" className="logo">
                        <img
                            src="/assets/img/assignment-linkers-logo.png"
                            alt="assignment-linkers-logo"
                            className="img-fluid"
                            width={120}
                        />
                    </Link>
                    <div className="px-4 py-6 space-y-4" style={{ paddingLeft: "5px" }}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center h-14 space-x-3 text-white hover:bg-neutral-700 hover:text-white hover:rounded-[8px] ${item.name === selectedOption ? 'bg-neutral-700 rounded-[8px]' : ''}`}
                                onClick={() => handleClick(item)}
                                style={{ marginTop: "20px", marginBottom: "20px", color: "#3d8fb0", fontWeight: "bold" }}
                            >
                                <span style={{ color: "#3d8fb0", marginRight: "8px", fontWeight: "bold", fontSize: "20px" }} className="ml-4 mr-4 flex items-center justify-center text-2xl leading-none">
                                    {item.icon}
                                </span>
                                {!collapsed && item.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="px-4 py-6">
                    <button
                        className="w-full h-full p-4 flex items-center space-x-3 bg-red-600 text-white hover:cursor-pointer rounded-[10px]"
                        onClick={handleLogout}
                        style={{ backgroundColor: "#ba0404", padding: "5px 10px", border: "none", borderRadius: "5px", color: "#ffffff", fontWeight: "600", fontSize: "15px" }}
                    >
                        <span style={{ marginRight: "5px", fontWeight: "bold", fontSize: "15px" }} className="mr-3 text-2xl">
                            <LogoutOutlined />
                        </span>
                        {!collapsed && 'Logout'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
