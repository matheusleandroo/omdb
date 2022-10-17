import styled from 'styled-components'

interface IFormProps {
  largeTitle: boolean
}

export const FormContainer = styled.form<IFormProps>`
  width: 100%;

  h1 {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    margin-bottom: ${(props) => (props.largeTitle ? '4rem' : '1.5rem')};
    font-size: ${(props) => (props.largeTitle ? 'default' : '1.5rem')};
  }

  button {
    margin: 1rem 0;
  }
`
