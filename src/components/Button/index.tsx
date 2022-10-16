import React from 'react'

import { ButtonContainer } from './styles'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title = 'Buscar', ...props }: IButton) {
  return <ButtonContainer {...props}>{title}</ButtonContainer>
}
