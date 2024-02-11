import { vars } from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: vars.color.gray3,
  borderRadius: '6px',
});
