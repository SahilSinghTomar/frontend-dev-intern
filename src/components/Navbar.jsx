import "./navbar.css";

function Navbar({ query, setQuery }) {
  return (
    <div className="navbar">
      <div className="navbar-title">cartify</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="navbar-action">
        <button className="navbar-btn--login">Login</button>
        <button className="navbar-btn--signup">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
