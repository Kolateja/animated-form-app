import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import Services from "./Services";
import "./Header.css";

const OthersMenu = (
  <Menu>
    <Menu.Item key="refundpolicy">
      <Link to="/refundpolicy">Refund Policies</Link>
    </Menu.Item>
    <Menu.Item key="blog">
      <Link to="/blog">Blog</Link>
    </Menu.Item>
    <Menu.Item key="career">
      <Link to="/career">Career</Link>
    </Menu.Item>
    <Menu.Item key="samples">
      <Link to="/samples">Samples</Link>
    </Menu.Item>
    <Menu.Item key="membership">
      <Link to="/membership">Membership</Link>
    </Menu.Item>
  </Menu>
);

const groupedServices = [
  {
    title: "Writing",
    items: [
      "Assignment Help",
      "Academic Writing",
      "Homework Help",
      "Research Paper Writing Help",
      "Case Study Help",
      "Coursework Help",
      "Thesis Help",
      "Narrative Writing",
    ],
  },
  {
    title: "Problem Solving",
    items: [
      "Dissertation Help",
      "Statistical Analysis",
      "Proposal Writing Service",
      "Manuscript Writing Service",
      "Editing and Proofreading Service",
      "Essay Writing Service",
      "Practical Assignments Help",
      "Capstone Projects",
    ],
  },
  {
    title: "More Services",
    items: [
      "CDR Reports",
      "Write My Paper",
      "Lab Report",
      "Video Solutions",
      "Speech Writing",
      "Project Report Writing",
      "Take My Online Exam",
      "PowerPoint Presentation Service",
    ],
  },
];

const ServicesMenu = (
  <div className="services-dropdown-menu">
    {groupedServices.map((group) => (
      <div key={group.title} className="services-column">
        <strong className="services-title">{group.title}</strong>
        <ul className="services-list">
          {group.items.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="services-link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="header-transparent-header">
      <div
        style={{
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" className="logo">
          <img
            src="/assets/img/assignment-linkers-logo.png"
            alt="assignment-linkers-logo"
            className="img-fluid"
            width={120}
          />
        </Link>

        <Menu
          mode="horizontal"
          selectable={false}
          className="menu-bar"
          style={{
            flex: 1,
            justifyContent: "flex-end",
            background: "transparent",
          }}
        >
          <Menu.Item key="home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About Us</Link>
          </Menu.Item>
          {/* <Menu.Item key="services"><Link to="/services">Services</Link></Menu.Item> */}
          <Menu.Item key="services">
            <Dropdown overlay={ServicesMenu} trigger={["hover"]}>
              <a onClick={(e) => e.preventDefault()}>
                Services <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
          {/* <Menu.Item key="subjects">
            <Link to="/subjects">Subjects</Link>
          </Menu.Item> */}
          <Menu.Item key="contactus">
            <Link to="/contactus">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="offers">
            <Link to="/offers">Offers</Link>
          </Menu.Item>
          <Menu.Item key="reviews">
            <Link to="/reviews">Reviews</Link>
          </Menu.Item>
          {/* <Menu.Item key="faq"><Link to="/faq">FAQ</Link></Menu.Item> */}
          <Menu.Item key="login">
            <Link to="/auth/login-signup">Login/Signup</Link>
          </Menu.Item>
          <Menu.Item key="others">
            <Dropdown overlay={OthersMenu}>
              <a onClick={(e) => e.preventDefault()}>
                Others <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="order">
            <Link to="/auth/login-signup">
              <Button type="primary">Order now</Button>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
