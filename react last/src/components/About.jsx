import React from "react"
import Myimage1 from '../components/Html.png'
import Myimage2 from '../components/CSS.png'
import Myimage3 from '../components/JavaScript.png'
import Myimage4 from '../components/react.svg'


export default function About() {
    return (
    <div>
        <div className="head">
            <h1 className="font-bold text-9xl">About StudyHub</h1>
            <h4 className="font-bold text-2xl"> A comprehensive student management system built with modern web <br></br>technologies for educational institutions.</h4>
            </div>
            <div className=" grid grid-cols-4 gap-3 flex  p-70" >
            <img src={Myimage1} alt="My Example" width="400" />
            <img src={Myimage2} alt="My Example" width="400" />
            <img src={Myimage3} alt="My Example" width="400" />
            <img src={Myimage4} alt="My Example" width="400" />

            </div>
        </div>    
        


    )
}