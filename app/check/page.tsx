'use client';
import { Badge, Button, Flex, FloatButton, Layout, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Image from 'next/image';
import { vars } from '../styles/theme.css';
import Card from './components/card/card';

type Props = {};

const data = ['조은찬', '김민수', '김민지', '에코'];

const page = ({}: Props) => {
  return (
    <Layout style={{ height: '100vh', position: 'relative' }}>
      <Header style={{ background: 'white', padding: '1rem 2rem' }}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="0.5rem">
            <Image src="/logo-check.svg" alt="logo-check" width={32} height={24} />
            <Typography.Text strong style={{ fontSize: '1.1rem' }}>
              2024.01.23 출석부
            </Typography.Text>
          </Flex>
        </Flex>
      </Header>
      <Content style={{ padding: '1rem 2rem', backgroundColor: vars.color.gray1 }}>
        <Typography.Text strong>구성원 목록</Typography.Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
          {data.map((item) => (
            <Card key={item} name={item} checked={true} />
          ))}
        </div>
      </Content>
      <Footer style={{ marginBottom: '0px', padding: '0.8rem 1.2rem' }}>
        <Flex justify="space-between">
          <Flex vertical align="center" gap="0.4rem">
            <Image src="/attendanceHome.svg" alt="출석기록" width={22} height={22} />
            <p>출석기록</p>
          </Flex>
          <Flex vertical align="center" gap="0.4rem">
            <Image src="/attendanceCheck.svg" alt="출석체크" width={22} height={22} />
            <p>출석체크</p>
          </Flex>
          <Flex vertical align="center" gap="0.4rem">
            <Image src="/member.svg" alt="구성원" width={22} height={22} />
            <p>구성원</p>
          </Flex>
        </Flex>
      </Footer>
      {/* <Image src="/button-circle.svg" alt="버튼" width={32} height={32} /> */}
      {/* <FloatButton
        description="방문자 추가"
        type="primary"
        icon={<Image src="/add-visitor.svg" alt="버튼" width={16} height={16} />}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '13rem',
          right: '50%',
          borderRadius: '50px',
        }}
      /> */}
      <button
        style={{
          padding: '1.5rem 2rem',
          borderRadius: '50px',
          position: 'fixed',
          bottom: '10%',
          left: '50%',
          zIndex: 100,
          backgroundColor: vars.color.brand,
          color: vars.color.gray2,
          transform: 'translateX(-50%)',
        }}
      >
        <Flex align="center" gap="0.8rem">
          <Image src="/add-visitor.svg" alt="버튼" width={16} height={16} />
          방문자 추가
        </Flex>
      </button>
    </Layout>
  );
};

export default page;
