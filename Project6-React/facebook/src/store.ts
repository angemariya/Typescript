import { reducer as adsReducer, adsInitialState } from "./Ads/ads.state";
import { composeReducers } from "./connect";
import { reducer as feedReducer, feedInitialState } from "./Feed/feed.state";
import type { Reducer } from "./connect";

export const composedReducers = composeReducers(adsReducer);

export const initialState = { Ads: adsInitialState, Feed: feedInitialState };

