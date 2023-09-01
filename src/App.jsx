
import Person from "./Person";
import "./App.css";

import Button from "./Button";


function App() {
  const msg=()=>{
    alert("Hello")
  }
  return (
    <>
      <div>
        <Person name="Praveen" age="23" />
        
       

        <Button text="This is Text" onClicke={msg} />

        
     
        

        
      </div>
     
    </>
    
  );
}

export default App;
