import React from "react";

export default function StickyFooterHelper({ children, footer }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>{children}</div>
      <div style={{ marginTop: "auto" }}>{footer}</div>
    </div>
  );
}
