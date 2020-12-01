export default async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const q = url.searchParams.get("q");
  const resData = await fetch(
    `https://newsapi.org/v2/everything?q=${q}&pageSize=50&language=en&sortBy=publishedAt&apiKey=d0e29e10e21445c5914409cc09352eb4`
  );
  const data = await resData.json();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}
