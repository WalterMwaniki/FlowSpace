import SidebarItem from "./SidebarItem";
import ThemeChanger from "./Themechanger";
import {
  HomeIcon,
  SessionIcon,
  GamesIcon,
  StatsIcon,
  SettingsIcon,
  ThemeToggleIcon,
} from "./icons";

import styles from "../styles/sidebar.module.scss";

const Sidebar = () => (
  <div>
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <p>FlowSpace</p>
      </div>
      <div className={styles.nav_items}>
        <SidebarItem label="Home" icon={<HomeIcon />} isSelected={true} />
        <SidebarItem
          label="Session"
          icon={<SessionIcon />}
          isSelected={false}
        />
        <SidebarItem label="Games" icon={<GamesIcon />} isSelected={false} />
        <SidebarItem label="Stats" icon={<StatsIcon />} isSelected={false} />
        <SidebarItem
          label="Settings"
          icon={<SettingsIcon />}
          isSelected={false}
        />
      </div>
      <div className={styles.nav_footer}>
        <ThemeChanger />
        <div className={styles.user}>
          <p>@Faraja</p>
        </div>
      </div>
    </nav>
  </div>
);

export default Sidebar;
