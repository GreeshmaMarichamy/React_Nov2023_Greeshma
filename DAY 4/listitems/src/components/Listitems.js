import React,{useState} from "react";
function Listitems()
{
    const[students]=useState([
        {
            id:1,
            name:"aaa",
            age:11,
        },
        {
            id:2,
            name:"aaa",
            age:11,
        },
        {
            id:3,
            name:"aaa",
            age:11,
        },
    ]);
    return(
        <div>
        <h1>ListItems</h1>
        <hr></hr>
        <ul style={{listStyleType:"none"}}>
            {students.map((student)=>(
                <li key={student.id}>
                    <h2>ID:{student.id}</h2>
                    <p>name:{student.name}</p>
                    <p>age:{student.age}</p>
                </li>
            ))}

        </ul>
        </div>
    );
}
export default Listitems;