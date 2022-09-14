import Vector from "@/assets/Vector.svg";
import Wave from "@/assets/wave_1.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="surfboard-wrapper">
      {location.pathname === "/" ? <img src={Vector} alt="" className="surfboard" /> : (
        <h1 className="px-2"><Link to="/">ada</Link></h1>
      )}
      <img src={Wave} alt="" className="wave" />
    </header>
  );
}

export default Header;
