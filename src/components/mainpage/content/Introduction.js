import React from "react";
import classes from "./Introduction.module.css";
import { assets } from "../../../assets/ImportAssets";
import SocialMedia from "../../SocialMedia/SocialMedia";

const Introduction = () => {
  return (
    <div className={classes.container}>
      <div className={classes["intro-container"]}>
        <h1>
          Hello, I am <br />
          Nidhi Kumari Gupta
        </h1>
        <p>
          I am a Full Stack Developer based in India. I really like the concept of creating
          anything you can think of with programming.
        </p>
        <div className={classes["social-container"]}>
          <a href="https://github.com/nid1999-code"><SocialMedia src={assets.GitHub} /></a>
          <a href="https://www.linkedin.com/in/knidhigupta/"><SocialMedia src={assets.LinkedIn} /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Introduction;
