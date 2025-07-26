import crypto from 'crypto';

const TOKEN = "TOKEN_FOR_DNCLTECHZONE_EBAY_PLATFORM_2025";
const ENDPOINT = "https://your-deployed-url.vercel.app/ebay/account-deletion";

export default function handler(req, res) {
  if (req.method === 'GET' && req.query.challenge_code) {
    const challenge = req.query.challenge_code;
    const hash = crypto.createHash('sha256');
    hash.update(challenge + TOKEN + ENDPOINT);
    const challengeResponse = hash.digest('hex');
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ challengeResponse });
  }

  if (req.method === 'POST') {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(TOKEN);
  }

  res.status(405).send('Method Not Allowed');
}
