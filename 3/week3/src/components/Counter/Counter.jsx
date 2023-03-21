import React, { memo, useState, useEffect } from "react";
import Button from "../Buttons/Button";

function Counter({totalCount, addToTotal,initialCounter,removeCounterFromState,counterId}) {
  const [counter, setCounter] = useState({ count: initialCounter });

  useEffect(() => {
    document.title = "Counter " + counter.count;
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log("unmountam se");
    };
  }, []);

  const plus = () =>{
    counter.count = counter.count + 1;
    setCounter({ ...counter });
    addToTotal(+1)
  }

  const minus = () =>{
    counter.count = counter.count - 1;
    setCounter({ ...counter });
    addToTotal(-1)
  }

  const deleteCounter = () =>{
    addToTotal(-counter.count)                 //removes the value od this counter from sum of all
    removeCounterFromState(counterId)
  }
  return (
    <div>
      <p style={{ marginBottom: "0" }}>Clicks: {counter.count} / {totalCount}</p>
      
      <Button text={"Remove Counter"} buttonFunction={deleteCounter}/>
      
      <div>
        <Button text={"+"} buttonFunction={plus}/>
        <Button text={"-"} buttonFunction={minus}/>

      </div>
    </div>
  );
}


export default memo(Counter)
