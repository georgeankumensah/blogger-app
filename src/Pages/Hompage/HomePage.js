import React, { useState,useEffect } from "react";
// import { v4 as uuid } from "uuid";
import BlogList from "../../Components/blogList-temp/BlogList";

const HomePage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "first blog",
      author: "king james",
      content: "the is the first blog content",
    },
    {
      id: 2,
      title: "Second blog",
      author: "king james",
      content: "the is the first blog content",
    },
    {
      id: 3,
      title: "Third blog",
      author: "king james",
      content: "the is the first blog content",
    },
    {
      id: 4,
      title: "fourth blog",
      author: "king james",
      content: "the is the first blog content",
    },
    {
      id: 5,
      title: "fifth blog",
      author: "king james",
      content: "the is the first blog content",
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(()=>{
    console.log("useEffect worked")
  },[])
  return (
    <div className="homepage">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};
export default HomePage;