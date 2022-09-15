import { Link } from "react-router-dom";

import "@/styles/routes/index.css";

function Index() {
  return (
    <>
      <div className="menu-wrapper">
        <div className="menu">
          <div className="centered grow flex-end stretch">
            <h1>ada</h1>
            <p className="font-subtitle">Surfboards</p>
          </div>

          <div className="grow flex-start stretch px-4">
            <Link to="/products">
              <button className="stretch mb-1 blue p-2">BUY YOUR LEGEND</button>
            </Link>
            <Link to="/about">
              <button className="stretch mb-1">About</button>
            </Link>
            <Link to="/faq">
              <button className="stretch mb-1">FAQ</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
