import React from "react";
import mlImage from "../../assets/images/ml_woman.png"; // Make sure the filename matches!

export default function CloudInfraImg() {
  return (
    <img 
      src={mlImage} 
      alt="Machine Learning Illustration" 
      style={{ 
        width: "100%", 
        maxWidth: "550px", // This stops it from being "too big"
        height: "auto",
        display: "block",
        margin: "0 auto" 
      }} 
    />
  );
}