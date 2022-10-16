import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  border-radius: 0.75rem;
  height: 3.375rem;
  padding: 1rem 0.75rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid transparent;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['primary-dark']};
  }
`
