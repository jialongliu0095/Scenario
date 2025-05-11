import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { unit, issue, submittedBy } = req.body;
    res.status(201).json({
      message: "Request received",
      data: { unit, issue, submittedBy }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}