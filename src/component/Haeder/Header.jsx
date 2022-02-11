import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { useStateValue } from "../../context/StateProvider";
import "./Haeder.css";

const Header = () => {
  const [{user}, dispatch] = useStateValue() ;
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://i.pinimg.com/564x/da/3c/91/da3c9115cac7dd3487a52565f760897d.jpg"
          alt=""
          className="logo"
        />
        <div className="header_input">
          <Search />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      <div className="header_center">
        <div className="header_option header_option--active">
          <Home fontSize="large" />
        </div>
        <div className="header_option">
          <Flag fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4 className="avtar_name">{user.displayNAme}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
