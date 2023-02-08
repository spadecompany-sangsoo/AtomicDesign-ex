import type { NextApiRequest, NextApiResponse } from 'next';

const information = [
  {
    id: 0,
    title: 'title1',
    desc: 'desc1',
    category: 'css',
  },
  {
    id: 1,
    title: 'title2',
    desc: 'desc2',
    category: 'css',
  },
  {
    id: 2,
    title: 'title3',
    desc: 'desc3',
    category: 'javascript',
  },
  {
    id: 3,
    title: 'title4',
    desc: 'desc4',
    category: 'react',
  },
  {
    id: 4,
    title: 'title5',
    desc: 'desc5',
    category: 'react',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(information);
}
