'use client'

import styles from '../styles/sidebar.module.scss';
import { useRouter } from 'next/navigation';

interface sidebarItem_props { label: string, icon: React.ReactNode };

const SidebarItem = ({ label, icon }: sidebarItem_props): JSX.Element => {

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (label === 'Home') {
      router.push('/');
    }
    else {
      router.push(`/${label.toLowerCase()}`);
    }
    
    const items = document.getElementsByClassName(styles.item);
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(styles.active);
    }
    e.currentTarget.classList.add(styles.active);
    
  };

  return (
    <div className={styles.item} onClick={handleClick} >
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default SidebarItem;
