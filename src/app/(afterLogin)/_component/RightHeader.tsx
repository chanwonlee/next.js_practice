"use client"

import styles from "@/app/(afterLogin)/layout.module.css";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";
import {usePathname} from "next/navigation";

export default function RightHeader() {
  const pathName = usePathname()
  if (pathName === '/explore') return null

  return (
    <div className={styles.rightSectionHeaderWrapper}>
      <div className={styles.rightSectionHeader}>
        <RightSearchZone/>
      </div>
    </div>
  )
}