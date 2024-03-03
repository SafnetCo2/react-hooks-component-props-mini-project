// App.jsx
import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App({ preview }) {
  const name = "Josephine Net";
  const about = "About this blog";
  const posts = [
    {
      id: 1,
      title: "My first blog",
      date: "February 24, 2024",
      preview: "Learn with me coding wow!"
    },
    {
      id: 2,
      title: "my second blog",
      date: "March 4, 2024",
      preview: "Come help me to learn"
    },
    {
      id: 2,
      title: "my second blog",
      date: "March 4, 2024",
      preview: "Love coding though still learning"
    }
  ];

  return (
    <div className="App">
      <Header name={name} />
      <About image="https://via.placeholder.com/215" about={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
