import React,{FC, useEffect, useState} from "react";
import DataPortfolio from "../interface/Idata";
import github from "../assets/GitHub.png";
import "./Display.css";

const Display:FC<DataPortfolio> = (props) =>{

    let [displayProject,setProject]=useState(props.totalProjects[0]);

    useEffect(()=>{
        console.log('Things changed')
        setProject(props.totalProjects[0]);
    },[props.totalProjects])
    
    let selectProject = (project:any ) =>{
        setProject(project);
    }

    
    return(
        
    <div className="Display">      
    <div className="List">
    {props.totalProjects.map((project)=>


    <p key={project.github} onClick={()=> selectProject(project)} className="unit" >{project.title}</p>
  

       
    )}
     </div>
    <div className="Show">
    <img className="Thumbnail" src={displayProject.thumbnail} alt="thumbnail of a program" />
    <p>{displayProject.title} </p>
    <p>{displayProject.description} </p>
    <img className="GitHub" src={github} onClick={()=> window.open(displayProject.github, "_blank")} ></img>
    </div>
   </div>
   
 
    
    )}

export default Display;


