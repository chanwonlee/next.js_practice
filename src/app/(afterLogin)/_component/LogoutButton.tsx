"use client"

import styles from "./logoutButton.module.css";
import Image from "next/image";

export default function LogoutButton() {
  const me = { // 임시로 내 정보 있는것처럼
    id: 'ChQazpoi0g',
    nickname: 'ch lee',
    image: '/logo.png',
  }

  const onLogout = () => {
    console.log("logout");
  };

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <Image src={me.image} alt={me.id} width={40} height={40} />
      </div>
      <div className={styles.logOutUserName}>
        <div className={styles.nickname}>{me.nickname}</div>
        <div className={styles.id}>@{me.id}</div>
      </div>
    </button>
  )
}