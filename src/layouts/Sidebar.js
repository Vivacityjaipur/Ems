import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../Images/startbit-logocr.png";
import { Link, useLocation } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import { useSelector,useDispatch } from 'react-redux';

const Sidebar = () => {
  const Permission =useSelector(state=>state.Permission)
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <img src={Logo}  className="img-fluid" alt="LOGO"/>
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
      <div className="sidebar">
          { Permission.map((item, index) => <><SideBarItem key={index} item={item} /> <br/></>) }
        </div>
      {/* <nav class="sidebar card py-2 mb-4">
        <ul class="nav flex-column" id="nav_accordion">
          {Permission.map((item)=>{
            return <li class="nav-item">
		          <a class="nav-link" href="#"> {item.title} </a>
              {item.permission.length>0 && 
                <ul class="submenu collapse">
			            {item.permission.map((subitem)=>{
                  return <li><a class="nav-link" href="#">{subitem.title }</a></li> })}
		            </ul>}
	          </li>})}
        </ul>
      </nav> */}
        {/* <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav> */}
      </div>
    </div>
  );
};

export default Sidebar;
