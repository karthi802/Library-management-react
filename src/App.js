import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Library</h1>
        <input type="text" placeholder="Search books..." />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;
