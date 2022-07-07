import { useParams } from "react-router-dom";
import "./BlogDetails.css"
import useFetch from "../../useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { error, data:blog, isLoading } = useFetch("http://localhost:8000/blogs/"+id);
  return (
    <div className="blogdetails">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>

            </article>
        )}

    </div>
  );
};

export default BlogDetails;
