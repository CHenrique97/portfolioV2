import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HeaderData from './Header/Header'
import DataPortfolioService from "./services/portfolio"
import  DataPortfolio  from './interface/Idata'
import Display from './Display/Display'
function App() {
  const [currentProject, setCurrent] = useState("null");
  const [totalProjects, setTotal] = useState("0");
  const [projectList,setList] = useState<any[]>([]);
  let portfolio:DataPortfolio; 

  useEffect(() => {
    DataPortfolioService.getAll().then((Response:any)=> {
  
      portfolio=Response.data
      setCurrent(portfolio.currentProject);
      setTotal((portfolio.totalProjects.length-1).toString());
      
      setList(portfolio.totalProjects);
  
        }
      );
      
  },[])

  
  return (
    <div className="main">
   <HeaderData currentProject={currentProject} totalProjects={(totalProjects.length-1).toString()} ></HeaderData>
   <Display totalProjects={projectList} currentProject={''}> </Display>
   </div>


  )
}

export default App
