import React,{useState} from "react";
function Employee()
{
    const[emply]=useState([
        {
            id:1,
            name:"aaa",
            salary:10000,
            desig:"General Manager",
        },
        {
            id:2,
            name:"bbb",
            salary:20000,
            desig:"Chief Manager",
        },
        {
            id:3,
            name:"ccc",
            salary:30000,
            desig:"Executive Manager",
        },
    ]);
    return(
        <div>
            <h1>EMPLOYEE DETAILS</h1>
            <hr></hr>
            <table align={"center"}border={1} cellPadding={10} cellSpacing={0}>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
                <th>DESIGNATION</th>
                {emply.map((emp)=>(
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.desig}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default Employee;