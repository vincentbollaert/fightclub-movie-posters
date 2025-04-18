import { makeVar } from '@apollo/client'
import { PosterSize } from '../../../generated/graphql'
import { ReadFieldFunction } from '@apollo/client/cache/core/types/common'

/**
 * Extract the unique image ID from a TMDB image URL
 * Example: https://image.tmdb.org/t/p/original/kDyoVREWhxqkRoo9k5FkEvwntFJ.jpg -> kDyoVREWhxqkRoo9k5FkEvwntFJ
 */
export function extractImageId(url: string): string | null {
  const match = url.match(/\/([^\/]+)\.[^\.]+$/)
  return match ? match[1] : null
}

// Initialize reactive variable
const getInitialFavorites = (): string[] => {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('favoriteMovieIds')
      return stored ? JSON.parse(stored) : []
    } catch (e) {
      console.error('Error reading from localStorage:', e)
      return []
    }
  }
  return []
}

export const favoriteMovieIdsVar = makeVar<string[]>(getInitialFavorites())

export function toggleFavorite(imageUrl: string): boolean {
  const imageId = extractImageId(imageUrl)
  if (!imageId) return false

  const currentFavorites = favoriteMovieIdsVar()
  const isFavorite = currentFavorites.includes(imageId)
  const newFavorites = isFavorite ? currentFavorites.filter(id => id !== imageId) : [...currentFavorites, imageId]

  if (typeof window !== 'undefined') {
    localStorage.setItem('favoriteMovieIds', JSON.stringify(newFavorites))
  }

  // Update reactive variable
  favoriteMovieIdsVar(newFavorites)

  return !isFavorite
}

export const favoriteTypePolicies = {
  PosterSizeDetailImage: {
    fields: {
      isFavorite: {
        read(_: unknown, { readField }: { readField: ReadFieldFunction }) {
          const imageUrl = readField<string>({ fieldName: 'image', args: { size: PosterSize.Original } })
          if (!imageUrl) return false

          const imageId = extractImageId(imageUrl)
          if (!imageId) return false

          const favoriteIds = favoriteMovieIdsVar()
          return favoriteIds.includes(imageId)
        },
      },
    },
  },
}
