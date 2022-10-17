import styled from 'styled-components'

export const DetailsContent = styled.div`
  h1 {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  img {
    margin: 2rem 0 2rem;
    height: 350px;
    max-width: 250px;
  }

  a {
    text-decoration: none;
  }
`

export const DetailsImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    height: 350px;
    max-width: 250px;
  }
`
