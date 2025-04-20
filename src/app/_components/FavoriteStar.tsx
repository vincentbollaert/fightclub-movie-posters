'use client'

import { Star } from 'lucide-react'
import { cx } from '../_lib/utils/cs'

export default function FavoriteStar({ isFavorite }: { isFavorite: boolean }) {
  return (
    <Star
      className={cx('poster__icon', {
        'poster__icon--active': isFavorite,
      })}
    />
  )
}
