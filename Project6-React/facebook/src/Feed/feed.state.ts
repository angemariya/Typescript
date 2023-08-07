import moment from 'moment';
import { createSlice} from "../connect";

export interface FeedStateItem {
  id: number;
  text: string;
  isLiked: boolean;
  date: string;
}

export type GeneralState = {
  FeedArray: FeedStateItem[]
}

const feedInitialState: GeneralState = {
  FeedArray: [
    {
      id: Math.random(),
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque praesentium ab aut consequatur facere quaerat eveniet provident. Tenetur quibusdam facere nam! Saepe facere distinctio repellat quo cumque officia voluptatum dolore!",
      isLiked: false,
      date: 'July 1th 2023, 1:37:01 pm',
    },
  ]
};

export const feedSlice = createSlice(
  "Feed",
  feedInitialState,
  {
    addFeed: {
      reducer: (state, action) => ({ FeedArray: [...state.FeedArray, action.payload] }),
      prepare: () => ({ //добавляет "старые" записи
        id: Math.random(),
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus excepturi ab officia voluptatibus reiciendis saepe reprehenderit quos est quia. Inventore necessitatibus error est facere explicabo iusto nisi quia ut?",
        isLiked: false,
        date: 'Juni 5th 2023, 11:34:40 am',
      }),
    },
    addPost: {
      reducer: (state, action) => ({ FeedArray: [action.payload, ...state.FeedArray] }),
      prepare: (payload: string) => ({
        id: Math.random(),
        text: payload,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      }),
    },
    deletePost: {
      reducer: (state, action) => ({ FeedArray: state.FeedArray.filter(el => el.id !== action.payload) }),
      prepare: (payload: number) => payload
    },
    editPost: {
      reducer: (state, action) => {
        const trgt = state.FeedArray.find(el => el.id === action.payload.id);
        trgt && (trgt.text = action.payload.text) && (trgt.date = action.payload.date);
        return { FeedArray: [...state.FeedArray] };
      },
      prepare: (payload: FeedStateItem) => ({
        id: payload.id,
        text: payload.text,
        date: payload.date,
      }),
    },
    setLike: {
      reducer: (state, action) => {
        const trgt = state.FeedArray.find(el => el.id === action.payload.id);
        trgt && (trgt.isLiked = !action.payload.isLiked);
        return { FeedArray: [...state.FeedArray] };
      },
      prepare: (payload: FeedStateItem) => payload
    },
    filterByLike: {
      reducer: (state) => {
        return { FeedArray: state.FeedArray.filter(el => el.isLiked) }
      },
      prepare: () => { },
    },
    sortByDate: {
      reducer: (state) => {
        state.FeedArray.sort((a, b) => {
          const dateA = moment(a.date, 'MMMM Do YYYY, h:mm:ss a');
          const dateB = moment(b.date, 'MMMM Do YYYY, h:mm:ss a')
          if (dateA.isBefore(dateB)) {
            return -1;
          }

          if (dateA.isAfter(dateB)) {
            return 1;
          }

          return 0;
        })

        return { FeedArray: [...state.FeedArray] }
      },
      prepare: () => { },
    },
  })
/*
export const actions = createActions({
  addFeed: () => ({ //добавляет "старые" записи
    id: Math.random(),
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum repellendus excepturi ab officia voluptatibus reiciendis saepe reprehenderit quos est quia. Inventore necessitatibus error est facere explicabo iusto nisi quia ut?",
    isLiked: false,
    date: 'Juni 5th 2023, 11:34:40 am',
  }),

  addPost: (payload: string) => ({
    id: Math.random(),
    text: payload,
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
  }),

  deletePost: (payload: number) =>
    payload
  ,

  editPost: (payload: FeedStateItem) => ({
    id: payload.id,
    text: payload.text,
    date: payload.date,
  }),

  setLike: (payload: FeedStateItem) =>
    payload
  ,

  filterByLike: () => { },

  sortByDate: () => { },

})

export const reducer = createReducer<typeof feedInitialState, "Feed">(
  "Feed",
  {
    addFeed: (state, action) => ({ FeedArray: [...state.FeedArray, action.payload] }),
    addPost: (state, action) => ({ FeedArray: [action.payload, ...state.FeedArray] }),
    deletePost: (state, action) => ({ FeedArray: state.FeedArray.filter(el => el.id !== action.payload) }),
    editPost: (state, action) => {
      const trgt = state.FeedArray.find(el => el.id === action.payload.id);
      trgt && (trgt.text = action.payload.text) && (trgt.date = action.payload.date);
      return { FeedArray: [...state.FeedArray] };
    },
    setLike: (state, action) => {
      const trgt = state.FeedArray.find(el => el.id === action.payload.id);
      trgt && (trgt.isLiked = !action.payload.isLiked);
      return { FeedArray: [...state.FeedArray] };
    },
    filterByLike: (state) => {
      return { FeedArray: state.FeedArray.filter(el => el.isLiked) }
    },
    sortByDate: (state) => {
      state.FeedArray.sort((a, b) => {
        const dateA = moment(a.date, 'MMMM Do YYYY, h:mm:ss a');
        const dateB = moment(b.date, 'MMMM Do YYYY, h:mm:ss a')
        if (dateA.isBefore(dateB)) {
          return -1;
        }

        if (dateA.isAfter(dateB)) {
          return 1;
        }

        return 0;
      })

      return { FeedArray: [...state.FeedArray] }
    }
  }
)

//2023‐07‐10T06:46:13Z ---
//2023‐07‐10T13:46:13+07:00

*/