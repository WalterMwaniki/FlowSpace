import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHouseUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
  <div className="sidebar">
    <nav>
      <div className="sidebar-logo">
        <FontAwesomeIcon icon={faClock} />
        <p>PomoParty</p>
      </div>
      <SidebarItem title="User" icon={faHouseUser} />
      <SidebarItem title="User" icon={faHouseUser} />
      <SidebarItem title="User" icon={faHouseUser} />
    </nav>
  </div>
);

export default Sidebar;
