import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        name="item"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={
          item.checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
}
