'use client'

import styles from '../styles/sidebar.module.scss';
import { useRouter } from 'next/navigation';

interface sidebarItem_props { label: string, icon: React.ReactNode };

const SidebarItem = ({ label, icon }: sidebarItem_props): JSX.Element => {

  const router = useRouter();

  const handleClick = () => {
    if (label === 'Home') {
      router.push('/');
    }
    else {
      router.push(`/${label.toLowerCase()}`);
    }

  };

  return (
    <div className={styles.item} onClick={handleClick} >
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default SidebarItem;
