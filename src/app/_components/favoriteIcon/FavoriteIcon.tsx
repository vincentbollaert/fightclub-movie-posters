'use client'

import { Star } from 'lucide-react'
import './favoriteIcon.scss'

export default function FavoriteIcon({ isFavorite }: { isFavorite: boolean }) {
  return <Star className="favorite-icon" data-active={isFavorite} />
}
