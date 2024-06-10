import { Input } from "@mui/material";
import React from "react";

export default function CheckMaterial({ item, index, handleChange }) {
  return (
    <>
      <div className="container" style={{ marginBottom: "100px" }}>
        <Input
          type="text"
          name="Book"
          value={item.Book}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="qtyRequested"
          value={item.qtyRequested}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="requestRemark"
          value={item.requestRemark}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
