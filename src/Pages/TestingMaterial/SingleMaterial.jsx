import React, { useEffect, useState } from "react";
import CheckMaterial from "./fragments/CheckMaterial";
import { Button } from "@mui/material";

export default function SingleMaterial() {
  const myObj = {
    id: 1,
    name: "John Doe",
    age: 30,
    city: "New York",
    materials: [
      { Book: "Notebook", qtyRequested: 2, requestRemark: "only two" },
      { Book: "Normal book", qtyRequested: 3, requestRemark: "normal book" },
    ],
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(myObj?.materials);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>SingleMaterial</div>
      <p>{myObj?.name}</p>
      {items?.map((item, index) => (
        <CheckMaterial
          key={index}
          item={item}
          index={index}
          items={items}
          setItems={setItems}
          handleChange={handleChange}
        />
      ))}
      <Button variant="contained" type="submit">
        Check
      </Button>
    </form>
  );
}
