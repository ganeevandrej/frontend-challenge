import React from "react";
import { NavLink } from "react-router-dom";
import { ILinkApp } from "../../models/props/ILintApp";

export const LinkApp: React.FC<ILinkApp> = ({ href, name }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {name}
    </NavLink>
  );
};
