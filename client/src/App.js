import React from "react";
import "./App.css";
import SimpleCard from "./components/SimpleCard";
import Axios from "axios";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    Axios.get("http://localhost:4000/api/posts")
      .then(res => {
        console.log(res);
        setPosts(res.data);
      })
      .catch(err => console.log({ err }));
  }, [toggle]);

  return (
    <div className="App">
      <header className="App-header">
        {posts.map(post => {
          return <SimpleCard key={post.id} post={post} />;
        })}
      </header>
    </div>
  );
}

export default App;
