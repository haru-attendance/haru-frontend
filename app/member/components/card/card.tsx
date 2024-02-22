import { Checkbox, Typography } from 'antd';
import { container } from './card.css';

type Props = {
  name: string;
};

const Card = ({ name }: Props) => {
  return (
    <div className={container}>
      <Typography.Text strong>{name}</Typography.Text>
    </div>
  );
};

export default Card;
