import styled from 'styled-components'

interface IFormProps {
  largeTitle: boolean
}

export const FormContainer = styled.form<IFormProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${(props) => (props.largeTitle ? 'center' : 'start')};
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px 15px;
  }

  h1 {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    margin-bottom: ${(props) => (props.largeTitle ? '4rem' : '1.5rem')};
    font-size: ${(props) => (props.largeTitle ? 'reverse' : '1.5rem')};

    @media (max-height: 576px) {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
  }

  button {
    margin: 1rem 0 ${(props) => (props.largeTitle ? '1rem' : '3.5rem')};
  }
`
