import {ReactNode} from "react";
import styles from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo.png"
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import PremiumSection from "@/app/(afterLogin)/_component/PremiumSection";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";
import RightHeader from "@/app/(afterLogin)/_component/RightHeader";

type Props = { children: ReactNode, modal: ReactNode; }
export default function AfterLoginLayout({children, modal}: Props) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.leftSectionWrapper}>
          <section className={styles.leftSection}>
            <div className={styles.leftSectionFixed}>
              <Link className={styles.logo} href="/home">
                <div className={styles.logoPill}>
                  <Image src={Logo} alt={"logo"} width={30} height={30}></Image>
                </div>
              </Link>
              <nav>
                <ul>
                  <NavMenu/>
                </ul>
                <Link href="/compose/tweet" className={styles.postButton}>
                  <span>게시하기</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <path
                        d="M 23 3 c -6.62 -0.1 -10.38 2.421 -13.05 6.03 C 7.29 12.61 6 17.331 6 22 h 2 c 0 -1.007 0.07 -2.012 0.19 -3 H 12 c 4.1 0 7.48 -3.082 7.94 -7.054 C 22.79 10.147 23.17 6.359 23 3 Z m -7 8 h -1.5 v 2 H 16 c 0.63 -0.016 1.2 -0.08 1.72 -0.188 C 16.95 15.24 14.68 17 12 17 H 8.55 c 0.57 -2.512 1.57 -4.851 3 -6.78 c 2.16 -2.912 5.29 -4.911 9.45 -5.187 C 20.95 8.079 19.9 11 16 11 Z M 4 9 V 6 H 1 V 4 h 3 V 1 h 2 v 3 h 3 v 2 H 6 v 3 H 4 Z"></path>
                    </g>
                  </svg>
                </Link>
              </nav>
              <LogoutButton/>
            </div>
          </section>
        </header>
        <div className={styles.rightSectionWrapper}>
          <div className={styles.rightSectionInner}>
            <main className={styles.main}>{children}</main>
            <section className={styles.rightSection}>
              <RightHeader/>
              <PremiumSection/>
              <TrendSection/>
              <div className={styles.followRecommend}>
                <h3>팔로우 추천</h3>
                <FollowRecommend/>
                <FollowRecommend/>
                <FollowRecommend/>
                <FollowRecommend/>
                <FollowRecommend/>
                <FollowRecommend/>
              </div>
            </section>
          </div>
        </div>
        {modal}
      </div>
    </>
  );
}