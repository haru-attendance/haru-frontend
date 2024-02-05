'use client';
import { Button, Divider, Flex, Layout, List, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Image from 'next/image';
import Card from './components/card/card';
import { vars } from '../styles/theme.css';

type Props = {};

const data = ['2024.01.23', '2024.01.24', '2024.01.25', '2024.01.26'];

const Group = ({}: Props) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ background: 'white', padding: '1rem 2rem' }}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="0.5rem">
            <Image src="/logo-check.svg" alt="logo-check" width={32} height={24} />
            <Typography.Text strong style={{ fontSize: '1.1rem' }}>
              A Group
            </Typography.Text>
          </Flex>
          <button>
            <Image src="/button-circle.svg" alt="버튼" width={32} height={32} />
          </button>
        </Flex>
      </Header>
      <Content style={{ padding: '1rem 2rem', backgroundColor: vars.color.gray1 }}>
        <Typography.Text strong>출석부 기록</Typography.Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
          {data.map((item) => (
            <Card key={item} date={item} />
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
    </Layout>
  );
};

export default Group;
