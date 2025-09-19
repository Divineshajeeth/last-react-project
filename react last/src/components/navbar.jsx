import { Link } from "react-router-dom"
export default function Navbar() {

    return (
        <>
            <nav className="p-6">

                <h2 className="Studyy text-4xl font-bold">Study Hub🎓</h2>
                <ul className="flex">
                    <li><button className="bg-blue-900 p-2 rounded-xl text-white" ><Link to="/Home">🏠Home</Link></button></li>
                    <li><button className="bg-blue-900 p-2 rounded-xl text-white" ><Link to="/addStu">👨‍🎓Add Student</Link></button></li>
                    <li><button className="bg-blue-900 p-2 rounded-xl text-white"><Link to="/About">❕About</Link></button></li>



                </ul>


            </nav>

        </>


    )

}