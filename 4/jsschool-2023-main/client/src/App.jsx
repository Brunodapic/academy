import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import Create from "./scenes/Create";
import Home from "./scenes/Home";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:robotId" element={<Create />} />

      </Routes>
    </div>
  );
};

export default App;
