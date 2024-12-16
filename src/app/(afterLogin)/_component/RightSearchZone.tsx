"use client"

import styles from "@/app/(afterLogin)/layout.module.css";
import {usePathname} from "next/navigation";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

export default function RightSearchZone() {
  const pathName = usePathname()
  if (pathName === '/explore') return null

  return (
    <div>
      <SearchForm/>
      <div className={styles.rightSectionBlock}></div>
    </div>
  )
}