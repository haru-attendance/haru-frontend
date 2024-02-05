import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.7rem',
  marginBottom: '1rem',
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
});
