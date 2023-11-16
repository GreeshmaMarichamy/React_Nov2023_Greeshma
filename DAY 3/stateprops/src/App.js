import './App.css';
import Props from "./components/props";
import {useState} from "react";
function App(){
  const[name,setName]=useState("Greeshma");
  return(
    <div className="App">
      <Props username={name}/>
    </div>
  );
}
export default App;
 /* return(
    <div className="App">
      <StateProps/>
    </div>
  );
}
export default App;*/