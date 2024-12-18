"use client"

import {usePathname} from "next/navigation";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

export default function RightSearchZone() {
  const pathName = usePathname()
  if (pathName === '/explore') return null

  return (
    <>
      <div style={{marginBottom: 60, width: 'inherit', paddingTop: '12px'}}>
        <SearchForm/>
      </div>
    </>
  )
}