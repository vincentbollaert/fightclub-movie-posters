'use client'

import { Query, PosterSizeDetailImage } from '@/generated/graphql'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { useMemo } from 'react'
import './posters.scss'
import dynamic from 'next/dynamic'
import { GET_FIGHT_CLUB_POSTERS } from '../_api/queries'
import LineLoader from './lineLoader/lineLoader'

interface PosterWithFavorite extends PosterSizeDetailImage {
  isFavorite?: boolean
}

// TODO: enable PPR and use suspense
const FavoriteStar = dynamic(() => import('./FavoriteStar'), { ssr: false })

export const Posters = ({ initialData = null }: { initialData: Query | null }) => {
  const {
    loading,
    error,
    data = initialData,
  } = useQuery<Query>(GET_FIGHT_CLUB_POSTERS, {
    fetchPolicy: 'cache-and-network',
    // skip: !!initialData,
  })

  const posters = data?.movies.search.edges?.[0]?.node?.images.posters as PosterWithFavorite[] | undefined
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

  // TODO: make this fires if no data cache
  if (!posters && loading) return 'Loading data'
  if (error) return `Error! ${error.message}`
  if (!posters) return 'No posters to show'

  return (
    <>
      <LineLoader isLoading={!!posters && loading} />

      {Object.entries(columnSlices || {}).map(([key, values]) => {
        return (
          <ul className="posters" key={key}>
            {values.map((poster, index) => (
              <li
                className="poster transition-transform hover:scale-104 hover:z-1 hover:-hue-rotate-10"
                key={poster.image}
              >
                <FavoriteStar isFavorite={poster.isFavorite || false} imageUrl={poster.image} />

                <Image
                  className="poster__img"
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
    </>
  )
}
