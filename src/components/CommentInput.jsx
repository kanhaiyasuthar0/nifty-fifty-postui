import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GifBoxSharpIcon from "@mui/icons-material/GifBoxSharp";
import GifModal from "./GifModal";
const CommentInput = ({
  addClick,
  handleChange,
  handleEnter,
  str,
  isActive,
}) => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          //   p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: isActive ? "92.5vw" : "41.5vw",

          background: "#3a3b3c",
          color: "white",
        }}
      >
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="menu">
          <AccountCircleIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
            borderRadius: "10px",
            border: "1px solid white",
            padding: "0 10px",
          }}
          placeholder="Write a comment"
          //   value={str}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="gif">
          {/* <SearchIcon /> */}
          <GifModal addClick={addClick} />
        </IconButton>
      </Paper>
    </div>
  );
};

export default CommentInput;
