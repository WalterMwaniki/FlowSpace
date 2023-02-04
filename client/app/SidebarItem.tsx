import styles from '../styles/sidebar.module.scss';


interface sidebarItem_props { label: string, icon: React.ReactNode };

const SidebarItem = ({label, icon}: sidebarItem_props): JSX.Element => {
  return (
    <div className={styles.item}>
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default SidebarItem;
