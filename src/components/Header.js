import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnReactName, setbtnReactName] = useState("Login");
  console.log("Header Render");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="loggin-btn"
            onClick={() => {
              btnReactName === "Login"
                ? setbtnReactName("Logout")
                : setbtnReactName("Login");
            }}
          >
            {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
