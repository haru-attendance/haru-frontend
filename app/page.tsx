'use client';
import { Button, Divider, Input } from 'antd';
import { buttonContainer, container, inputContainer } from './page.css';

export default function Home() {
  return (
    <main className={container}>
      <section className={inputContainer}>
        <Input placeholder="아이디" size="large" />
        <Input.Password placeholder="패스워드" size="large" />
      </section>
      <Button type="primary" size="large">
        로그인
      </Button>
      <div className={buttonContainer}>
        <Button type="text">이메일 찾기</Button>
        <Divider type="vertical" />
        <Button type="text">비밀번호 찾기</Button>
        <Divider type="vertical" />
        <Button type="text">회원가입</Button>
      </div>
    </main>
  );
}
