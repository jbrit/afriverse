import React from "react";

type Props = {};

const CourseFooter = (props: Props) => {
  return (
    <footer>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="container"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>% Completed</div>
          <div>Not Started</div>
        </div>
        <div>
          <button className="connect__btn" style={{ marginLeft: "0" }}>Start Course</button>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;
