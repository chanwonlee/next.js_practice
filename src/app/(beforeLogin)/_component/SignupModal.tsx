"use client";

import styles from '@/app/(beforeLogin)/_component/signup.module.css';
import {useRouter} from "next/navigation";
import {ChangeEventHandler, FormEventHandler, useEffect, useState} from "react";
import ModalHeader from "@/app/(beforeLogin)/_component/ModalHeader";

export default function SignupModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File>();
  const router = useRouter();

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value)
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value)
  };

  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.target.value)
  };

  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.files && setImageFile(e.target.files[0])
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

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:9090/api/users', {
      method: 'post',
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: 'include',
    }).then((response: Response) => {
      console.log(response.status);
      if (response.status === 200) {
        router.replace('/home');
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <ModalHeader/>
          <form>
            <div className={styles.modalBody}>
              <div className={styles.modalBodyHeader}>계정을 생성하세요</div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="id">아이디</label>
                <input id="id" className={styles.input} type="text" placeholder=""
                       value={id}
                       onChange={onChangeId}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="name">닉네임</label>
                <input id="name" className={styles.input} type="text" placeholder=""
                       value={nickname}
                       onChange={onChangeNickname}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="password">비밀번호</label>
                <input id="password" className={styles.input} type="password" placeholder=""
                       value={password}
                       onChange={onChangePassword}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="image">프로필</label>
                <input id="image" className={styles.input} type="file" accept="image/*"
                       onChange={onChangeImageFile}
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.actionButton} disabled={!id || !password || !nickname}>가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>)
}