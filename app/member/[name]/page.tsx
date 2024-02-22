'use client';
import { vars } from '@/app/styles/theme.css';
import { Button, Flex, Input, Layout, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Image from 'next/image';

type Props = {};

const page = ({ params }: Props) => {
  return (
    <Layout style={{ height: '100vh', position: 'relative' }}>
      <Header style={{ background: 'white', padding: '1rem 2rem' }}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="0.5rem">
            <Image src="/logo-check.svg" alt="logo-check" width={32} height={24} />
            <Typography.Text strong style={{ fontSize: '1.8rem' }}>
              {decodeURI(params.name)}
            </Typography.Text>
          </Flex>
        </Flex>
      </Header>
      <Content
        style={{
          padding: '1rem 2rem',
          backgroundColor: vars.color.gray1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Flex vertical gap="1rem">
          <Flex vertical>
            <Typography.Text>휴대전화</Typography.Text>
            <Input value={'010-3232-2424'} />
          </Flex>
          <Flex vertical>
            <Typography.Text>나이</Typography.Text>
            <Input value={24} />
          </Flex>
        </Flex>
        <Flex vertical gap="0.4rem">
          <Button type="primary" size="large">
            개인 출석 기록
          </Button>
          <Button type="primary" size="large">
            정보 수정
          </Button>
          <Button disabled size="large">
            삭제
          </Button>
        </Flex>
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

export default page;
