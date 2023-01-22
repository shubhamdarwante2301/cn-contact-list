import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/" className={style.logo}>
        Contact List
      </Link>
      <Link to="/addnewcontact" className={style.addBtn}>
        Add-new-contact
      </Link>
    </div>
  );
};

export default Navbar;
