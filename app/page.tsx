'use client';
import { Button, Divider, Flex, Input } from 'antd';
import { buttonContainer, container, inputContainer } from './page.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={container}>
      <Flex justify="center">
        <Image src="/logo.svg" alt="logo" width={125} height={125} />
      </Flex>
      <section className={inputContainer}>
        <Input placeholder="아이디" size="large" />
        <Input.Password placeholder="패스워드" size="large" />
      </section>
      <Button type="primary" size="large">
        <Link href="/group">로그인</Link>
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
