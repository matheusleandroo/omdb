import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  border-radius: 0.75rem;
  height: 2.375rem;
  padding: 1rem 0.75rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${(props) => props.theme['primary-dark']};
  }
`
