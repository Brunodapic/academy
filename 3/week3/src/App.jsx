import { useState } from "react";
import styles from "./App.module.css";
import Counter from "./components/Counter/Counter";

function App() {
  const [totalCount, setTotalCount] = useState(0);

  const [countersList, setCountersList] = useState([]);
  const addToTotal = (number) => {
    setTotalCount(totalCount + number);
  };

  const addCounter = () => {
    let max = -1;
    if (countersList.length !== 0) {
      max = countersList.reduce((a, b) => (a.id > b.id ? a : b)).id;  //this way NEW id is allways unique
    }
    setCountersList([...countersList, { id: max + 1 }]);
  };

  const removeCounterFromState = (counter) => {
    let filteredArray = countersList.filter((item) => item.id !== counter);
    setCountersList([...filteredArray]);
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <button onClick={addCounter}>ADD counter</button>
        Total count : {totalCount}
        {countersList.map((item) => {
          return (
            <Counter
              key={item.id}
              counterId={item.id}
              totalCount={totalCount}
              addToTotal={addToTotal}
              initialCounter={0}
              removeCounterFromState={removeCounterFromState}
            />
          );
        })}
        
      </header>
    </div>
  );
}

export default App;
