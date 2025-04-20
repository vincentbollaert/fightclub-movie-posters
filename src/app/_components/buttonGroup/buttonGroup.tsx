import { PropsWithChildren } from 'react'
import { Button, ButtonProps } from '../button/button'
import './buttonGroup.scss'

export const ButtonGroup = ({ children }: PropsWithChildren) => {
  return <div className="buttonGroup">{children}</div>
}

ButtonGroup.Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <Button className="buttonGroup__button" {...buttonProps}>
      {children}
    </Button>
  )
}
