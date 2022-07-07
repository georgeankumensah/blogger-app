import { Link } from "react-router-dom";
import "./BlogList.css"
const BlogList = ({blogs}) => {
  return (
    <div className="bloglist">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}><h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;