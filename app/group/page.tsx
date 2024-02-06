'use client';
import { Button, Divider, Drawer, Flex, Layout, List, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Image from 'next/image';
import Card from './components/card/card';
import { vars } from '../styles/theme.css';
import { useState } from 'react';

type Props = {};

const data = ['2024.01.23', '2024.01.24', '2024.01.25', '2024.01.26'];

const Group = ({}: Props) => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  const openDrawer = () => {
    setOpen(true);
  };

  return (
    <Layout style={{ height: '100vh', position: 'relative' }}>
      <Header style={{ background: 'white', padding: '1rem 2rem' }}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="0.5rem" onClick={openDrawer}>
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

      <Drawer
        title="Club"
        placement="left"
        width={320}
        closable={true}
        onClose={closeDrawer}
        open={open}
        key="Club Drawer"
        getContainer={false}
        style={{ borderRadius: '0 0.5rem 0.5rem 0' }}
      >
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <Flex vertical gap="0.5rem">
            {['A Club', 'B Club', 'C Club'].map((item) => (
              <Flex gap="0.5rem" align="center">
                <Image src="/logo-check.svg" alt="logo-check" width={32} height={24} />
                <Typography.Text strong>{item}</Typography.Text>
              </Flex>
            ))}
          </Flex>
          <Flex vertical gap="0.5rem" style={{ marginBottom: '0px' }}>
            <Button type="primary" size="large">
              그룹 생성
            </Button>
            <Button type="primary" size="large">
              환경 설정
            </Button>
          </Flex>
        </Flex>
      </Drawer>
    </Layout>
  );
};

export default Group;
