import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import About from '../pages/About';
import AuthPage from '../pages/AuthPage';
import AcademicDetailsForm from '../pages/AcademicDetailsForm';
import OrderAssignmentForm from '../pages/OrderAssignmentForm';
import RaiseTicketForm from '../pages/RaiseTicketForm';
import ChangePasswordForm from '../pages/ChangePasswordForm';
import AddUser from '../pages/User';
import BlogForm from '../pages/BlogForm';
import CreateSampleForm from '../pages/sample-form';
import UserTable from '../pages/UserTable';
import OrderTable from '../pages/OrderTable';
import SubjectsTab from '../pages/subjects';
import BlogPage from '../pages/BlogPage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import CareerPage from '../pages/CareerPage';
import Services from '../pages/Services';
import TermsAndConditions from '../pages/TermsAndConditions';
import ContactForm from '../pages/ContactForm';
import FairUsePolicy from '../pages/FairUsePolicy';
import FaqPage from '../pages/FaqPage';
import ForgotPassword from '../pages/ForgotPassword';
import WhyChooseUs from '../pages/WhyChooseUs';
import MembershipSection from '../pages/MembershipSection';
import OffersPage from '../pages/OffersPage';
import RefundPolicy from '../pages/RefundPolicy';
import Samples from '../pages/Samples';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CopyrightPolicy from '../pages/CopyrightPolicy';
import SatisifactionPolicies from '../pages/SatisifactionPolicies';
import ValuesForMoney from '../pages/ValuesForMoney';
import Header from '../pages/Header';
import Footer from '../pages/FooterSection';
import SuperAdminDashboard from './superAdminDashBoard';
import AdminDashboard from './adminDashBoard';
import UserDashboard from './userDashBoard';
import ViewComponent from './viewComponent';
import AdminsTable from './adminsTble';
import ResumeTable from './ResumeTable';
import FeedbackTable from './FeedbackTable';
import FeedbackForm from './FeedbackForm';
import OrderViewComponent from './orderViewDetails';
import CreateResume from './CreateResume';
import BlogTable from './blogTable';
import SampleTable from './SampleTable';
import BirthdayNotifications from './BirthdayNotifications';
import AcademicDetailsComponent from './userAcademicDetails';
import CombinedUserDetailsComponent from './CombinedUserDetailsComponent';
import CombinedOrderDetailsComponent from './combinedOrders';
import Sidebar from './sidebar';
import WritersTable from './writersTable';
import WriterDetails from './WriterDetails';
import WriterFeedbackForm from './WriterFeedBack';
import WriterDetailsPage from './WriterDetailsPage';
import EditWriterDetails from './EditWriterDetails';
import EditWriterFeedback from './EditWriterFeedback';
import WriterEditDetailsPage from './WriterDetailsEditPage';
import HomeReviews from './HomeReviews';
import Reviews from './Reviews';
import ConsultancyForm from './ConsultancyForm';
import Consultancy from './Consultanices';
import ResetPassword from './ResetPassword';
import AssessmentHelpPage from './AssessmentHelpPage';
import AcademicWriting from './AcademicWriting';
import CaseStudy from './caseStudy';
import CourseWork from './CourseWork';
import Dissertation from './dissertations';
import EasyWriting from './easyWriting';
import EditingWriting from './editingProfissional';
import HomeWork from './HomeWork';
import OnlineExam from './onlineExam';
import PowerPointWriting from './powerPoint';
import ProposalWriting from './proposalWork';
import ResearchPaper from './Research';
import Thesis from './ThesisWork';
import WriteMyPaper from './writeMyPaper';


// import './BodyLayout.css'; 

