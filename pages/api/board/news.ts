import type { NextApiRequest, NextApiResponse } from 'next';

const news = [
  {
    id: 0,
    title: 'title1',
    desc: 'desc1',
    date: '23.02.08',
  },
  {
    id: 1,
    title: 'title2',
    desc: 'desc2',
    date: '23.02.08',
  },
  {
    id: 2,
    title: 'title3',
    desc: 'desc3',
    date: '23.02.10',
  },
  {
    id: 3,
    title: 'title4',
    desc: 'desc4',
    date: '23.02.11',
  },
  {
    id: 4,
    title: 'title5',
    desc: 'desc5',
    date: '23.02.12',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(news);
}
