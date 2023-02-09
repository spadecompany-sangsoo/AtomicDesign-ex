import type { NextApiRequest, NextApiResponse } from 'next';

const information = [
  {
    id: 0,
    title: 'information1',
    desc: 'information1',
    category: 'css',
  },
  {
    id: 1,
    title: 'information2',
    desc: 'information2',
    category: 'css',
  },
  {
    id: 2,
    title: 'information3',
    desc: 'information3',
    category: 'javascript',
  },
  {
    id: 3,
    title: 'information4',
    desc: 'information4',
    category: 'react',
  },
  {
    id: 4,
    title: 'information5',
    desc: 'information5',
    category: 'react',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(information);
}
