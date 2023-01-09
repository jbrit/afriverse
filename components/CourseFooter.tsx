import React from "react";

type Props = {};

const CourseFooter = (props: Props) => {
  return (
    <footer
      style={{
        padding: "40px 0",
        borderTop: "1px solid rgba(31, 31, 31, 0.47)",
        marginTop: "3rem",
        // position: "fixed",
        // bottom: 0,
        // left: 0,
        // width: "100vw"
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="container"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: "14px", lineHeight: "16.03px" }}>
            % Completed
          </div>
          <div
            style={{
              fontSize: "26px",
              lineHeight: "29.77px",
              color: "rgba(31, 31, 31, 0.67)",
            }}
          >
            Not Started
          </div>
        </div>
        <div>
          <button className="connect__btn" style={{ marginLeft: "0" }}>
            Start Course
          </button>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;