const BodyLayout: React.FC = () => {
    const handleLoginFlag = () => {
        console.log('Login flag handled!');
    };

    return (
        // <div className="layout-container" style={{ display: "flex", flexDirection: "column" ,width: "100%" }}>
            // <div className="layout-main" style={{ display: "flex" }}>
                
                <div className="layout-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/proposal-writing-service" element={<ProposalWriting />} />
                        <Route path="/assignment-help" element={<AssessmentHelpPage />} />
                        <Route path="/case-study-help" element={<CaseStudy />} />
                        <Route path="/research-paper-writing-help" element={<ResearchPaper />} />
                        <Route path="/powerpoint-presentation-service" element={<PowerPointWriting />} />
                        <Route path="/homework-help" element={<HomeWork />} />
                        <Route path="/take-my-online-exam" element={<OnlineExam />} />
                        <Route path="/thesis-help" element={<Thesis />} />
                        <Route path="/write-my-paper" element={<WriteMyPaper />} />
                        <Route path="/coursework-help" element={<CourseWork />} />
                        <Route path="/essay-writing-service" element={<EasyWriting />} />
                        <Route path="/editing-and-proofreading-service" element={<EditingWriting />} />
                        <Route path="/academic-writing" element={<AcademicWriting />} />
                        <Route path="/dissertation-help" element={<Dissertation />} />
                        <Route path="/auth/login-signup" element={<AuthPage handleLoginFlag={handleLoginFlag} />} />
                        <Route path="/academicdetails" element={<AcademicDetailsForm />} />
                        <Route path="/orderassignment" element={<OrderAssignmentForm />} />
                        <Route path="/raiseticket" element={<RaiseTicketForm />} />
                        <Route path="/changepassword" element={<ChangePasswordForm />} />
                        <Route path="/adduser" element={<AddUser />} />
                        <Route path="/createblog" element={<BlogForm />} />
                        <Route path="/sampleTable" element={<SampleTable />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/editblog/:id" element={<BlogForm />} />
                        <Route path="/blogTable" element={<BlogTable />} />
                        <Route path="/sample" element={<CreateSampleForm />} />
                        <Route path="/userslist" element={<UserTable />} />
                        <Route path="/orderslist" element={<OrderTable />} />
                        <Route path="/career" element={<CareerPage />} />
                        <Route path="/subjects" element={<SubjectsTab />} />
                        <Route path="/terms&conditions" element={<TermsAndConditions />} />
                        <Route path="/contactus" element={<ContactForm />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/whychooseus" element={<WhyChooseUs />} />
                        <Route path="/membership" element={<MembershipSection />} />
                        <Route path="/offers" element={<OffersPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/feedBack" element={<FeedbackTable />} />
                        <Route path="/reviews" element={<FeedbackForm />} />
                        <Route path="/ConsultancyForm" element={<ConsultancyForm />} />
                        <Route path="/Consultancy" element={<Consultancy />} />
                        <Route path="/homereview" element={<Reviews />} />
                        <Route path="/refundpolicy" element={<RefundPolicy />} />
                        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                        <Route path="/viewOrder/:orderId" element={<OrderViewComponent />} />
                        <Route path="/copyrightpolicy" element={<CopyrightPolicy />} />
                        <Route path="/satisfactionpolicy" element={<SatisifactionPolicies />} />
                        <Route path="/superAdminDashBoard" element={<SuperAdminDashboard />} />
                        <Route path="/adminDashBoard" element={<AdminDashboard />} />
                        <Route path="/userDashBoard" element={<UserDashboard />} />
                        <Route path="/valueformoney" element={<ValuesForMoney />} />
                        <Route path="/fairusepolicy" element={<FairUsePolicy />} />
                        <Route path="/forgotpassword" element={<ForgotPassword />} />
                        <Route path="/adminList" element={<AdminsTable />} />
                        <Route path="/createResume" element={<CreateResume />} />
                        <Route path="/resume" element={<ResumeTable />} />
                        <Route path="/samples" element={<Samples />} />
                        {/* <Route path="/WriterDetails" element={<WriterDetails />} /> */}
                        {/* <Route path="/WriterFeedbackForm" element={<WriterFeedbackForm />} /> */}
                        <Route path="/notifications" element={<BirthdayNotifications />} />
                        {/* <Route path="/blog" element={<BlogPage blogList={[]} />} /> */}
                        <Route path="/view/:id" element={<ViewComponent />} />
                        <Route path="/academicView/:userId" element={<AcademicDetailsComponent />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/WritersTable" element={<WritersTable />} />
                        <Route path="/blog/:id" element={<BlogDetailsPage />} />
                        <Route path="/add-writer-details/:userId" element={<WriterDetails />} />
                        <Route path="/add-writer-feedback/:userId" element={<WriterFeedbackForm />} />
                        <Route path="/edit-writer-details/:userId" element={<EditWriterDetails />} />
                        <Route path="/edit-writer-feedback/:userId" element={<EditWriterFeedback />} />
                        <Route path="/userDetails/:id/:userId" element={<CombinedUserDetailsComponent />} />

                        <Route path="/writerDetails/:id/:userId" element={<WriterDetailsPage />} />
                        <Route path="/writerEditDetails/:id/:userId" element={<WriterEditDetailsPage />} />
                        <Route path="/orderDetails/:userId/:orderId" element={<CombinedOrderDetailsComponent />} />
                    </Routes>
                </div>
            // </div>
        // </div>
    );
};

export default BodyLayout;
