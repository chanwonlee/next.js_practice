import styles from "./explore.module.css";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <SearchForm/>
        </div>
      </div>
      <div className={styles.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
        <Trend/>
      </div>
    </main>
  )
}
