import React from "react";
import addressImg from "../../assets/images/victoria.png";

export default function AddressImg() {
  return (
    <img 
      src={addressImg} 
      alt="Saina Roy Address" 
      style={{ 
        width: "100%", 
        maxWidth: "600px", 
        height: "auto", 
        display: "block", 
        margin: "0 auto" 
      }} 
    />
  );
}