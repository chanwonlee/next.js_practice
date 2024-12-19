"use client"

import styles from "./modalHeader.module.css"
import {useRouter} from "next/navigation";

export default function ModalHeader() {

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  return (
    <div className={styles.modalHeader}>
      <div className={styles.closeButton} onClick={onClickClose}>
        <svg className={styles.closeButtonSvg} width={20} viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path
              d="M 10.59 12 L 4.54 5.96 l 1.42 -1.42 L 12 10.59 l 6.04 -6.05 l 1.42 1.42 L 13.41 12 l 6.05 6.04 l -1.42 1.42 L 12 13.41 l -6.04 6.05 l -1.42 -1.42 L 10.59 12 Z"></path>
          </g>
        </svg>
      </div>
      <svg width={32} height={53} viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path
            d="M 18.244 2.25 h 3.308 l -7.227 8.26 l 8.502 11.24 H 16.17 l -5.214 -6.817 L 4.99 21.75 H 1.68 l 7.73 -8.835 L 1.254 2.25 H 8.08 l 4.713 6.231 Z m -1.161 17.52 h 1.833 L 7.084 4.126 H 5.117 Z"></path>
        </g>
      </svg>
      <div className={styles.block}></div>
    </div>
  )
};