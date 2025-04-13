import { gql } from '@apollo/client'
import { Query } from '@/generated/graphql'

import { getClient } from './_api/apolloClient.server'
import { Metadata } from 'next'
import { Posters } from './_components/posters'

const GET_FIGHT_CLUB_POSTERS = gql`
  query {
    movies {
      search(term: "fight-club", first: 1) {
        edges {
          node {
            title
            images {
              posters {
                image(size: Original)
              }
            }
          }
        }
      }
    }
  }
`

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
      <div className="container mx-auto py-8">
        <Posters initialData={data} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching posters:', error)
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Movie Posters</h1>
        <p className="text-red-500">Error loading posters. Please try again later.</p>
      </div>
    )
  }
}
