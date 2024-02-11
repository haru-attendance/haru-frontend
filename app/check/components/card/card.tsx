import { Checkbox, Typography } from 'antd';
import { container } from './card.css';

type Props = {
  name: string;
  checked: boolean;
};

const Card = ({ name, checked }: Props) => {
  return (
    <div className={container}>
      <Typography.Text strong>{name}</Typography.Text>
      <Checkbox checked={checked} />
    </div>
  );
};

export default Card;
