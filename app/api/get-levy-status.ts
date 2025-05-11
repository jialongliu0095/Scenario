export default async function handler(req, res) {
  const { ownerId } = req.query;
  const levyStatus = {
    ownerId,
    paid: true,
    dueDate: "2025-06-01"
  };
  res.status(200).json(levyStatus);
}