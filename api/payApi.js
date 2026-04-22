export default function handler(req, res) {
  const { user, product } = req.query;

  // Validation
  if (!user || !product) {
    return res.status(400).json({
      status: "error",
      message: "Missing user or product"
    });
  }

  // Generate Transaction ID
  const txnId = "TXN" + Math.floor(100000 + Math.random() * 900000);

  res.status(200).json({
    status: "success",
    transaction_id: txnId,
    user_name: user,
    accessory: product
  });
}