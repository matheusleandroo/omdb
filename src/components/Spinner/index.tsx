import HashLoader from 'react-spinners/HashLoader'

import { defaultTheme } from '../../styles/themes/default'
import { SpinnerContainer } from './styles'

interface ISpinner {
  isLoading: boolean
}

export function Spinner({ isLoading }: ISpinner) {
  return (
    <SpinnerContainer>
      <HashLoader loading={isLoading} color={defaultTheme.primary} />
    </SpinnerContainer>
  )
}
