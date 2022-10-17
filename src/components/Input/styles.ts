import styled from 'styled-components'

interface ContainerProps {
  isErrored: boolean
}

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  label,
  input,
  span {
    margin-bottom: 0.375rem;
  }

  label {
    font-weight: bold;
  }

  input {
    border-radius: 0.75rem;
    height: 2.375rem;
    border: 1px solid ${(props) => props.theme['gray-200']};

    padding: 0.5rem;

    &:focus {
      border-color: ${(props) =>
        props.isErrored ? props.theme['primary-dark'] : props.theme.black};
    }
  }
  span {
    font-weight: bold;
    font-size: 12px;
    margin-left: 5px;
    color: ${(props) => props.theme['primary-dark']};
  }
`
