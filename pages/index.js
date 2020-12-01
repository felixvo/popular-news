import Nav from "../components/nav";
import GetNews from "../lib/getnews";

import { useState } from "react";
export default function IndexPage() {
  let qCached = "bitcoin";
  if (process.browser) {
    qCached = localStorage.getItem("q");
  }
  const [q, setQ] = useState(qCached);
  const [currentQ, setCurrentQ] = useState(qCached);
  const { data, error } = GetNews(q);
  return (
    <div>
      <Nav />
      <div className="py-20 dark:text-gray-100 max-w-4xl mx-auto font-sans">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100 pb-10">
          Latest News of{" "}
          <input
            className=" text-gray-700"
            onChange={(e) => {
              setCurrentQ(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                setQ(currentQ);
                if (process.browser) {
                  localStorage.setItem("q", currentQ);
                }
              }
            }}
            type="text"
            value={currentQ}
          />
        </h1>
        <div className="flex items-center">
          <ul>
            {data &&
              data.articles.map((article) => {
                return (
                  <li key={article.url} className="mb-4 p-4">
                    <div>
                      <img
                        className="max-w-xs mx-auto"
                        src={article.urlToImage}
                      ></img>
                    </div>
                    <h3 className="text-2xl text-bold hover:underline">
                      <a href={article.url}>{article.title}</a>
                    </h3>
                    <div>{article.description}</div>
                    <div className="text-sm italic">{article.publishedAt}</div>
                    <div></div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
