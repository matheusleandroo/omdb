import React from 'react'
import { IconBaseProps } from 'react-icons'

import { ButtonContainer } from './styles'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: React.ComponentType<IconBaseProps>
}

export function Button({ title = 'Buscar', icon: Icon, ...props }: IButton) {
  return (
    <ButtonContainer {...props}>
      {Icon && <Icon size={20} />}
      {title}
    </ButtonContainer>
  )
}
