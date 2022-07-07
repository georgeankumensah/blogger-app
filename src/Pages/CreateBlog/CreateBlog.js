import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./CreateBlog.css";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Amos");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    console.log(blog);
    setIsPending(true);
    fetch(
      "http://localhost:8000/blogs",{
        method: "POST",
        headers: {
          "content-type": "application/json"},
          body: JSON.stringify(blog),
        }
        ).then(() => {
            console.log("submitted");
            setIsPending(false);
            setTimeout(()=>{navigate("/")
            },500)
          });
    
    setTitle("");
    setBody("");
    setAuthor("Amos");
  };
  return (
    <div className="createblog">
      <h2>add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author:</label>
        <select
          className="select"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Amos">Amos</option>
          <option value="Yvonne">Yvonne</option>
          <option value="Freeman">Freeman</option>
          <option value="Joe">Joe</option>
        </select>
        {!isPending && <button>CREATE BLOG</button>}
        {isPending && <button>Processing...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
