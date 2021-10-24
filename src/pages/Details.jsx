import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";


export default function Details() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [details, setDetails] = useState({})
  useEffect(()=>{
    setDetails(dispatch(getDetails(id)))
  },[id])
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src={details.image}/>
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="px-5 text-justify">
              <p class="leading-relaxed text-lg mb-4">{details.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}