
import React, { FC,useEffect, useState } from 'react'
import { headerInterface } from "../interface/Iheader";
import "./header.css"
const HeaderData:FC<headerInterface> = (headerInterface) => {

    return (<h1 className='MainHeader' >
        I'm currently working on {headerInterface.currentProject}, fell free to check the other {headerInterface.totalProjects} ones
    </h1>)
}

export default HeaderData;