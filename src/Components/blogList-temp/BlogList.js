import "./BlogList.css"
const BlogList = ({blogs,handleDelete}) => {
  return (
    <div className="bloglist">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <button type="button" onClick={()=>handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;