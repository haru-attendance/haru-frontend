import { Typography } from 'antd';
import { container } from './card.css';

type Props = {
  date: string;
};

const Card = ({ date }: Props) => {
  return (
    <div className={container}>
      <Typography.Text strong>{date}</Typography.Text>
    </div>
  );
};

export default Card;
