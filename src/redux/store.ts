import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import pokemonReducer from "./features/pokemon-slice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
