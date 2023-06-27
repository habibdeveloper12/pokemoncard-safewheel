import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type PokemonProps = {
  id?: string;
  number?: string;
  name?: string;
  weight?: {
    minimum?: string;
    maximum?: string;
  };
  height?: {
    minimum?: string;
    maximum?: string;
  };
  classification?: string;
  types?: string[];
  resistant?: string[];
  attacks?: {
    fast?: {
      name?: string;
      type?: string;
      damage?: number;
    }[];
    special?: {
      name?: string;
      type?: string;
      damage?: number;
    }[];
  };
  weaknesses?: string[];
  fleeRate?: number;
  maxCP?: number;
  evolutionRequirements?: {
    amount?: number;
    name?: string;
  };
  maxHP?: number;
  image?: string;
};

type PokemonState = {
  data: PokemonProps[];
  loading: boolean;
  error: string | null;
};

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<PokemonProps[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});
export const { setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
