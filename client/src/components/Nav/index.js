import React from "react";

function Nav() {
  return (
    <nav className="nav nav-pills nav-justified">
      <a className="nav-link" href="/">
        Google Books
      </a>
      <a className="nav-link" href="/">
        Search
      </a>
      <a className="nav-link" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
