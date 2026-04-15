import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function EmailTemplate({ firstName, lastName, email, message }: EmailTemplateProps) {
  const currentDate = new Date().toLocaleString();

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        lineHeight: "1.6",
        color: "#333333",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "3px solid #4F46E5",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#111827",
            margin: "0",
          }}
        >
          New Contact Form Submission
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#6B7280",
            margin: "5px 0 0 0",
          }}
        >
          Received on {currentDate}
        </p>
      </div>

      {/* Message Content */}
      <div
        style={{
          backgroundColor: "#F9FAFB",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            margin: "0 0 10px 0",
          }}
        >
          <strong style={{ color: "#4F46E5" }}>From:</strong> {firstName} {lastName}
        </p>
        <p
          style={{
            fontSize: "16px",
            margin: "0 0 10px 0",
          }}
        >
          <strong style={{ color: "#4F46E5" }}>Email:</strong>{" "}
          <a href={`mailto:${email}`} style={{ color: "#4F46E5", textDecoration: "none" }}>
            {email}
          </a>
        </p>
        <p
          style={{
            fontSize: "16px",
            margin: "0 0 10px 0",
          }}
        >
          <strong style={{ color: "#4F46E5" }}>Message:</strong>
        </p>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "15px",
            borderRadius: "6px",
            border: "1px solid #E5E7EB",
            marginTop: "5px",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              margin: "0",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {message}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          paddingTop: "15px",
          fontSize: "12px",
          color: "#9CA3AF",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0" }}>This message was sent from your portfolio contact form.</p>
        <p style={{ margin: "5px 0 0 0" }}>
          Reply directly to {email} to respond to {firstName}.
        </p>
      </div>
    </div>
  );
}
