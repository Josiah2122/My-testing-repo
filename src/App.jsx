import { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  //You cannot use the async keyword in useEffect so you will see the old way of fetching inside useEffect
  useEffect(() => {
    //The old way would be fetch().then.catch()
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems, "listItems");
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };

    (async () => await fetchItems())();
  }, []);
  console.log(items, "items");

  const setAndSaveItems = (items) => {
    setItems(items);
    localStorage.setItem("ShoppingList", JSON.stringify(items));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <>
      <div className="App">
        <Header title="Groceries List" />
        <AddItems
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem search={search} setSearch={setSearch} />
        <Content
          items={items?.filter((item) =>
            item?.item?.toLowerCase()?.includes(search?.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
