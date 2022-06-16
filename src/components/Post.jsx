import { Box, Container } from "@mui/material";
import React from "react";
import CommentInput from "./CommentInput";

const Post = () => {
  const [allpost, setAllPost] = React.useState([]);
  function addClick(pic) {
    setAllPost([]);
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{ bgcolor: "#383426", height: "90vh", borderRadius: "10px" }}
        />
        <CommentInput addClick={addClick} />
      </Container>
    </div>
  );
};

export default Post;
