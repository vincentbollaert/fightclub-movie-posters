import { Button } from '../button/button'
import './filters.scss'
import { ButtonGroup } from '../buttonGroup/buttonGroup'

export const Filters = () => {
  const activeLanguage = 'English'

  return (
    <div className="filters">
      <ButtonGroup>
        <ButtonGroup.Button isActive={activeLanguage === 'English'}>English</ButtonGroup.Button>
        <ButtonGroup.Button>French</ButtonGroup.Button>
      </ButtonGroup>
      <Button
        className='favoriteButton'
        onClick={() => {
          console.log('sds')
        }}
      >
        Favorites
      </Button>
    </div>
  )
}
