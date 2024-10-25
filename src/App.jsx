import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css'

export function App() {

  return (
   <div>
    <Header />

    <div className={styles.wrapper}>
    <Sidebar />
    <main>
     <Post
      author = "Arthur Ferreira"
      content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, possimus! Numquam mollitia alias voluptate eligendi, impedit culpa animi? Esse pariatur ipsam quae cumque veniam voluptatem, fugit expedita quod delectus nostrum."
     />

<Post
      author = "Arthur Ferreira"
      content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, possimus! Numquam mollitia alias voluptate eligendi, impedit culpa animi? Esse pariatur ipsam quae cumque veniam voluptatem, fugit expedita quod delectus nostrum."
     />
     </main>
     </div>
   </div>
  )
}

