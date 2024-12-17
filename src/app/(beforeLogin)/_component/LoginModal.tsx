"use client";

import style from '@/app/(beforeLogin)/_component/login.module.css';
import {useState, useEffect, ChangeEventHandler} from "react";
import {useRouter} from "next/navigation";
import ModalHeader from "@/app/(beforeLogin)/_component/ModalHeader";
import styles from "@/app/(beforeLogin)/_component/signup.module.css";

export default function LoginModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const onSubmit = () => {

  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value)
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  };

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <ModalHeader />
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={styles.modalBodyHeader}>X 가입하기</div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">아이디</label>
              <input id="id" className={style.input} value={id} onChange={onChangeId} type="text" placeholder=""/>
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">비밀번호</label>
              <input id="password" className={style.input} value={password} onChange={onChangePassword} type="password"
                     placeholder=""/>
            </div>
            <button className={style.actionButton} disabled={!id || !password}>다음</button>
          </div>
          <div className={style.message}>{message}</div>
        </form>
      </div>
    </div>
  );
}