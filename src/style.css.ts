import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#FFFFFF',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const rowText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const box2 = style({
  display: 'flex',
  padding: '1rem 12px',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F6F6FD',
});
const stepStyle = style({});

globalStyle(`${stepStyle} > div > div > div:first-child`, {
  backgroundColor: 'var(--color-light-neutral-translucent-1300)',
  color: 'var(--color-light-text-primary-inverted)',
});

const box = style({
  display: 'flex',
  padding: '12px 1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F6F6FD',
});

const rowSb = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const stockRow = style({
  padding: '12px 8px',
  borderRadius: '1rem',
  backgroundColor: '#F2F3F5',
});

export const appSt = {
  container,
  rowText,
  bottomBtn,
  box2,
  box,
  stepStyle,
  rowSb,
  stockRow,
};
