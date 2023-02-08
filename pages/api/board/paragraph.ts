import type { NextApiRequest, NextApiResponse } from 'next';

const paragraph = [
  {
    id: 0,
    title: '본문 제목1',
    desc: '본문 내용1',
    writer: '작성자1',
  },
  {
    id: 1,
    title: '본문 제목1',
    desc: '본문 내용1',
    writer: '작성자1',
  },
  {
    id: 2,
    title: '본문 제목1',
    desc: '본문 내용1',
    writer: '작성자1',
  },
  {
    id: 3,
    title: '본문 제목1',
    desc: '본문 내용1',
    writer: '작성자1',
  },
  {
    id: 4,
    title: '본문 제목1',
    desc: '본문 내용1',
    writer: '작성자1',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(paragraph);
}
