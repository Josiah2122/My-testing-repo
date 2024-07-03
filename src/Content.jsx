import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Coca Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "One cup of granola",
    },
    {
      id: 3,
      checked: false,
      item: "One cup of oatmeal",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    <main>
      <ul>
        {items?.map((item) => {
          return (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                name="item"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label>{item.item}</label>
              <FaTrashAlt role="button" tabIndex="0" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
