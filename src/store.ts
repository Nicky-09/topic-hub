import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import topicsReducer from "./topicsReducer";

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the AppThunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const store = configureStore({
  reducer: {
    topics: topicsReducer,
  },
});

export default store;
