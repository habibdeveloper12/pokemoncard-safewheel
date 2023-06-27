import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ApiClient from "./ApiClient";
import { NEXT_PUBLIC_POKEMON_URL } from "../config";
import { localStorageVariables } from "../constant/localStorageVariables";

const httpLink = createHttpLink({
  uri: `${NEXT_PUBLIC_POKEMON_URL}` || "https://graphql-pokemon2.vercel.app",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(localStorageVariables.ACCESS_TOKEN);

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

class PokemonClient extends ApiClient {
  constructor() {
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    super(client);
  }
}

class ServerSideClient extends ApiClient {
  constructor() {
    const client = new ApolloClient({
      uri: `${NEXT_PUBLIC_POKEMON_URL}`,
      cache: new InMemoryCache(),
    });
    super(client);
  }
}

export const serverSideClient = new ServerSideClient();

export default new PokemonClient();
