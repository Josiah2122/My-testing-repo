import { useState } from "react";

const Content = () => {
  const handleNameChange = () => {
    const [name, setName] = useState("someone");
    console.log(name);

    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You Clicked It!");
  };
  const handleClick2 = (name) => {
    console.log(`${name} Clicked It!`);
  };
  const handleClick3 = (e) => {
    console.log(e.target);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {}!</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2("Bob")}>Click Me</button>
      <button onClick={(e) => handleClick3(e)}>Click Me</button>
    </main>
  );
};

export default Content;
