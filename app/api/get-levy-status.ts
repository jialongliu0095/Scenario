import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ownerId } = req.query;
  

  const levyStatus = {
    ownerId,
    paid: true,
    dueDate: "2025-06-01"
  };
  
  res.status(200).json(levyStatus);
}