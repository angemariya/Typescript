import { type Reducer } from "../connect";

export interface FeedStateItem {
    id: number;
    text: string
}

type GeneralState = {
    FeedArray: FeedStateItem[]
}

export const feedInitialState: GeneralState = {
    FeedArray: [
    {
        id: Math.random(),
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque praesentium ab aut consequatur facere quaerat eveniet provident. Tenetur quibusdam facere nam! Saepe facere distinctio repellat quo cumque officia voluptatum dolore!"
    },
    ]
};


export const reducer: Reducer<{Feed: typeof feedInitialState}> = (state, action) => {
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
            FeedArray: [...state.Feed.FeedArray, action.payload]
        }
    };
    }
  return state;
};