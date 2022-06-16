import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GifBoxSharpIcon from "@mui/icons-material/GifBoxSharp";
import GifModal from "./GifModal";
const CommentInput = ({ addClick }) => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 540,

          background: "#3a3b3c",
          color: "white",
        }}
      >
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="menu">
          <AccountCircleIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white", borderRadius: "50px" }}
          placeholder="Write a comment"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="gif">
          {/* <SearchIcon /> */}
        </IconButton>
        <GifModal addClick={addClick} />
        {/* <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions"> */}
        {/* <DirectionsIcon /> */}
        {/* </IconButton> */}
      </Paper>
    </div>
  );
};

export default CommentInput;
