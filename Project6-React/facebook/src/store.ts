import { reducer as adsReducer, adsInitialState } from "./Ads/ads.state";
import { composeReducers } from "./connect";
import { feedSlice } from "./Feed/feed.state";
import { friendsSlice } from "./Friends/Friends.state";

export const composedReducers = composeReducers(adsReducer, feedSlice.reducer, friendsSlice.reducer);

export const initialState = { Ads: adsInitialState, ...feedSlice.initialState, ...friendsSlice.initialState };

