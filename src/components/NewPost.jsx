import {
  Box,
  Container,
  InputBase,
  useMediaQuery,
  useThemeProps,
} from "@mui/material";
import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { Context } from "../ContextApi/AllContext";
import Send from "@mui/icons-material/Send";
const NewPost = ({ post, index }) => {
  const isActive = useMediaQuery("(max-width : 600px");
  const { handleCommentChange, handleCommentSend, commentSTr } =
    useContext(Context);
  console.log(index, "INDEX");
  return (
    <Container
      sx={{
        width: isActive ? "100vw" : "35vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          bgcolor: "#3a3b3c",
          height: "fit-content",

          borderRadius: "10px",
          overflowY: "scroll",
          color: "white",
          display: "flex",
          flexDirection: "column",
          //   border: "1px solid white",
          textAlign: "left",
          padding: "20px",
        }}
      >
        <>
          <div style={{ display: "flex" }}>
            <Avatar
              style={{ margin: "5px" }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <p>{post.thought}</p>{" "}
          </div>{" "}
          <sub style={{ marginLeft: "10px" }}>{post.date}</sub>
          {/* <p>{post.date}</p> */}
          <img
            style={{
              height: isActive ? "50%" : "fit-content",
              padding: "1px",
              borderRadius: "20px",
            }}
            src={post.commentGif}
            alt=""
          />
        </>
        <div>
          {post.allComments.map((eachComment, i) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    width: 20,
                    height: 20,
                    marginRight: 1,
                    fontSize: "10px",
                  }}
                >
                  CM
                </Avatar>
                <p key={i}>{eachComment}</p>
              </div>
            );
          })}
        </div>
      </Box>
      <div style={{ display: "flex", color: "white" }}>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
            borderRadius: "20px",
            border: "1px solid white",
            padding: "0 10px",
            marginBottom: "10px",
          }}
          placeholder="Write a comment"
          //   value={commentSTr}
          onChange={handleCommentChange}

          // onKeyDown={handleEnter}
        />
        <Send onClick={() => handleCommentSend(index)} />
      </div>
    </Container>
  );
};

export default NewPost;
