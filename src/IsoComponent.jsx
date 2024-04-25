import React from "react";
import firstImg from "./assets/first.png";
import { Typography } from "@mui/material";

export default function IsoComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        height: 200,
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          width: "29%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "2px",
        }}
      >
        <img src={firstImg} />
      </div>
      <div style={{ width: "59%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "flex-start",
            border: "1px solid black",
            borderRadius: "2px",
          }}
        >
          <Typography sx={{ margin: 1 }}>Document Type</Typography>
        </div>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "flex-start",
            border: "1px solid black",
            borderRadius: "2px",
          }}
        >
          <Typography sx={{ margin: 1 }}>Document Name</Typography>
        </div>
      </div>
      <div style={{ width: "29%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "flex-start",
            border: "1px solid black",
            borderRadius: "2px",
          }}
        >
          <Typography sx={{ margin: 1 }}>Document No.</Typography>
        </div>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "flex-start",
            border: "1px solid black",
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-start",
              border: "1px solid black",
              borderRadius: "2px",
            }}
          >
            <Typography sx={{ margin: 1 }}>Issue No.</Typography>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-start",
              border: "1px solid black",
              borderRadius: "2px",
            }}
          >
            <Typography sx={{ margin: 1 }}>Page No.</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
