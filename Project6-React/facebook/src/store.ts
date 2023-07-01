import { reducer as adsReducer, adsInitialState } from "./Ads/ads.state";
import { composeReducers } from "./connect";
import { reducer as feedReducer, feedInitialState } from "./Feed/feed.state";

export const composedReducers = composeReducers(adsReducer, feedReducer);

export const initialState = { Ads: adsInitialState, Feed: feedInitialState };

