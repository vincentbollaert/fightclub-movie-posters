import React, { PropsWithChildren } from 'react'

export const Button = ({ children, className }: PropsWithChildren<React.HTMLProps<HTMLButtonElement>>) => {
  return <button className={className}>{children}</button>
}
