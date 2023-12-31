import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";
import PokemonClient from "../../services/PokemonClient";
import { FETCH_POKEMON_LIST } from "../../graphql/query";
import { setPokemonData } from "../../redux/features/pokemon-slice";
const HomeComponent = () => {
  const getPokemonData = (state: RootState) => state.pokemon.data;
  const pokemonData = useSelector(getPokemonData);
  const authData = useSelector((state: RootState) => (state as RootState).auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = authData.isAuth;
  const getPokemonList = async () => {
    const { data } = await PokemonClient.query(FETCH_POKEMON_LIST, {
      variables: { first: 20 },
    });

    dispatch(setPokemonData(data.pokemons));
  };
  useEffect(() => {
    getPokemonList();
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth, router]);

  return (
    <div>
      <div className="grid grid-cols-4 grid-flow-row gap-4">
        {pokemonData.map((items) => {
          return (
            <>
              <div className="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={items.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {items.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {items.classification}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {items.number}
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HomeComponent;
