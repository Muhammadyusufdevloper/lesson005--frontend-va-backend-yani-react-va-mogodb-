import React, { useState } from "react";
import "./Admin.scss";
import { NavLink, useNavigate } from "react-router-dom";
import productImg from "../../assets/admin/product.svg";
import userImg from "../../assets/admin/users.svg";
import postsImg from "../../assets/admin/posts.svg";
import contactsImg from "../../assets/admin/contacts.svg";
import agentsImg from "../../assets/admin/agents.svg";
import articelsImg from "../../assets/admin/articels.svg";
import modeImg from "../../assets/admin/mode.svg";
import logoutImg from "../../assets/admin/logout.svg";

const Sitebar = ({ menu }) => {
  let navigate = useNavigate();
  function hanelLogout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <div className={`sayidbar ${menu ? "sayidbar__show" : ""}`}>
        <ul className="sayidbar__list">
          <li className="sayidbar__item">
            <NavLink className={"sayidbar__link"} to={"product"}>
              <img src={productImg} alt="Product img" />
              <p>Products</p>
            </NavLink>
          </li>
          <li className="sayidbar__item">
            <NavLink className={"sayidbar__link"} to={"users"}>
              <img src={userImg} alt="user img" />
              <p>Users</p>
            </NavLink>
          </li>
          <li className="sayidbar__item">
            <NavLink className={"sayidbar__link"} to={"posts"}>
              <img src={postsImg} alt="posts Img" />
              <p>Posts</p>
            </NavLink>
          </li>
          <li className="sayidbar__item">
            <NavLink className={"sayidbar__link"} to={"contact"}>
              <img src={contactsImg} alt="Contacts Img" />
              <p>Contacts</p>
            </NavLink>
          </li>
          <li className="sayidbar__item">
            <NavLink className={"sayidbar__link"} to={"articl"}>
              <img src={agentsImg} alt="Agents Img" />
              <p>Agents</p>
            </NavLink>
          </li>
          <li className="sayidbar__item">
            <NavLink className={"sayidbar__link"} to={"agent"}>
              <img src={articelsImg} alt="Articels Img" />
              <p>Articles</p>
            </NavLink>
          </li>
        </ul>
        <div className="sayidbar__btns">
          <button className="sayidbar__modal">
            <img src={modeImg} alt="Modal img" />
            <p>Change mode</p>
          </button>
          <button onClick={hanelLogout} className="sayidbar__logout">
            <img src={logoutImg} alt="Logout img" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sitebar;
