import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cx } from '../../_lib/utils/cs'
import './button.scss'

export type ButtonProps = PropsWithChildren<
  React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    isActive?: boolean
  }
>

export const Button = ({ children, className, isActive, ...buttonProps }: ButtonProps) => {
  return (
    <button className={cx('button', className)} data-active={isActive} {...buttonProps}>
      {children}
    </button>
  )
}
