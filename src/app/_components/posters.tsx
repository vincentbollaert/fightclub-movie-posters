'use client'
import { Query } from '@/generated/graphql'
import { gql, useQuery } from '@apollo/client'

import Image from 'next/image'
import { useMemo } from 'react'

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

export const Posters = ({ initialData = null }: { initialData: Query | null }) => {
  const {
    loading,
    error,
    data = initialData,
  } = useQuery<Query>(GET_FIGHT_CLUB_POSTERS, {
    fetchPolicy: 'cache-and-network',
    skip: !!initialData,
  })
  const posters = data?.movies.search.edges?.[0]?.node?.images.posters
  const postersLength = posters?.length

  const columnSlices = useMemo(() => {
    if (!postersLength) return null
    const slice = Math.ceil(postersLength / 5)

    return {
      one: posters.slice(0, slice),
      two: posters.slice(slice, slice * 2),
      three: posters.slice(slice * 2, slice * 3),
      four: posters.slice(slice * 3, slice * 4),
      five: posters.slice(slice * 4, postersLength),
    }
  }, [posters, postersLength])

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  if (!posters) return 'No posters to show'

  return (
    <div className="outer">
      {Object.entries(columnSlices || {}).map(([key, values]) => {
        return (
          <ul className="list" key={key}>
            {values.map((poster, index) => (
              <li className="li" key={poster.image}>
                <Image
                  className="img"
                  src={poster.image}
                  width={300}
                  height={500}
                  alt="poster"
                  priority={index < 5}
                  loading={index < 5 ? 'eager' : 'lazy'}
                />
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
