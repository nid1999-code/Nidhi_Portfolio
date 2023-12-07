import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <h1>Let's Connect</h1>
        <div className={classes.contact}>
          <p>knidhigupta1999@gmail.com</p>
          <p>+91 6204636092</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
