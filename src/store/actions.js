import { ADD_ARTICLES } from "./actionTypes";
import {useSelector} from 'react-redux'

function addArticles(payload) {
  const action = {
    type: ADD_ARTICLES,
    payload
  }
  return action
}

export function fetchArticles() {
  return function (dispatch) {
    fetch('https://mocki.io/v1/f18c2b81-0b4e-48b8-a6da-cd369e866c41')
      .then(response => response.json())
      .then(({data}) => {
        dispatch(addArticles(data))
      })
      .catch(err => console.log(err))
  }
}

export function getDetails(id) {
 return function (dispatch, getState) {
   const articles = getState().articles
   const details = articles.filter(article => +article.id === +id)
   return details[0]
 }
}
