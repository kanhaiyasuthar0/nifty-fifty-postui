import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GifBoxSharpIcon from "@mui/icons-material/GifBoxSharp";
import SendIcon from "@mui/icons-material/Send";

import GifModal from "./GifModal";
const CommentInput = ({
  addClick,
  handleChange,
  handleEnter,
  handleSend,
  isActive,
}) => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: isActive ? "92.5vw" : "46.5vw",

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
          id="commentbox"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <GifModal addClick={addClick} isActive={isActive} />
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="gif">
          {isActive ? <SendIcon onClick={handleSend}></SendIcon> : null}
          {/* <SearchIcon /> */}
        </IconButton>
      </Paper>
    </div>
  );
};

export default CommentInput;
