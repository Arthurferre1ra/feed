import styles from './Post.module.css';

import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Arthurferre1ra.png" />
                    <div className={styles.authorInfo}>
                        <strong>Arthur Ferreira</strong>
                        <span>Software enginner</span>
                    </div>
                </div>

                <time title='25 de outubro as 09 e 10' dateTime='2024-10-25 09:10:20'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um </p>projeto 
                    <p>que fiz no NLW Return, evento da Rocketseat. O nome </p>do projeto 
                    <p>é DoctorCare 🚀</p>
                    <p> <a href="">jane.design/doctorcare</a></p>
                    <p>
                        <a href="">#novoprojeto </a>{' '}
                        <a href="">#nlw </a>{' '}
                        <a href="">#rocketseat</a>{' '}
                    </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.CommentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}