import React from "react";
import { assets } from "../../../assets/ImportAssets";
import Project from "../../Project/Project";
import classes from "./Projects.module.css";

const data = [
  "Created a polling system using node and express. \
  This project is an interactive polling system designed to \
  facilitate the creation, management, and analysis of questions\
  with multiple options. The system allows users to dynamically \
  create questions, add options, cast votes, and view detailed information\
  about the questions and their corresponding options."
];

const Projects = () => {
  return (
    <div className={classes.projects} id="projects">
      <h1>Projects</h1>
      <Project
        description={data[0]}
        src={assets.Chat}
        live={"https://github.com/nid1999-code/Polling-API"}
        code={"https://github.com/nid1999-code/Polling-API"}
      />

     <Project
        description={data[1]}
        src={assets.Habit}
        live={"https://github.com/nid1999-code/Polling-API"}
        code={"https://github.com/nid1999-code/Polling-API"}
        order="order2"
        />
    
      <Project
        description={data[2]}
        src={assets.IMDB}
        live={"https://github.com/nid1999-code/IMDB_Clone"}
        code={"https://github.com/nid1999-code/IMDB_Clone"}
      />
    </div>
  );
};

export default Projects;
