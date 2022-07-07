import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link className="logo" to="/">
          Blogger.com
        </Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
