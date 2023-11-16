//DAY 3 PAH
import {useState} from "react";
function Toggle() {
    const[name,setName]=useState("Kaioken");
    const[cnt,setCount]=useState(0);
    const transformationHandler = ()=> {
        let value=cnt;
        setCount(++value);
        if(cnt===3)
        {
        if(name==="Kaioken")
        setName("SuperSaiyan");
        else
        setName("Kaioken");
        setCount(0);
        }
        
    };
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={transformationHandler}>Toggle</button>
        </div>
    );
}
export default Toggle;