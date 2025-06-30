import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);
  const [isShow, setIsShow] = useState(false);
  const [msg, setmsg] = useState("");

  const incValue = () => {
    if(counter<20){
      setCounter(counter + 1);
    }
    else{
      setmsg("value cannot be greater than 20");
      setIsShow(true);
      setTimeout(() => {
        setIsShow(false);
      }, 2000);
    }
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else{
      setmsg("value cannot be lesser than 0");

      setIsShow(true);
      setTimeout(() => {
        setIsShow(false);
      }, 2000);
    }
  };

  return (
    <>
      <div id="notify" style={{opacity: isShow?"1":"0"}}>
        <p>{msg}</p>
      </div>
      <h1>hello dosto!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incValue} >Increase counter</button>
      <button onClick={decValue} >Decrease counter</button>
    </>
  );
}

export default App;
