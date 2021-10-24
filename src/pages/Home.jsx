import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { fetchArticles } from "../store/actions";

export default function HomePage() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles)

  useEffect(()=>{
    dispatch(fetchArticles())
  },[])

  const articleCards = articles.map(article => {
    return (
      <Card details={article}/>
    )
  })

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap grid grid-cols-3">
          {articleCards}
        </div>
      </div>
    </section>
  );
}
