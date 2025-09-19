import { Link } from "react-router-dom"
import Navbar from "./navbar"
import '../App.css'
export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="head">
                <h1 className=" text-9xl">🎓</h1>
                <h1 className="font-bold text-9xl">Welcome to StudyHub</h1>
                <p className="font-bold text-2xl">Your comprehensive student management system for tracking <br></br>progress, managing courses, and building educational excellence.</p>
                <Link to="/addStu"><button className="rounded-4xl p-6 w-100">Add Student</button></Link>

            </div>
            <div className="homee">
                <h1 className="font-bold text-3xl">Quick Actions</h1>
                <div className="study">

                    <div className="stu" >
                        <h2 className="font-bold text-2xl">Add New Student</h2><br></br>
                        <p>Register new students with comprehensive profile information.</p>
                        <Link to="/addStu"><button className="rounded-2xl">Add Student</button></Link>
                    </div>
                    <div className="stu">
                        <h2 className="font-bold text-2xl">Course Analytics</h2><br></br><br></br>
                        <p>Track course enrollment and student performance metrics</p>
                        <Link to="/About"><button className="rounded-2xl">Learn More</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}