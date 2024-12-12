"use client"

import styles from './tab.module.css'
import {useState} from "react";

export default function Tab() {
  const [tab, setTab] = useState('recommend');

  const onClickRec = () => {
    setTab('recommend');
  }
  const onClickFol = () => {
    setTab('follows');
  }

  return (
    <div className={styles.homeFixed}>
      <div className={styles.homeTab}>
        <div
          className={`${styles.recommend}  ${tab === 'recommend' ? styles.activeTab : ''}`}
          onClick={onClickRec}
        >
          추천
          <div className={styles.tabIndicator} hidden={tab === 'follows'}></div>
        </div>
        <div
          className={`${styles.follows} ${tab === 'follows' ? styles.activeTab : ''}`}
          onClick={onClickFol}
        >
          팔로우 중
          <div className={styles.tabIndicator} hidden={tab === 'recommend'}></div>
        </div>
      </div>
    </div>
  )
};