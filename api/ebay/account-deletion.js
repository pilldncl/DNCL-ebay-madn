import crypto from 'crypto';

const TOKEN = "TOKEN_FOR_DNCLTECHZONE_EBAY_PLATFORM_2025";
const ENDPOINT = "https://dncl-ebay-madn.vercel.app/ebay/account-deletion";

export default function handler(req, res) {
  if (req.method === 'GET') {
    const challenge = req.query.challenge_code;
    if (!challenge) {
      return res.status(400).json({ error: "Missing challenge_code" });
    }

    const hash = crypto.createHash('sha256');
    hash.update(challenge + TOKEN + ENDPOINT);
    const challengeResponse = hash.digest('hex');

    res.setHeader("Content-Type", "application/json");
    res.status(200).end(JSON.stringify({ challengeResponse }));
    return;
  }

  if (req.method === 'POST') {
    res.setHeader("Content-Type", "text/plain");
    res.status(200).end(TOKEN); // .end() is cleaner than .send()
    return;
  }

  res.status(405).end("Method Not Allowed");
}
