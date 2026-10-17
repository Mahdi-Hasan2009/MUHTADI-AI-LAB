export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.GROQ_KEY
    },
    body: JSON.stringify(req.body)
  });
  const data = await r.json();
  res.status(r.status).json(data);
}
