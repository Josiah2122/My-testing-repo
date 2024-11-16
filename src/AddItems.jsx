import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

export default function AddItems({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        required
        ref={inputRef}
        type="text"
        name="name"
        placeholder="Add Item"
        id="addItem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}
