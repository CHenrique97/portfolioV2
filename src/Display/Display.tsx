import React,{FC, useState} from "react";
import DataPortfolio from "../interface/Idata";

import "./Display.css";

const Display:FC<DataPortfolio> = (props) =>{
    let [displayProject,setProject]=useState({
        "title":"Website Backend",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        "github":"placeholder.com",
        "thumbnail":"i.imgur.com/HuvjKVW.jpeg"
    });
    
    return(
   
    <div className="Display">      
     
    {props.totalProjects.map((project)=>

    <div  key={project.github+"div"}className="unit">
    <p key={project.github}>{project.title}</p>
    </div> 

    
    )}

    <div className="show">
    <img src={displayProject.thumbnail} alt="" />
    <p>{displayProject.title} </p>
    </div>
   </div>
   
 
    
    )}

export default Display;


