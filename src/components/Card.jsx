import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import numberToDay from "../../helpers/numberToDay";


export default function Card() {
  const 
  
  return (
    <div class="p-4">
          <div class="h-full border-2 border-gray-400 border-opacity-60 bg-gray-500 bg-opacity-20 rounded-lg overflow-hidden">
            <div class="lg:h-48 md:h-36 w-full object-cover object-center" style={{backgroundImage: `url("${details.image}")`}}/>
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{details.title}</h1>
              <div class="flex">
                <p class="leading-relaxed mb-3 w-2/12">
                  Published
                </p>
                <p class="w-1/12">
                  :
                </p>
                <p class="w-6/12">
                  {details.published_at}
                </p>
              </div>
              <div class="flex">
                <p class="leading-relaxed mb-3 w-2/12">
                  Expired
                </p>
                <p class="w-1/12">
                  :
                </p>
                <p class="w-6/12">
                  {numberToDay(details.pub,details.expired_at)}
                </p>
              </div>
              <div class="flex items-center flex-wrap ">
                <button onClick={()=> useHistory().push(`/articles/${details.id}`)} class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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