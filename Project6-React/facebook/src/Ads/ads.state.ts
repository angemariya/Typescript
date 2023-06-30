import { dispatch, type Reducer } from "../connect";

export const adsInitialState = 
    {
    titlesArray: ["ad block 1"]
    }


export const reducer: Reducer<{Ads: typeof adsInitialState}> = (state, action) => {
    if (action.type === "addAds") {
        return {
            ...state,
            Ads: {
                ...state.Ads,
                titlesArray: [...state.Ads.titlesArray, action.payload]
            }
        }
    }

    if (action.type === "deleteAds") {
        return {
            ...state,
            Ads: {
              ...state.Ads,
              titlesArray: state.Ads.titlesArray.filter((_, i) => i !== action.payload)  
            }
        }
    }

    return state
}

setTimeout(() => {
    dispatch({type: "addAds", payload: "ad block 2"});
}, 1000)

setTimeout(() => {
    dispatch({type: "addAds", payload: "ad block 3"});
}, 2000)

setTimeout(() => {
    dispatch({type: "deleteAds", payload: 1});
}, 3000)

