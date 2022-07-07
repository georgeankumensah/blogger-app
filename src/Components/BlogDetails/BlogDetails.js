import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";
import useFetch from "../../useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { error, data: blog, isLoading } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const handleDelete = () => {
    console.log("handleDelete worked");
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      setTimeout(()=>{
      navigate("/");},500)
    });
  };
  return (
    <div className="blogdetails">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
