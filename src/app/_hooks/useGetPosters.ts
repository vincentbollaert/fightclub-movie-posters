import { useQuery } from '@apollo/client'
import { useManageSearchParams } from '../_lib/utils/useManageSearchParams'
import { PosterSizeDetailImage, Query } from '@/generated/graphql'
import { GET_FIGHT_CLUB_POSTERS } from '../_api/queries'
import { useMemo } from 'react'

interface PosterWithFavorite extends PosterSizeDetailImage {
  isFavorite?: boolean
}

export const useGetPosters = (initialData: Query | null) => {
  const { searchParams } = useManageSearchParams()

  const {
    loading,
    error,
    data = initialData,
  } = useQuery<Query>(GET_FIGHT_CLUB_POSTERS, {
    fetchPolicy: 'cache-and-network',
  })

  const [languageFilter, favoriteFilter] = [searchParams.get('language'), searchParams.get('favorite')]

  const postersData = useMemo(() => {
    const allPosters: PosterWithFavorite[] | undefined = data?.movies.search.edges?.[0]?.node?.images.posters

    if (!languageFilter && !favoriteFilter) {
      return allPosters
    }

    if (!!languageFilter) {
      return allPosters?.filter(poster => poster.iso639_1 === languageFilter)
    }

    if (!!favoriteFilter) {
      return allPosters?.filter(poster => !!poster.isFavorite)
    }
  }, [languageFilter, favoriteFilter, data?.movies.search.edges?.[0]?.node?.images.posters])

  const postersDataInColumns = useMemo(() => {
    const postersLength = postersData?.length
    if (!postersLength) return null

    const slice = Math.ceil(postersLength / 5)

    return {
      one: postersData.slice(0, slice),
      two: postersData.slice(slice, slice * 2),
      three: postersData.slice(slice * 2, slice * 3),
      four: postersData.slice(slice * 3, slice * 4),
      five: postersData.slice(slice * 4, postersLength),
    }
  }, [postersData])

  return {
    loading,
    error,
    postersData,
    postersDataInColumns,
  }
}
