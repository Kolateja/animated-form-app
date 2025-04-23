// src/pages/ErrorPage.tsx
import React from "react";
import { Layout, Typography } from "antd";
import Header from "./Header";
import Footer from "./FooterSection";


const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface ErrorPageProps {
    error?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header />

            <Content style={{ padding: "2rem", background: "#fff" }}>
                <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                    <Title>Error</Title>
                    <Paragraph>Sorry, something went wrong on the server:</Paragraph>
                    <pre
                        style={{
                            textAlign: "left",
                            backgroundColor: "#f8f8f8",
                            padding: "1rem",
                            borderRadius: "5px",
                            overflowX: "auto",
                        }}
                    >
                        {error || "No error message provided"}
                    </pre>
                </div>
            </Content>

            <Footer />
        </Layout>
    );
};

export default ErrorPage;
