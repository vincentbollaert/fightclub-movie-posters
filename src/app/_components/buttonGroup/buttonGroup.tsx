import { PropsWithChildren } from 'react'
import { Button, ButtonProps } from '../button/button'
import './buttonGroup.scss'

export const ButtonGroup = ({ children }: PropsWithChildren) => {
  return <div className="button-group">{children}</div>
}

ButtonGroup.Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <Button {...buttonProps}>{children}</Button>
}
