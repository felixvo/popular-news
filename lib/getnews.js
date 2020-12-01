import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function GetNews(q) {
  const url = `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&apiKey=d0e29e10e21445c5914409cc09352eb4`;
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    error: error,
  };
}
