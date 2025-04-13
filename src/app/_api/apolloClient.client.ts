'use client'

import { HttpLink } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs'

export function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://tmdb.apps.quintero.io/',
    }),
  })
}
