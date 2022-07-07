import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Hompage/HomePage";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "./Pages/CreateBlog/CreateBlog";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/create" element={<CreateBlog/>}/>
        <Route exact path="/blogs/:id" element={<BlogDetails/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
