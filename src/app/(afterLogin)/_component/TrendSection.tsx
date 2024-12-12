import styles from './trendSection.module.css'
import Trend from "@/app/(afterLogin)/_component/Trend";
import Link from "next/link";

export default function TrendSection() {
  return (
    <>
      <div className={styles.trendBg}>
        <div className={styles.trend}>
          <h3>무슨 일이 일어나고 있나요?</h3>
          <Trend/>
          <Trend/>
          <Trend/>
          <div className={styles.more}>
            <Link href={"../explore"}>더 보기</Link>
          </div>
        </div>
      </div>
    </>
  );
};