import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '14px 24px',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const banner = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});

const columnText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const bannerImg = style({
  borderRadius: '1rem',
  overflow: 'hidden',
});

const bannerAccount = style({
  padding: '8px 12px',
  backgroundColor: '#F3F4F5',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '6px',
});

const rowSmall = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'space-between',
});

const btmContent = style({
  padding: 0,
});

const botContainer = recipe({
  base: {
    border: '2px solid #F2F3F5',
    padding: '1rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'all .2s ease-in-out',
  },
  variants: {
    connected: {
      true: {
        backgroundColor: '#F2F3F5',
      },
    },
  },
});

const box = style({
  backgroundColor: '#F5F5F8',
  borderRadius: '1rem',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const bsSt = {
  bottomBtn,
  container,
  banner,
  columnText,
  bannerImg,
  bannerAccount,
  rowSmall,
  row,
  btmContent,
  botContainer,
  box,
};
