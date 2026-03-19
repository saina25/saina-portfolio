import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        {/* We removed the "Made with" text from here to keep the layout clean */}
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {/* You can leave this empty or add a simple copyright if you prefer */}
        </p>
      </Fade>
    </div>
  );
}