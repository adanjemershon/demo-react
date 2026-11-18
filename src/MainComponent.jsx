import React from 'react'
import { useState, useEffect } from 'react'

function Build() {
    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({name:"", age:"", course:"", studentID:""})
    const [message, setMessage] = useState("");
    
   function getStudents(){
        fetch('http://localhost:5000/students')
        .then(response => response.json())
        .then(data => setStudents(data))
   } 

   useEffect(() => {
        getStudents()
    }, [])
    
    function addStudentBtn(){
        if(!form.name ||  !form.age || !form.course || !form.studentID){
            alert(`Please fill all fields!`)
            return;
        }

        fetch('http://localhost:5000/students', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then((data) => {
            setMessage(data.message)
            getStudents()
            setForm({name:"", age:"", course:"", studentID:""})
        })
        setTimeout(()=> setMessage(""), 3000)
    }


  return (
    <div>
        <h1>Student Form</h1>
        {message && <p>{message}</p>}
        <input 
        type="text" 
        placeholder='Name' 
        value={form.name} 
        onChange={e => setForm({...form, name: e.target.value})}/><br />

        <input 
        type="text" 
        placeholder='Age' 
        value={form.age} 
        onChange={e => setForm({...form, age: e.target.value})}/><br />

        <input 
        type="text" 
        placeholder='Course' 
        value={form.course} 
        onChange={e => setForm({...form, course: e.target.value})}/><br />

        <input 
        type="text" 
        placeholder='Student ID' 
        value={form.studentID} 
        onChange={e => setForm({...form, studentID: e.target.value})}/><br />
        
        <button onClick={addStudentBtn}>Add Student</button>

        <h2>Students from Backend</h2>
        {students.map((student, index) => (
            <div key={index}>
                <p>Name: {student.name}</p>
                <p>Age: {student.age}</p>
                <p>Course: {student.course}</p>
                <p>Student ID: {student.studentID}</p>
            </div>
        ))}
    </div>
  )
}

export default Build