import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">cartify</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for product" />
      </div>
      <div className="navbar-action">
        <button className="navbar-btn--login">Login</button>
        <button className="navbar-btn--signup">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
