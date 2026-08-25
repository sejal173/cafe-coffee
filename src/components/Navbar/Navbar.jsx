import "./Navbar.css";
import { Link } from "react-router";
import { House ,FileUser,UserRoundPen,CardSim} from "lucide-react";




function Navbar({active}) {
  return (
    <nav className="navbar-container">
      <div className="link-container">
        <Link to="/" className={`link-items ${active == "home" ? "active-menu" :""}`}>
        <House className="nav-icons" />
          Home
        </Link>
        <Link to="/about" className={`link-items ${active == "about" ? "active-menu" :""}`}>
        <FileUser className="nav-icons"/>
          About
        </Link>
        <Link to="/contact" className={`link-items ${active == "contact" ? "active-menu" :""}`}>
        <UserRoundPen className="nav-icons" />
          Contact
        </Link>
        <Link to="/ourservices" className={`link-items ${active == "ourservices" ? "active-menu" :""}`}>
        <CardSim className="nav-icons"/>
          OurServices
        </Link>

      </div>
      <div>
        <Link to="/login" className={`link-items ${active == "login" ? "active-menu" :""}`}>
        <FileUser className="nav-icons"/>
          Login
        </Link>
        <Link to="/signin" className={`link-items ${active == "signin" ? "active-menu" :""}`}>
        <CardSim />
          SignIn
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
