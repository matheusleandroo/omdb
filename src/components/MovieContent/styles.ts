import styled from 'styled-components'

export const MovieContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  padding: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    height: 350px;
    max-width: 250px;
    cursor: pointer;
  }
`

export const MovieInfos = styled.div`
  padding: 1rem 0.5rem;

  p {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  button {
    margin-top: 1.5rem;
  }
`
