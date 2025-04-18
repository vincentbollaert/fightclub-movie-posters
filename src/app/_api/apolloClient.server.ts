import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { registerApolloClient } from '@apollo/client-integration-nextjs'
import { favoriteTypePolicies } from '../_lib/localState/favorites'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: favoriteTypePolicies,
    }),
    link: new HttpLink({
      uri: 'https://tmdb.apps.quintero.io/',
    }),
    ssrMode: true,
  })
})
