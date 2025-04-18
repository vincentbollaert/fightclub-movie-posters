'use client'

import { HttpLink } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs'
import { favoriteTypePolicies } from '../_lib/localState/favorites'

export function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: favoriteTypePolicies,
    }),
    link: new HttpLink({
      uri: 'https://tmdb.apps.quintero.io/',
    }),
  })
}
