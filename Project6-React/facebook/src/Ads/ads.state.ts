import { type Reducer } from "../connect";

export const adsInitialState = 
    {
    titlesArray: ["ad block 1", "ad block 2", "ad block 3"],
    photosArray: [
        "https://images.unsplash.com/photo-1687334139199-087598858bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1687606746500-2a97da9dcfd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1635282922712-97888dc706dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ]
    }


export const reducer: Reducer<{ Ads: typeof adsInitialState }> = (state, action) => {
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
              titlesArray: state.Ads.titlesArray.filter((_, id) => id !== action.payload)  
            }
        }
    }

    if (action.type === "addPhoto") {
        return {
            ...state,
            Ads: {
                ...state.Ads,
                photosArray: [...state.Ads.photosArray, action.payload]
            }
        }
    }

    return state
}

