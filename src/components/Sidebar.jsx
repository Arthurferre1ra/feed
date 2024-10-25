import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>

        <img className={styles.avatar} src="https://github.com/Arthurferre1ra.png" />

        <strong>Arthur Ferreira</strong>
        <span>Software enginner</span>
      </div>
      <footer>
        <a href="#">
            <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}