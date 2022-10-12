import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
