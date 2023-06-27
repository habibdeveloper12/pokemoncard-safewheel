import { gql } from "@apollo/client";

export const FETCH_POKEMON_LIST = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP

      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
    }
  }
`;
