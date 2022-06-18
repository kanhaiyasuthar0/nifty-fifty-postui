import { Box, Container } from "@mui/material";
import React, { useContext, useState } from "react";
import CommentInput from "./CommentInput";
import styled from "styled-components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import PostThought from "./PostThought";
import { Context } from "../ContextApi/AllContext";

//Some styled components
const Comment = styled.p`
  font-size: 1em;
  text-align: left;
  color: white;
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

const Post = () => {
  //all the states variable
  // const { setAllPost } = useContext(Context);
  const isActive = useMediaQuery("(max-width : 600px");
  const [allpost, setAllPost] = React.useState([]);
  const [str, setStr] = useState("");

  //function to post pic and comment in the post timeline
  // function addClick(pic) {
  //   setAllPost([...allpost, pic]);
  // }
  // const handleChange = (e) => {
  //   setStr(e.target.value);
  // };

  //Removes gif and comment
  const removeGif = (comment) => {
    let newArr = allpost.filter((item) => {
      return item.id !== comment.id;
    });

    setAllPost([...newArr]);
  };
  const removeComment = (comment) => {
    let i = allpost.indexOf(comment);
    allpost.splice(i, 1);
    setAllPost([...allpost]);
  };

  // sends when presses enter for the screen 600px and above
  const handleEnter = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      setAllPost([...allpost, str]);
      e.target.value = "";
    }
  };

  //sends when presses enter for the screen below 600px
  const handleSend = (e) => {
    e.preventDefault();
    setAllPost([...allpost, str]);
    document.getElementById("commentbox").value = "";
  };

  return (
    <div>
      <Container
        sx={{
          width: isActive ? "100vw" : "35vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
        // sx={{
        //   bgcolor: "#3a3b3c",
        //   height: "0",
        //   borderRadius: "10px",
        //   overflowY: "scroll",
        //   color: "white",
        //   display: "flex",
        //   flexDirection: "column",
        //   // border: "1px solid white",
        //   textAlign: "left",
        //   // padding: "20px",
        // }}
        >
          {/* <img
            style={{
              height: isActive ? "50%" : "50vh",
              padding: "1px",
              borderRadius: "20px",
            }}
            src="./codemancers.jpg"
            alt=""
          /> */}

          {allpost.map((comment, i) => {
            return comment.images ? (
              <div key={i}>
                <hr style={{ color: "white", width: "100%" }} />
                <Image
                  onClick={() => removeGif(comment)}
                  src={comment.images.original.url}
                  alt=""
                />
              </div>
            ) : (
              <div key={i}>
                <hr style={{ color: "white", width: "100%" }} />

                <Comment>
                  {comment}
                  <Tooltip title="Delete Comment">
                    <DeleteOutlineOutlinedIcon
                      onClick={() => removeComment(comment)}
                      sx={{
                        fontSize: "medium",
                        marginLeft: "10px",
                        color: "red",
                      }}
                    ></DeleteOutlineOutlinedIcon>
                  </Tooltip>
                </Comment>
              </div>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Post;
