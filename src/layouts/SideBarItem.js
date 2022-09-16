import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBarSty.css";

export default function SideBarItem({ item }) {
  const [open, setOpen] = useState(false);
  let counter = 0;
  if (item.permission) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        {item.permission.map((child, index) => {
          {
            child.allowed === true && counter++;
          }
        })}
        {counter > 0 && (
          <div className="sidebar-title">
            <span>{item.title}</span>
            <i
              className="bi-chevron-down toggle-btn"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
        )}
        <div className="sidebar-content">
          {item.permission.map(
            (child, index) =>
              counter > 0 && <SideBarItem key={index} item={child} />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <>
        {item.allowed === true && (
          <>
          <Link to={item.href} className="sidebar-item plain">{item.title}</Link>        
            <br />
          </>
        )}
      </>
    );
  }
}
