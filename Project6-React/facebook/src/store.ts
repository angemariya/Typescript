import { reducer as adsReducer, adsInitialState } from "./Ads/ads.state";
import { composeReducers } from "./connect";

export const composedReducers = composeReducers(adsReducer, feedReducer);

export const initialState = { Ads: adsInitialState, Feed: feedInitialState };
