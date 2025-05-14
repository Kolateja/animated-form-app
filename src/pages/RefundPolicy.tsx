import React from "react";
import { Typography, List, Divider } from "antd";
const { Title, Paragraph } = Typography;

const policyItems = [
  {
    title: "Refundable",
    items: [
      {
        title:
          "In case of unavailability of the Writer or Busy with the scheduled writing",
        description:
          "We assign your work to the most appropriate writer; however, if not found or busy, we will refund or exchange for equal value.",
      },
      {
        title: "In case of Disatisfactory Result full Refund (factual proof)",
        description:
          "If assignment fails with factual proof, we will refund 100% and take action against the writer.",
      },
      {
        title: "In case of Double charging",
        description:
          "Duplicate payments will be refunded to your wallet upon proof submission.",
      },
      {
        title: "Non Satisfactory Refund",
        description:
          "If you are dissatisfied even after revisions, a quality review will be done and refund decided based on it.",
      },
      {
        title: "Cancellation before assignment of a Writer",
        description:
          "Full refund is given if no writer has been assigned and work hasn’t started.",
      },
      {
        title: "Issue Refund",
        description:
          "If extra work is added post-confirmation, a 50% refund will be issued.",
      },
      {
        title: "Change of mind Refundable",
      },
      {
        title: "Deadline Not Met",
        description:
          "In rare deadline failures, a discount or partial/full refund is issued after review.",
      },
    ],
  },
  {
    title: "Non Refundable",
    items: [
      {
        title:
          "In case of Dissatisfactory Results Compensation (factual proof)",
        description:
          "Instead of refund, we compensate with future discounts: One Free assignment, 50%-20% off for next 2-5 assignments.",
      },
      {
        title: "Missing Deadline due to client’s delayed inputs",
        description:
          "No refund if delay is due to client’s late document submissions.",
      },
      {
        title: "Cancellation after assignment of a Writer",
        description: "No refund once a writer has started the assignment.",
      },
      {
        title: "If plagiarism is found we will rewrite it",
        description:
          "Free rewrite is offered; no refund for plagiarism complaints.",
      },
      {
        title: "Shift to another assignment",
        description:
          "You may shift your order before writer assignment; if assigned, this is not allowed.",
      },
      {
        title: "Rewrite for Satisfactory",
        description:
          "Reworks offered within 31 days. No refunds after or if satisfaction is achieved through revisions.",
      },
      {
        title: "No Refund after 31 days from the Delivery date",
      },
      {
        title: "Close deadline non Refundable",
        description:
          "No refund for assignments due in 48 hours or dissertations due in 10 days or less.",
      },
      {
        title: "Short steep deadline",
        description:
          "No guaranteed refund for steep deadlines like 72hrs for <2000 words, 96hrs for 2k-6k, 120hrs for 6k-10k.",
      },
      {
        title: "Partial payment No Refund",
      },
    ],
  },
];

const RefundPolicy: React.FC = () => {
  return (
    <div
      style={{
        background: "#1e6891",
        // padding: "2rem",
        color: "#fff",
        width: "100%",
      }}
    >
      {/* <Header /> */}

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title
          level={2}
          style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: "2.5rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "0.5rem",
          }}
        >
          Refund Policy
        </Title>
        <div
          style={{
            width: "100px",
            height: "4px",
            background: "#fff",
            margin: "0 auto",
            borderRadius: "2px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "-4px",
              left: "calc(50% - 6px)",
            }}
          />
        </div>
      </div>

      <Paragraph style={{ fontSize: 16, color: "#fff" }}>
        Dear client, we work to deliver the best quality to our clients. We
        believe in truthfulness, transparency, and honesty, leading us to craft
        a fully transparent refund policy.
      </Paragraph>
      <Paragraph style={{ fontSize: 16, color: "#fff" }}>
        When you place an order, it's assumed you've read and agreed to all
        policies on our website and in the invoice email.
      </Paragraph>

      {policyItems.map((section, index) => (
        <div key={index}>
          <Divider
            orientation="left"
            style={{ color: "#fff", borderColor: "#fff" }}
          >
            {section.title}
          </Divider>
          <List
            dataSource={section.items}
            renderItem={(item, idx) => (
              <List.Item style={{ color: "#fff" }}>
                <List.Item.Meta
                  title={
                    <span style={{ color: "#fff" }}>&#10004; {item.title}</span>
                  }
                  description={
                    item.description ? (
                      <span style={{ color: "#ccc" }}>{item.description}</span>
                    ) : null
                  }
                />
              </List.Item>
            )}
          />
        </div>
      ))}
      {/* <Footer /> */}
    </div>
  );
};

export default RefundPolicy;
