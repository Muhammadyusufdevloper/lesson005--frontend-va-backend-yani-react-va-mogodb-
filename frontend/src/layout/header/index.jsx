import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import menuImg from "../../assets/admin/menu.svg";
import jonesImg from "../../assets/admin/photo.svg";
import adminImg from "../../assets/admin/Logo.svg";

const Header = ({ setMenu, menu }) => {
  return (
    <>
      <div className="navbar">
        <Link
          className={`navbar__logo ${menu ? "navbar__logo__show" : ""}`}
          to={"/"}
        >
          <img src={adminImg} alt="admin logo" />
          <p>Dashboard</p>
        </Link>
        <div className="navbar__right">
          <button
            onClick={() => setMenu((prev) => !prev)}
            className="navbar__menu"
          >
            <img src={menuImg} alt="Menu img" />
          </button>
          <div className="navbar__accout">
            <p>Jones Ferdinand</p>
            <img src={jonesImg} alt="Jone img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
