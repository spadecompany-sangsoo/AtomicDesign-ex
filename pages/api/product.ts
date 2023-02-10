import type { NextApiRequest, NextApiResponse } from 'next';

const product = [
  {
    id: 0,
    name: 'Apple AirPods Max - Space 1111',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '1234',
  },
  {
    id: 1,
    name: 'Apple AirPods Max - Space 2222',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '12',
  },
  {
    id: 2,
    name: 'Apple AirPods Max - Space 3333',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '56',
  },
  {
    id: 3,
    name: 'Apple AirPods Max - Space 4444',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '457',
  },
  {
    id: 4,
    name: 'Apple AirPods Max - Space 5555',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '2',
  },
  {
    id: 5,
    name: 'Apple AirPods Max - Space 6666',
    desc: 'Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)',
    price: '9999',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(product);
}
