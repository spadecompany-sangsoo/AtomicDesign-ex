import type { NextApiRequest, NextApiResponse } from 'next';

const product = [
  {
    id: 0,
    name: 'Apple AirPods Max - Space',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '9999',
  },
  {
    id: 1,
    name: 'Apple AirPods Max - Space',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '9999',
  },
  {
    id: 2,
    name: 'Apple AirPods Max - Space',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '9999',
  },
  {
    id: 3,
    name: 'Apple AirPods Max - Space',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '9999',
  },
  {
    id: 4,
    name: 'Apple AirPods Max - Space',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '9999',
  },
  {
    id: 5,
    name: 'Apple AirPods Max - Space',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '9999',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(product);
}
