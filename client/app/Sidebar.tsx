import SidebarItem from "./SidebarItem";
import { HomeIcon, SessionIcon, GamesIcon, StatsIcon, SettingsIcon } from "./icons"

import styles from '../styles/sidebar.module.scss';

const Sidebar = () => (
  <div>
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <p>FlowSpace</p>
      </div>
      <div className={styles.nav_items}>
        <SidebarItem label="Home" icon={<HomeIcon width="1.7em" fill="#6750A4" />} />
        <SidebarItem label="Session" icon={<SessionIcon width="1.7em" fill="#6750A4"/>} />
        <SidebarItem label="Games" icon={<GamesIcon width="1.8em" fill="#6750A4"/>} />
        <SidebarItem label="Stats" icon={<StatsIcon width="1.7em" fill="#6750A4"/>} />
        <SidebarItem label="Settings" icon={<SettingsIcon width="1.7em" fill="#6750A4"/>} />
      </div>
      <div className={styles.user}>
        <p>@Faraja</p>
      </div>
    </nav>
  </div>
);

export default Sidebar;
