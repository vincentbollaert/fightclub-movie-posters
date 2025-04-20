import { gql } from "@apollo/client";

export const GET_FIGHT_CLUB_POSTERS = gql`
  query {
    movies {
      search(term: "fight-club", first: 1) {
        edges {
          node {
            title
            images {
              posters {
                image(size: Original)
                iso639_1
                isFavorite @client
              }
            }
          }
        }
      }
    }
  }
`
