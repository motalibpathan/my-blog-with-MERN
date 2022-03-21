import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCommentForm from "../components/AddCommentForm";
import Articles from "../components/Articles";
import CommentList from "../components/CommentList";
import articles from "./article-content";
import NotFound from "./NotFound";

const Article = () => {
  console.log(process.env.REACT_APP_DB_ADDRESS);
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${process.env.REACT_APP_DB_ADDRESS}/api/articles/${name}`,
        { withCredentials: true }
      );
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
    return () => {};
  }, [name]);

  if (!article) return <NotFound />;
  const othersArticles = articles.filter((article) => article.name !== name);

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article?.title}
      </h1>
      {article?.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}

      <CommentList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

      <h1 className="sm:text-2xl text-xl font-bold mt-4 mb-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={othersArticles} />
      </div>
    </>
  );
};

export default Article;
