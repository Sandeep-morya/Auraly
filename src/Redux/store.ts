﻿import { legacy_createStore, combineReducers } from "redux";
import authReducer from "./auth/auth.reducer"
const rootReducer = combineReducers({
    auth:authReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export const store = legacy_createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;