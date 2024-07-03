import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import firstImg from "./assets/first.png";
import secondImg from "./assets/second.png";
import thirdImg from "./assets/third.png";

export default function TopThree() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          height={200}
          width={200}
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          gap={1}
        >
          <img src={secondImg} />
          <Stack direction="row" spacing={2}>
            <Typography>John Doe</Typography>
            <Typography>Admin</Typography>
          </Stack>
          <Typography>Site A</Typography>
          <Typography>10</Typography>
        </Box>
        <Box
          height={300}
          width={200}
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          gap={1}
        >
          <img src={firstImg} />
          <Stack direction="row" spacing={2}>
            <Typography>John Doe</Typography>
            <Typography>Admin</Typography>
          </Stack>
          <Typography>Site A</Typography>
          <Typography>10</Typography>
        </Box>
        <Box
          height={200}
          width={200}
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          <img src={thirdImg} />
          <Stack direction="row" spacing={2}>
            <Typography>John Doe</Typography>
            <Typography>Admin</Typography>
          </Stack>
          <Typography>Site A</Typography>
          <Typography>10</Typography>
        </Box>
        {/* <Item>Item 3</Item> */}
      </Stack>
    </div>
  );
}
