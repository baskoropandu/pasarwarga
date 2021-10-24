import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getDetails } from "../store/actions";

export default function Details() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [details, setDetails] = useState({})
  useEffect(()=>{
    const details = dispatch(getDetails(id))
    setDetails(details)
  },[id])
  console.log(details);
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={details.image}/>
          </div>
          <p className="text-4xl font-bold my-10 mx-5">{details.title}</p>
          <div className="flex flex-col sm:flex-row">
            <div className="px-5 text-justify flex flex-col gap-5 text-xl" dangerouslySetInnerHTML={{__html: `${details.content}`}}>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}