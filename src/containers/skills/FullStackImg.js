import React from "react";
import fsImage from "../../assets/images/fullstack_woman.png";

export default function FullStackImg() {
  return (
    <img 
      src={fsImage} 
      alt="Full Stack Illustration" 
      style={{ 
        width: "100%", 
        maxWidth: "550px", 
        height: "auto",
        display: "block",
        margin: "0 auto" 
      }} 
    />
  );
}