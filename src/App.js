import { useContext } from "react";
import "./App.css";
import Logo from "./components/Logo";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import PostThought from "./components/PostThought";
import { Context } from "./ContextApi/AllContext";

function App() {
  const { allPost } = useContext(Context);
  return (
    <div className="App">
      <Logo />
      <PostThought />
      {/* <PostThought /> */}
      {/* <Post /> */}
      {allPost.map((post, i) => {
        return <NewPost key={i} post={post} index={post.id} />;
      })}
    </div>
  );
}

export default App;
