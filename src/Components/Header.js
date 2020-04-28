import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const styles = { color: "#F15B2f" };

  return (
    <nav className="">
      <NavLink to="/" activeStyle={styles} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={styles}>
        ST_cards
      </NavLink>
      {" | "}
      <NavLink to="/others" activeStyle={styles}>
        Others
      </NavLink>
    </nav>
  );
}
