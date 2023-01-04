import React from "react";

type Props = {
  title: string;
  score: number;
  buttonColor?: "blue" | "pink";
};

const CourseCard: React.FC<Props> = ({ title, score, buttonColor }) => {
  return (
    <div className="course-card">
      <div className="course-card_main">
        <div className="course-card_img"></div>
        <div className="course-card_text">{title}</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 7px 1fr",
          }}
        >
          <button className={buttonColor ? `small-btn btn-${buttonColor}` : "small-btn" }>View Lesson</button>
          <span />
          <button className="small-btn btn-secondary">Claim {score} AFET</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
