'use client'

import { Query } from '@/generated/graphql'
import Image from 'next/image'
import './posters.scss'
import dynamic from 'next/dynamic'
import LineLoader from './lineLoader/lineLoader'
import { Filters } from './filters/filters'
import { useGetPosters } from '../_hooks/useGetPosters'
import { toggleFavorite } from '../_lib/localState/favorites'
import { Links } from './links/links'

// TODO: enable PPR and use suspense
const FavoriteStar = dynamic(() => import('./FavoriteStar'), { ssr: false })

export const Posters = ({ initialData = null }: { initialData: Query | null }) => {
  const { loading, error, postersData, postersDataInColumns } = useGetPosters(initialData)

  // TODO: make this fires if no data cache
  if (!postersData && loading) return 'Loading data'
  if (error) return `Error! ${error.message}`
  if (!postersData) return 'No posters to show'

  return (
    <>
      <LineLoader isLoading={!!postersData && loading} />
      <Filters />
      <Links />

      <div className="posters">
        {Object.entries(postersDataInColumns || {}).map(([key, values]) => {
          return (
            <ul className="posters-column" key={key}>
              {values.map((poster, index) => (
                <li
                  className="poster transition-transform hover:scale-104 hover:z-1 hover:-hue-rotate-10"
                  onClick={() => toggleFavorite(poster.image)}
                  key={poster.image}
                >
                  <FavoriteStar isFavorite={!!poster.isFavorite} />

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
      </div>
    </>
  )
}
