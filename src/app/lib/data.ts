import type { ShareableImg } from '@/types/ShareableImg';

export const data: ShareableImg[] = [
  {
    id: 'LTw2ld-5q4M',
    author: 'Anita Austvika',
    title: 'a vase filled with lots of flowers on top of a table',
    content: '',
    url: 'https://source.unsplash.com/-LTw2ld-5q4M/400',
  },
  {
    id: 'yjolcgNvl5Y',
    author: 'Valentin Lacoste',
    title: 'a dark tunnel with a light at the end of it',
    content: '',
    url: 'https://source.unsplash.com/-yjolcgNvl5Y/400',
  },
  {
    id: 'm7E6P5C_aEE',
    author: 'Lena Polishko',
    title: 'a small tree in the middle of a room',
    content: '',
    url: 'https://source.unsplash.com/-m7E6P5C_aEE/400',
  },
];

export const getImgs = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
