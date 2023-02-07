import styles from "../styles/sidebar.module.scss";

interface sidebarItem_props {
  label: string;
  isSelected: boolean;
  icon: React.ReactNode;
}

const SidebarItem = ({
  label,
  isSelected,
  icon,
}: sidebarItem_props): JSX.Element => {
  if (isSelected) {
    return (
      <div className={`${styles.item} ${styles.active}`}>
        {icon}
        <p>{label}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.item}>
        {icon}
        <p>{label}</p>
      </div>
    );
  }
};

export default SidebarItem;
