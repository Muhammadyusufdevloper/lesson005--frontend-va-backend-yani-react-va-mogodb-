import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HomeComponents = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
  const form = (e) => {
    e.preventDefault();
    let user = { username, password };
    setLoading(true);
    axios
      .post(`/auth/login`,user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin/product")
      })
      .catch((error) => {
        console.log(error);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };    
  return (
    <div className="homeLogin">
      <form onSubmit={form} className="homeLogin__form">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="homeLogin__input"
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="homeLogin__input"
          type="password"
          placeholder="Password"
        />
        <button disabled={loading}>{loading ? "Loading..." : "Log in"}</button>
      </form>
    </div>
  );
};

export default HomeComponents;
