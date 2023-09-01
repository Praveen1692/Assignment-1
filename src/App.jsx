import Person from "./Person";
import "./App.css";

import Button from "./Button";
import Header from "./Header";
import List from "./List";

function App() {
  const msg = () => {
    alert("Hello");
  };
  const arr=[" one "," two "," three "]
  return (
    <>
      <div>
        <Person name="Praveen" age="23" />

        <Button text="This is Text" onClicke={msg} />

        <Header title="this is header tittle " />

        


        {
          arr.map((item,idx)=>{
            return(
              <List items={item}></List>     )
              {/* <li key={idx}>{item}</li>  */}
              })
          
        }
      </div>
    </>
  );
}

export default App;
