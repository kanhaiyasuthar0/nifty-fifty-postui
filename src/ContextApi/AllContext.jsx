import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [allPost, setAllPost] = useState([]);
  const [thoughtstr, setThoughtStr] = useState("");
  const [thoughtGif, setThoughtGif] = useState("");
  const [commentSTr, setCommentSTr] = useState("");
  const isActive = useMediaQuery("(max-width : 600px");
  const handleChange = (e) => {
    setThoughtStr(e.target.value);
  };
  const handleGif = (src) => {
    setThoughtGif(src);
    prompt("Added successfully. Now please type something to see");
  };
  //   let counterId = 0;
  const handleThought = (e) => {
    e.preventDefault();
    if (thoughtstr == "") {
      return;
    }
    let arr = [
      ...allPost,
      {
        id: allPost.length,
        thought: thoughtstr,
        commentGif: thoughtGif,
        allComments: [],
        date: new Date().toDateString(),
      },
    ];
    console.log(arr);
    setThoughtStr("");
    setThoughtGif("");
    setAllPost([...arr]);
    // console.log(allPost);
  };

  const handleCommentChange = (e) => {
    setCommentSTr(e.target.value);
    console.log(e);
    // console.log(commentSTr);
  };
  const handleCommentSend = (i) => {
    if (commentSTr == "") {
      return;
    }
    allPost.forEach((post, index) => {
      if (index == i) {
        let arr = post.allComments;
        let newArr = [...arr, commentSTr];
        post.allComments = newArr;
      }
    });
    setCommentSTr("");
    console.log(allPost);
  };

  useEffect(() => {
    let obj = {
      id: 0,
      thought: "Nice Office",
      commentGif:
        "https://assets.architecturaldigest.in/photos/60083451f93542952b6650bd/master/w_1600%2Cc_limit/01.jpg",
      allComments: [],
      date: new Date().toDateString(),
    };

    setAllPost([...allPost, obj]);
    console.log(allPost);
  }, []);
  return (
    <Context.Provider
      value={{
        allPost,
        setAllPost,
        handleChange,
        handleGif,
        thoughtstr,
        handleThought,
        setThoughtGif,
        handleCommentChange,
        handleCommentSend,
        commentSTr,
        isActive,
      }}
    >
      {children}
    </Context.Provider>
  );
}
