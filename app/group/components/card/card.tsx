import { Typography } from 'antd';
import { container } from './card.css';
import Image from 'next/image';

type Props = {
  date: string;
};

const Card = ({ date }: Props) => {
  return (
    <div className={container}>
      <Typography.Text strong>{date}</Typography.Text>
      <Image src="/share.svg" alt="공유" width={16} height={16} />
    </div>
  );
};

export default Card;
