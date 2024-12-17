import styles from './profile.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";

export default function Profile() {
  const user = {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image: './logo.png',
  };

  return (
    <main className={styles.main}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <BackButton/>
          <h3 className={styles.headerTitle}>{user.nickname}</h3>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.userZone}>
          <div className={styles.userImage}>
            <img src={user.image} alt={user.id}/>
          </div>
          <div className={styles.userName}>
            <div>{user.nickname}</div>
            <div>@{user.id}</div>
          </div>
          <button className={styles.followButton}>팔로우</button>
        </div>
        <div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </main>
  )
}