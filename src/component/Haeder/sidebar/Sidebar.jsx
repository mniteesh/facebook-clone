import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
import React from "react";
import { useStateValue } from "../../../context/StateProvider";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const [{user}, dispatch] = useStateValue() ;


  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
};

export default Sidebar;
