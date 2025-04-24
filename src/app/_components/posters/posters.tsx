'use client'

import { Query } from '@/generated/graphql'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { track } from '@vercel/analytics'
import LineLoader from '../lineLoader/lineLoader'
import { Filters } from '../filters/filters'
import { useGetPosters } from '../../_hooks/useGetPosters'
import { toggleFavorite } from '../../_lib/localState/favorites'
import { Links } from '../links/links'
import './posters.scss'

const FavoriteIcon = dynamic(() => import('../favoriteIcon/FavoriteIcon'), { ssr: false })

export const Posters = ({ initialData = null }: { initialData: Query | null }) => {
  const { loading, error, postersData, postersDataInColumns } = useGetPosters(initialData)

  if (!postersData && loading) return 'Loading data'
  if (error) return `Error! ${error.message}`
  if (!postersData) return 'No posters to show'

  return (
    <>
      <LineLoader isLoading={loading} />
      <Filters />
      <Links />

      <div className="posters">
        {Object.entries(postersDataInColumns || {}).map(([key, values]) => {
          return (
            <ul className="posters__column" key={key}>
              {values.map((poster, index) => (
                <li
                  className="poster"
                  data-favorite={!!poster.isFavorite}
                  onClick={() => {
                    toggleFavorite(poster.image)
                    track('Poster click')
                  }}
                  key={poster.image}
                >
                  <FavoriteIcon isFavorite={!!poster.isFavorite} />

                  <Image
                    className="poster__img"
                    src={poster.image}
                    width="300"
                    height="450"
                    decoding="async"
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
    </>
  )
}
