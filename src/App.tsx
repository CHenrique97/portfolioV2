import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HeaderData from './Header/Header'
import DataPortfolioService from "./services/portfolio"
import  DataPortfolio  from './interface/Idata'
import Display from './Display/Display'
import placeholder from "./assets/placeholder.jpg";
function App() {
  const [currentProject, setCurrent] = useState("null");
  const [totalProjects, setTotal] = useState("0");
  const [projectList,setList] = useState<any[]>([{
    "title":"Website Backend",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "github":"placeholder.com",
    "thumbnail":placeholder
}]);

  let portfolio:DataPortfolio; 

  useEffect(() => {
    DataPortfolioService.getAll().then((Response:any)=> {
     
      portfolio=Response.data;
      setCurrent(portfolio.currentProject);
      setTotal((portfolio.totalProjects.length).toString());
      setList(portfolio.totalProjects);
  
        }
      );
      
  },[])

  
  return (
    <div className="main">
   <HeaderData currentProject={currentProject} totalProjects={totalProjects} ></HeaderData>
   <Display totalProjects={projectList} currentProject={''} > </Display>

   </div>
    

  )
}

export default App
