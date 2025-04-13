'use client'

import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs'
import React from 'react'
import { makeClient } from '../_api/apolloClient.client'

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}

export default ApolloWrapper
