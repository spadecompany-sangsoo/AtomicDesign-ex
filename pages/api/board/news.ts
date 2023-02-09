import type { NextApiRequest, NextApiResponse } from 'next';

const news = [
  {
    id: 0,
    title: 'news1',
    desc: 'news1',
    date: '23.02.08',
  },
  {
    id: 1,
    title: 'news2',
    desc: 'news2',
    date: '23.02.08',
  },
  {
    id: 2,
    title: 'news3',
    desc: 'news3',
    date: '23.02.10',
  },
  {
    id: 3,
    title: 'news4',
    desc: 'news4',
    date: '23.02.11',
  },
  {
    id: 4,
    title: 'news5',
    desc: 'news5',
    date: '23.02.12',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(news);
}
