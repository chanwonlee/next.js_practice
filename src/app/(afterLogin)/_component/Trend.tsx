import Link from "next/link";
import styles from './trend.module.css';
export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={styles.container}>
      <div className={styles.count}>대한민국에서 트렌드 중</div>
      <div className={styles.title}>Elon Musk</div>
      <div className={styles.count}>게시물 1,234 개</div>
    </Link>
  )
}