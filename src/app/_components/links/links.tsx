import Link from 'next/link'
import './links.scss'

export const Links = () => {
  return (
    <div className="links">
      <h2 className="links__title">GitHub</h2>
      <p className="link-group">
        <span>Repo</span>
        <Link href="https://github.com/vincentbollaert/fightclub-movie-posters">vincentbollaert</Link>
      </p>

      <h2 className="links__title">Credits</h2>
      <p className="link-group">
        <span>API</span>
        <Link href="https://developer.themoviedb.org/docs/getting-started">TMDB</Link>
      </p>
      <p className="link-group">
        <span>API wrapper</span>
        <Link href="https://github.com/nerdsupremacist/tmdb">nerdsupremacist</Link>
      </p>
      <p className="link-group">
        <span>Tyler image</span>
        <Link href="https://www.deviantart.com/indesition">indesition</Link>
      </p>
    </div>
  )
}
