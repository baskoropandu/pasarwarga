import {ADD_ARTICLES} from './actionTypes'

const initialState = {
    articles: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      
      let articles = state.articles
      articles = action.payload
      const newState = {
          ...state,
          articles
      }
      return newState;
    default: 
      return state		
  }
}