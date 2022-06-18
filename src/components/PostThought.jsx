import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../ContextApi/AllContext";
import CommentInput from "./CommentInput";

const TopBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #3a3b3c;
  width: ${(props) => (props.isActive ? "95%" : "31%")};
  margin: 10px auto;
  border-radius: 10px;
  padding: 5px;

  &:hover {
    background: #5f5f5f;
  }
`;
const HR = styled.hr`
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: none;
`;
const EachOpt = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const TopBox1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  //   border: 1px solid red;
  width: 100%;
  color: white;
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 3px;
`;
const PostThought = ({ addClick, handleChange, handleEnter, handleSend }) => {
  const { isActive } = useContext(Context);
  return (
    <TopBox isActive={isActive}>
      <CommentInput isActive={isActive} />
      <HR />
      <TopBox1 isActive={isActive}>
        <EachOpt style={{ margin: "10px" }}>
          <i style={{ color: "red" }} class="fi fi-br-video-camera"></i>{" "}
          <span>Live Video</span>
        </EachOpt>
        <EachOpt>
          <i style={{ color: "green" }} class="fi fi-br-gallery"></i>
          <span>Photo/video</span>
        </EachOpt>
        <EachOpt>
          <i style={{ color: "yellow" }} class="fi fi-br-grin"></i>{" "}
          <span>Feeling/Activity</span>{" "}
        </EachOpt>
      </TopBox1>
    </TopBox>
  );
};

export default PostThought;
