import { idText } from "typescript";
import { createActions, type Reducer } from "../connect";
import { act } from "react-dom/test-utils";

export interface FeedStateItem {
  id: number;
  text: string;
  isLiked: boolean;
}

type GeneralState = {
  FeedArray: FeedStateItem[]
}

export const feedInitialState: GeneralState = {
  FeedArray: [
    {
      id: Math.random(),
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque praesentium ab aut consequatur facere quaerat eveniet provident. Tenetur quibusdam facere nam! Saepe facere distinctio repellat quo cumque officia voluptatum dolore!",
      isLiked: false,
    },
  ]
};

export const actions = createActions({
  addFeed: () => ({ //добавляет "старые" записи
    id: Math.random(),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus excepturi ab officia voluptatibus reiciendis saepe reprehenderit quos est quia. Inventore necessitatibus error est facere explicabo iusto nisi quia ut?"
  }),

  addPost: (payload: string) => ({
      id: Math.random(),
      text: payload
    }),

  deletePost: (payload: number) => 
    payload
  ,

  editPost: (payload: FeedStateItem) => ({
    id: payload.id,
    text: payload.text
  }), 

  setLike: (payload: FeedStateItem) => 
    payload
})

export const reducer: Reducer<{ Feed: typeof feedInitialState }> = (state, action) => {
  if (action.type === "addFeed") {
    return {
      ...state,
      Feed: {
        ...state.Feed,
        FeedArray: [...state.Feed.FeedArray, action.payload]
      }
    };
  }
  if (action.type === "addPost") {
    return {
      ...state,
      Feed: {
        ...state.Feed,
        FeedArray: [action.payload, ...state.Feed.FeedArray]
      }
    };
  }
  if (action.type === "deletePost") {
    return {
      ...state,
      Feed: {
        ...state.Feed,
        FeedArray: state.Feed.FeedArray.filter(el => el.id !== action.payload)
      }
    }
  }
  if (action.type === "editPost") {
    const trgt = state.Feed.FeedArray.find(el => el.id === action.payload.id) //нашли объект с id
    
    trgt && (trgt.isLiked = !action.payload.isLiked)

    return {
      ...state,
      Feed: {
        ...state.Feed,
        FeedArray: [...state.Feed.FeedArray]
      }
    }
  }

  if (action.type === "setLike") {
    const trgt = state.Feed.FeedArray.find(el => el.id === action.payload.id) //нашли объект с id и text
    
    trgt && (trgt.isLiked = !action.payload.isLiked)

    return {
      ...state,
      Feed: {
        ...state.Feed,
        FeedArray: [...state.Feed.FeedArray]
      }
    }
  }

  return state;
};

/*
const deleteFeedCreator = (payload: FeedStateItem) => {
  return {
    type: 'delete',
    payload
  }
}
*/
