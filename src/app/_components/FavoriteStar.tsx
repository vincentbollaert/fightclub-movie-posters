'use client'
import { Star } from 'lucide-react'
import { cx } from '../_lib/utils/cs'
import { toggleFavorite } from '../_lib/localState/favorites'

export default function FavoriteStar({ 
  isFavorite,
  imageUrl
}: { 
  isFavorite: boolean
  imageUrl: string
}) {
  return (
    <Star
      className={cx('poster__icon', {
        'poster__icon--active': isFavorite
      })}
      onClick={() => toggleFavorite(imageUrl)}
    />
  )
}
