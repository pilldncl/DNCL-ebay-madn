export default async function handler(req, res) {
  const token = "TOKEN_FOR_DNCLTECHZONE_EBAY_PLATFORM_2025";

  if (req.method === "POST") {
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(token);
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
