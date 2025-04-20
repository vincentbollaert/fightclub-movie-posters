'use client'

import { Button } from '../button/button'
import { ButtonGroup } from '../buttonGroup/buttonGroup'
import { useManageSearchParams } from '@/app/_lib/utils/useManageSearchParams'
import './filters.scss'

export const Filters = () => {
  const { manageQueryString, pathname, router, searchParams } = useManageSearchParams()

  const languageNames = new Intl.DisplayNames(['en'], { type: 'language' })
  const languages = ['en', 'es', 'pt'].map(code => ({
    displayName: languageNames.of(code),
    code,
  }))

  return (
    <div className="filters">
      <ButtonGroup>
        <ButtonGroup.Button
          isActive={!searchParams.get('language') || searchParams.get('language') === 'all'}
          onClick={() => {
            router.push(pathname + '?' + manageQueryString('remove', 'language', 'all'))
          }}
          key="all"
        >
          all
        </ButtonGroup.Button>
        {languages.map(({ displayName, code }) => {
          return (
            <ButtonGroup.Button
              isActive={searchParams.get('language') === code}
              onClick={() => {
                router.push(pathname + '?' + manageQueryString('add', 'language', code))
              }}
              key={code}
            >
              {displayName}
            </ButtonGroup.Button>
          )
        })}
      </ButtonGroup>
      <Button
        className="favoriteButton"
        onClick={() => {
          searchParams.set()
        }}
      >
        Favorites
      </Button>
    </div>
  )
}
