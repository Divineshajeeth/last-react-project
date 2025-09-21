
import React, { useState } from "react";
import '../App.css'


function Add() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gmail, setGmail] = useState("");
    const [course, setCourse] = useState("");
    const [errors, setErrors] = useState({}); function handleAddStudent() {
        const newErrors = {}; if (name.trim() === "") {
            newErrors.name = ":warning: Name is required";
        } if (age.trim() === "" || isNaN(age) || parseInt(age) <= 0 || parseInt(age) > 100) {
            newErrors.age = ":warning: Enter a valid age ";
        } if (gmail.trim() === "" || !gmail.includes("@gmail.com")) {
            newErrors.gmail = ":warning: Enter a valid Gmail ID";
        } if (course.trim() === "") {
            newErrors.course = ":warning: Course name is required";
        } if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        } const newStudent = {
            name: name.trim(),
            age: parseInt(age),
            gmail: gmail.trim(),
            course: course.trim()
        }; setStudents([...students, newStudent]);
        setName("");
        setAge("");
        setGmail("");
        setCourse("");
        setErrors({});
    } return (

        <div className='Apply' >
            <div>
                <h1 className="text-center p-50  text-9xl font-bold text-red-900 bg-gray-100">Hello Guys</h1>
            </div><br>
            </br><br></br>
            <h2 className="font-bold text-5xl text-black"> Student Form</h2><br></br>
            <br></br>
            <br></br>
            <div className="lable">
                <label>Name</label><br />
                <input className="bg-gray-300"
                    type="text"
                    placeholder="                   Enter name"
                    value={name}
                    onChange={function (e) {
                        setName(e.target.value);
                    }}
                />
                {errors.name && <div style={{ color: "red", fontSize: "13px" }}>{errors.name}</div>}
                <br />
                <label>Age</label>
                <br />
                <input className="bg-gray-300"
                    type="number"
                    placeholder="                    Enter age"
                    value={age}
                    onChange={function (e) {
                        setAge(e.target.value);
                    }}
                />
                {errors.age && <div style={{ color: "red", fontSize: "13px" }}>{errors.age}</div>}
                <br /><label>Gmail ID</label><br />
                <input className="bg-gray-300"
                    type="email"
                    placeholder="                 Enter Gmail ID"
                    value={gmail}
                    onChange={function (e) {
                        setGmail(e.target.value);
                    }}
                />
                {errors.gmail && <div style={{ color: "red", fontSize: "13px" }}>{errors.gmail}</div>}
                <br /><label>Course</label><br />
                <input className="bg-gray-300"
                    type="text"
                    placeholder="           Enter Course Name"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
            </div>

            {errors.course && <div style={{ color: "red", fontSize: "13px" }}>{errors.course}</div>}
            <br /> <button className="bg-black text-white w-60 p-4 rounded-3xl " onClick={handleAddStudent} style={{ marginTop: "10px" }}> Add Student</button>
            <ul>
                {students.map(function (student, index) {
                    return (
                        <li key={index} className="text-center p-30 bg-gray-100 text-1xl font-bold">
                            <h3>{student.name}</h3>
                            <p className="bg-gray-100 p-6"> Age: {student.age} yrs</p>
                            <p> Gmail: {student.gmail}</p><br></br>
                            <p> Course: {student.course}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Add;



