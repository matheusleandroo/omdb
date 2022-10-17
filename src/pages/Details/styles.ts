import styled from 'styled-components'

export const DetailsContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 50px 25px;
  padding: 25px;
  overflow-y: auto;

  @media (min-width: 768px) {
    margin: 50px auto;
  }
`

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
