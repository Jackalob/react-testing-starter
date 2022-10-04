import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/redux-counter/counterSlice";

const createStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

const store = createStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export { createStore, store, RootState, AppDispatch };
