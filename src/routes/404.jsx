import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="menu-wrapper">
      <div className="menu">
        <h1>404</h1>
        <p className="font-subtitle">Page not found.</p>
        <p>We're in the deep parts of the ocean.</p>
        <Link to="/">
          <button>Go to Home page?</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
