import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import AcademicDetailsForm from './pages/AcademicDetailsForm';
import OrderAssignmentForm from './pages/OrderAssignmentForm';
import RaiseTicketForm from './pages/RaiseTicketForm';
import ChangePasswordForm from './pages/ChangePasswordForm';
import AddUser from './pages/User';
import BlogForm from './pages/BlogForm';
import CreateSampleForm from './pages/sample-form';
import UserTable from './pages/UserTable';
import OrderTable from './pages/OrderTable';
import SubjectsTab from './pages/subjects';
import AuthPage from './pages/AuthPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import CareerPage from './pages/CareerPage'
import Services from './pages/Services';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactForm from './pages/ContactForm';
import FairUsePolicy from './pages/FairUsePolicy';
import FaqPage from './pages/FaqPage';
import ForgotPassword from './pages/ForgotPassword';
import WhyChooseUs from './pages/WhyChooseUs';
import MembershipSection from './pages/MembershipSection';
import OffersPage from './pages/OffersPage';
import RefundPolicy from './pages/RefundPolicy';
import Samples from './pages/Samples';
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/login-signup" element={<AuthPage />} />
          <Route path="/academicdetails" element={<AcademicDetailsForm />} />
          <Route path="/orderassignment" element={<OrderAssignmentForm />} />
          <Route path="/raiseticket" element={<RaiseTicketForm />} />
          <Route path="/changepassword" element={<ChangePasswordForm />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/createblog" element={<BlogForm />} />
          <Route path="/sample" element={<CreateSampleForm />} />
          <Route path="/userslist" element={<UserTable />} />
          <Route path="/orderslist" element={<OrderTable />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/subjects" element={<SubjectsTab />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/membership" element={<MembershipSection />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/fair-use-policy" element={<FairUsePolicy />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/samples" element={<Samples samplesList={[]} />} />
          <Route path="/blog" element={<BlogPage blogList={[]} />} />
          {/* <Route path="/blogDetails" element={<BlogDetailsPage getBlogDetails={} />} /> */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
