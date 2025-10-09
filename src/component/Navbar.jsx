import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      console.log("we click this key");
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://i.pinimg.com/736x/94/8c/7f/948c7f31df5eb63955907221228842d7.jpg"
          onClick={() => navigate("/")}
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(e) => search(e)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
