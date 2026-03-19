import React from "react";
import projectsHeader from "../../assets/images/projects_header.png";

export default function ProjectsImg(props) {
  return (
    <div>
      <img
        src={projectsHeader}
        alt="Saina Roy Projects"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "500px",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
}