
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './pages/sidebar';
import BodyLayout from './pages/bodyLayout';
import Header from './pages/Header';
import Footer from './pages/FooterSection';

type RoleType = 'super admin' | 'admin' | 'student';

const App = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<RoleType | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar visible by default on desktop

  useEffect(() => {
    const storedRole = localStorage.getItem('role') as RoleType;
    if (storedRole === 'super admin' || storedRole === 'admin' || storedRole === 'student') {
      setRole(storedRole);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginFlag = (userRole: RoleType | null) => {
    if (userRole) {
      setRole(userRole);
      setIsLoggedIn(true);
      navigate(`/${userRole.replace(' ', '')}DashBoard`);
    } else {
      setRole(null);
      setIsLoggedIn(false);
      navigate('/home');
    }
  };

  const handleLogoutFlag = () => {
    localStorage.clear();
    setRole(null);
    setIsLoggedIn(false);
    navigate('/home');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className="layout-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        // width: '100%',
        // maxWidth: '1440px',
        // minHeight: '100vh',
        // minHeight:"0px !important",
        justifyContent: 'center', backgroundColor: '#f9f9f9'
      }}
    >
      {!isLoggedIn && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '80px',
            zIndex: 999,
            backgroundColor: '#fff'
          }}
        >
          <Header />
        </div>
      )}


      <div className="layout-main flex">
        {isLoggedIn && role && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '250px',
              height: '100vh',
              backgroundColor: '#f8f9fa',
              zIndex: 1000
            }}
          >
            <Sidebar role={role} handleLogoutFlag={handleLogoutFlag} />
          </div>
        )}

        <div
          className="main-content"
          style={{
            marginLeft: isLoggedIn && role ? '250px' : '0',
            // padding: '20px',
            // paddingTop: !isLoggedIn ? '80px' : '20px', // offset if header is fixed
            // width: '100vw'
          }}
        >
          <BodyLayout />
          {!isLoggedIn && <Footer />}
        </div>
      </div>
    </div>
  );

};

export default App;
