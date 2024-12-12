import styles from './premiumSection.module.css';
import Link from "next/link";

export default function PremiumSection() {
  return (
    <div className={styles.container}>
      <h2>
        Premium 구독하기
      </h2>
      <span>
          구독하여 새로운 기능을 이용해 보세요. 자격을 충족하 는 경우 수익 배분금도 받을 수 있습니다.
      </span>
      <Link href="/" className={styles.button}>구독하기</Link>
    </div>

  )
};