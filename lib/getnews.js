import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function GetNews(q) {
  const url = `https://popular-news.vercel.app/api/search?q=${q}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    error: error,
  };
}
