
import { useRef, useState } from "react";

function App(){
  const [isDark,setIsDark] = useState(false);
  const buttonRef = useRef(null);
  function ToggleEvent(){
    setIsDark(!isDark);
    if(isDark){
      buttonRef.current.style.backgroundColor = "white";
      buttonRef.current.style.color = "black";
    }
    else{
      buttonRef.current.style.backgroundColor = "black";
      buttonRef.current.style.color = "white";
    }
  }
  return(
    <>
      <div ref={buttonRef} className="container">
        <h2 style={{color:"tomato"}}>hello world</h2>
        <button  onClick={ToggleEvent}>Click me</button>
      </div>

    </>
  )
}

export default App;