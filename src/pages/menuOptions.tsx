import { HomeOutlined, BranchesOutlined, AppstoreAddOutlined, UsergroupAddOutlined, FileTextOutlined, FileAddOutlined, LogoutOutlined, TeamOutlined, FileDoneOutlined, UserSwitchOutlined, ReadOutlined, SolutionOutlined, FileSearchOutlined, CommentOutlined, UserAddOutlined, CrownOutlined } from '@ant-design/icons';

export const menuOptions = {
    'super admin': [
        { name: 'DashBoard', icon: <HomeOutlined />, route: '/superAdminDashBoard' },
        { name: 'Student List', icon: <TeamOutlined />, route: '/userslist' },
        { name: 'Orders List', icon: <FileDoneOutlined />, route: '/orderslist' },
        { name: 'Admin List', icon: <CrownOutlined />, route: '/adminList' },
        { name: 'Writer List', icon: <UserSwitchOutlined />, route: '/WritersTable' },
        { name: 'Tickets Raised', icon: <UserSwitchOutlined />, route: '/allTickets' },
        { name: 'Consultancy', icon: <SolutionOutlined />, route: '/ConsultancyForm' },
        { name: 'Resumes', icon: <FileTextOutlined />, route: '/resume' },
        { name: 'Feed Back', icon: <CommentOutlined />, route: '/feedBack' },
        { name: 'Add User', icon: <UserAddOutlined />, route: '/adduser' },
    ],
    'admin': [
        { name: 'DashBoard', icon: <HomeOutlined />, route: '/adminDashBoard' },
        { name: 'Student List', icon: <TeamOutlined />, route: '/userslist' },
        { name: 'Orders List', icon: <FileDoneOutlined />, route: '/orderslist' },
        { name: 'Writer List', icon: <UserSwitchOutlined />, route: '/WritersTable' },
        { name: 'Blog', icon: <ReadOutlined />, route: '/blogTable' },
        { name: 'Samples', icon: <FileSearchOutlined />, route: '/sampleTable' },
        { name: 'Resumes', icon: <FileTextOutlined />, route: '/resume' },
        { name: 'Feed Back', icon: <CommentOutlined />, route: '/feedBack' },
        { name: 'Add User', icon: <UserAddOutlined />, route: '/adduser' },
    ],
    'student': [
        { name: 'DashBoard', icon: <HomeOutlined />, route: '/userDashBoard' },
        { name: 'Academic Details', icon: <FileTextOutlined />, route: '/academicdetails' },
        { name: 'Order Assignment', icon: <AppstoreAddOutlined />, route: '/orderassignment' },
        { name: 'Raise a Ticket', icon: <FileAddOutlined />, route: '/raiseticket' },
        { name: 'Change Password', icon: <FileAddOutlined />, route: '/changepassword' },
    ]
};


export const formattedPaths = {
    'super admin': {
        '/superAdminDashBoard': { name: 'DashBoard', icon: <img src="./home.png" /> },
        '/userslist': { name: 'Student List', icon: <img src="./branch.png" /> },
        '/orderslist': { name: 'Orders List', icon: <img src="./asserts.png" /> },
        '/adminList': { name: 'Admin List', icon: <img src="./users.png" /> },
        '/WritersTable': { name: 'Writer List', icon: <img src="./clients.png" /> },
        '/allTickets': { name: 'Tickets Raised', icon: <img src="./clients.png" /> },
        '/ConsultancyForm': { name: 'Blog', icon: <img src="./asserts.png" /> },
        '/resume': { name: 'Resumes', icon: <img src="./vendors.png" /> },
        '/feedBack': { name: 'Feed Back', icon: <img src="./subdealers.png" /> },
        '/adduser': { name: 'Add User', icon: <img src="./products.png" /> },
        '/logout': { name: 'Logout', icon: <img src="./reports.png" /> },
    },
    admin: {
        '/adminDashBoard': { name: 'DashBoard', icon: <img src="./home.png" /> },
        '/userslist': { name: 'Student List', icon: <img src="./branch.png" /> },
        '/orderslist': { name: 'Orders List', icon: <img src="./asserts.png" /> },
        '/WritersTable': { name: 'Writer List', icon: <img src="./clients.png" /> },
        '/blogTable': { name: 'Blog', icon: <img src="./asserts.png" /> },
        '/sampleTable': { name: 'Blog', icon: <img src="./asserts.png" /> },
        '/resume': { name: 'Resumes', icon: <img src="./vendors.png" /> },
        '/feedBack': { name: 'Feed Back', icon: <img src="./subdealers.png" /> },
        '/adduser': { name: 'Add User', icon: <img src="./products.png" /> },
        '/logout': { name: 'Logout', icon: <img src="./reports.png" /> },
    },
    student: {
        '/userDashBoard': { name: 'DashBoard', icon: <img src="./home.png" /> },
        '/academicdetails': { name: 'Academic Details', icon: <img src="./products.png" /> },
        '/orderassignment': { name: 'Order Assignment', icon: <img src="./products.png" /> },
        '/raiseticket': { name: 'Raise a Ticket', icon: <img src="./request_raise.png" /> },
        '/changepassword': { name: 'Change Password', icon: <img src="./vouchers.png" /> },
        '/logout': { name: 'Logout', icon: <img src="./reports.png" /> },
    }
};

