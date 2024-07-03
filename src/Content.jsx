import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(count);
  };
  const handleClick3 = (e) => {
    console.log(e.target);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <p>Count: {count}</p>
      <button onClick={handleNameChange}>Change Me</button>
      <button onClick={handleClick}>Add To Count </button>
      <button onClick={handleClick2}>Show Count</button>
    </main>
  );
};

export default Content;
