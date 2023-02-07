import SidebarItem from "./SidebarItem";
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
        <SidebarItem
          label="Home"
          icon={<HomeIcon  />}
        />
        <SidebarItem
          label="Session"
          icon={<SessionIcon />}
        />
        <SidebarItem
          label="Games"
          icon={<GamesIcon />}
        />
        <SidebarItem
          label="Stats"
          icon={<StatsIcon />}
        />
        <SidebarItem
          label="Settings"
          icon={<SettingsIcon />}
        />
      </div>
      <div className={styles.nav_footer}>
        <div className={styles.theme}>
        <button
          className="theme-toggle"
          id="theme-toggle"
          title="Toggles light & dark"
          aria-label="auto"
          aria-live="polite"
        >
          <ThemeToggleIcon />
          </button>
          <p>Theme</p>
        </div>
        <div className={styles.user}>
          <p>@Faraja</p>
        </div>
      </div>
    </nav>
  </div>
);

export default Sidebar;
