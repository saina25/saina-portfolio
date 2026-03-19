import React from "react";
import experienceImg from "../../assets/images/experience_logo.png";

export default function ExperienceImg(props) {
  const theme = props.theme;
  return (
    <div>
      <img
        src={experienceImg}
        alt="Saina Roy Experience"
        style={{
          width: "auto",      /* Allows the width to adjust based on the new height */
          maxHeight: "1700px", /* Increase this number (e.g., 600px) to make it even taller */
          maxWidth: "100%",   /* Ensures it doesn't spill off the screen on mobile */
          height: "auto",
          display: "block",
          margin: "0 auto",
          objectFit: "contain" 
        }}
      />
    </div>
  );
}