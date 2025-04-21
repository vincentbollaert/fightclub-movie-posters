import { Query } from '@/generated/graphql'

import { getClient } from './_api/apolloClient.server'
import { Metadata } from 'next'
import { Posters } from './_components/posters/posters'
import { GET_FIGHT_CLUB_POSTERS } from './_api/queries'
import { Suspense } from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Fight Club movie posters',
    description: 'Browse this collection of movie posters',
  }
}

export const revalidate = 86400 // Revalidate every day

export default async function PostersPage() {
  try {
    const client = getClient()
    const { data } = await client.query<Query>({
      query: GET_FIGHT_CLUB_POSTERS,
    })

    return (
      <Suspense>
        <Posters initialData={data} />
      </Suspense>
    )
  } catch (error) {
    console.error('Error fetching posters:', error)
    return <p className="text-red-500">Error loading posters. Please try again later.</p>
  }
}
