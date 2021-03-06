import {
  Divider,
  FormControlLabel,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React, { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GifBoxSharpIcon from "@mui/icons-material/GifBoxSharp";
import SendIcon from "@mui/icons-material/Send";
// import SendIcon from "@mui/icons-material/Send";

import GifModal from "./GifModal";
import PostThought from "./PostThought";
import { Context } from "../ContextApi/AllContext";
import styled from "styled-components";

const noPointer = { cursor: "pointer" };
const CommentInput = ({
  addClick,
  // handleChange,
  // handleEnter,
  handleSend,
  isActive,
}) => {
  const { handleChange, handleGif, thoughtstr, handleThought } =
    useContext(Context);
  return (
    <div>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: isActive ? "92.5vw" : "30vw",

          background: "#3a3b3c",
          color: "white",
          outline: "none",
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
            borderRadius: "20px",
            // border: "1px solid white",
            padding: "0 10px",
          }}
          placeholder="What's on your mind, name?"
          value={thoughtstr}
          id="commentbox"
          autoFocus={true}
          required={true}
          onChange={handleChange}
          onSubmit={null}
        />
        <SendIcon style={noPointer} onClick={handleThought}></SendIcon>

        <GifModal addClick={addClick} isActive={isActive} />
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="gif">
          {/* <SearchIcon /> */}
        </IconButton>
        {/* {isActive ? <SendIcon onClick={handleSend}></SendIcon> : null} */}
      </Paper>
    </div>
  );
};

export default CommentInput;
