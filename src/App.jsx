import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopThree from "./TopThree";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopThree />
    </>
  );
}

export default App;
