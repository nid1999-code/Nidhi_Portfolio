import React from "react";
import Work from "../../Work/Work";
import classes from "./WorkExperience.module.css";

const workdata = [
  {
    title: "Software Engineer",
    date: "2022 Novmber - 2023 Novmber",
    description: [
      "Experience in software development, maintenance, testing, and troubleshooting on  Data Management .",
      "Designed and developed a service for the migration of data from/to multiple databases.",
      "Supports multiple databases like Oracle, MySQL, MongoDB",
      "Developed a responsive UI in React, Bootstrap, and Nodejs.",
    ],
  },
  {
    title: "Service Migration from Oracle to OpenJDK(JAVA)",
    date: "2022 Febuary - 2022 Novmber",
    description: [
      "Migration of existing service from Oracle JDK to OpenJDK .",
      "Update environment variables and configurations to point to the new OpenJDK installation.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className={classes.container} id="experience">
      <h1 className={classes.wheading}>Work Experience</h1>
      <div className={classes["work-container"]}>
        <div className={classes.line} />
        <div className={`${classes["ind-container"]} ${classes.indone}`}>
          <div className={`${classes.ind}`} />
        </div>
        <div className={`${classes["ind-container"]} ${classes.indtwo}`}>
          <div className={`${classes.ind}`} />
        </div>
        {/* <div className={`${classes["ind-container"]} ${classes.indthree}`}>
          <div className={`${classes.ind}`} />
        </div> */}

        <Work data={workdata[0]} />
        <Work data={workdata[1]} />
      </div>
    </div>
  );
};

export default WorkExperience;
