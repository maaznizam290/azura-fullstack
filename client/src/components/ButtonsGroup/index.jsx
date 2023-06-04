import React from "react";
import { NavLink } from "react-router-dom";

const ButtonsGroup = ({ links }) => {
  return (
    <div className="btn-group">
      {links?.map((item, i) => (
        <NavLink
          key={i}
          to={item?.path}
          className={(isActive) =>
            "btn-group-btn" + (isActive.isActive ? " bg-primary" : " ")
          }
        >
          {item?.name}
        </NavLink>
      ))}
    </div>
  );
};

export default ButtonsGroup;
