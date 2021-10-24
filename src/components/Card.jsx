import React from "react";
import { useHistory } from "react-router";
import numberToDay from "../helpers/numberToDay";


export default function Card({details}) { 
  const history = useHistory()
  function handleLearnMore() {
    history.push(`/articles/${details.id}`)
  }
  return (
    <div className="p-4">
          <div className="h-full border-2 border-gray-400 border-opacity-60 bg-white rounded-2xl overflow-hidden">
            <div className="lg:h-64 md:h-48 w-full object-cover object-center" style={{backgroundImage: `url("${details.image}")`, backgroundSize: `cover`}}/>
            <div className="p-6">
              <h1 className="title-font text-2xl font-bold font-medium text-gray-900 mb-3">{details.title}</h1>
              <div className="flex text-xl">
                <p className="leading-relaxed w-2/12">
                  Published
                </p>
                <p className="w-1/12">
                  :
                </p>
                <p className="w-6/12">
                  {details.published_at}
                </p>
              </div>
              <div className="flex text-xl">
                <p className="leading-relaxed w-2/12">
                  Expired
                </p>
                <p className="w-1/12">
                  :
                </p>
                <p className="w-6/12">
                  {numberToDay(details.pub,details.expired_at)}
                </p>
              </div>
              <div className="flex items-center flex-wrap ">
                <button onClick={handleLearnMore} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
    </div>
  );
}