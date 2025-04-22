import Link from 'next/link'
import './links.scss'
import { track } from '@vercel/analytics'

export const Links = () => {
  return (
    <div className="links">
      <h2 className="links__title">GitHub</h2>
      <p className="link-group">
        <span>Repo</span>
        <Link
          href="https://github.com/vincentbollaert/fightclub-movie-posters"
          onClick={() => {
            track('Link (personal github) click')
          }}
        >
          vincentbollaert
        </Link>
      </p>

      <h2 className="links__title">Credits</h2>
      <p className="link-group">
        <span>API</span>
        <Link
          href="https://developer.themoviedb.org/docs/getting-started"
          onClick={() => {
            track('Link (API) click')
          }}
        >
          TMDB
        </Link>
      </p>
      <p className="link-group">
        <span>API wrapper</span>
        <Link
          href="https://github.com/nerdsupremacist/tmdb"
          onClick={() => {
            track('Link (API wrapper) click')
          }}
        >
          nerdsupremacist
        </Link>
      </p>
      <p className="link-group">
        <span>Tyler image</span>
        <Link
          href="https://www.deviantart.com/indesition"
          onClick={() => {
            track('Link (Tyler image) click')
          }}
        >
          indesition
        </Link>
      </p>
    </div>
  )
}
