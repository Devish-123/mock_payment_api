function getRequestData(req) {
  if (req.method === "GET") {
    return req.query || {};
  }

  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  return {};
}

export default function handler(req, res) {
  if (!["GET", "POST"].includes(req.method)) {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({
      status: "error",
      message: "Method not allowed"
    });
  }

  const { user, product } = getRequestData(req);

  if (!user || !product) {
    return res.status(400).json({
      status: "error",
      message: "Missing user or product"
    });
  }

  const txnId = `TXN${Math.floor(100000 + Math.random() * 900000)}`;

  return res.status(200).json({
    status: "success",
    transaction_id: txnId,
    user_name: user,
    accessory: product
  });
}