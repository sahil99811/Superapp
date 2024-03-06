import  { useState, useEffect } from "react";
import "./News.css";

const API_KEY = "d2477e6897784d4fa5a32e9acba94f49";
const DEFAULT_IMAGE ="https://static.foxnews.com/foxnews.com/content/uploads/2023/09/GettyImages-1662782212.jpg";

const News = () => {
  const [news, setNews] = useState(null);
   
  const fetchNews = async () => {
  
    try {
      const response = await fetch(
        "https://api.worldnewsapi.com/search-news?text=cricket&language=en&api-key=ee60a78608e847d0b46024a661eea384"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      const data = await response.json();
     
      const articleNo = Math.floor(Math.random() *data.news.length);
      const selectedArticle = data.news[articleNo];
      console.log(selectedArticle)
      const formattedDate = formatDate(selectedArticle.publish_date);
      selectedArticle.publishedAt = formattedDate;
      setNews(selectedArticle);
    } catch (error) {
      console.error("Error fetching news:",error);
    }
  };

  const formatDate = (dateString) => {
    const inputDate = new Date(dateString);
    return inputDate.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      {news && (
        <>
          <img className="news-img" src={news.image || DEFAULT_IMAGE} alt="news" />
          <p className="news-content">{news.text}</p>
          <div className="news-title">
            <h2>{news.title || "Title not available"}</h2>
            <span>{news.publishedAt || "Publication date not available"}</span>
          </div>
        </>
      )}
    </>
  );
};

export default News;
