import styled from 'styled-components'

export const ListingContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 50px 25px;
  padding: 25px;
  overflow-y: auto;

  @media (min-width: 768px) {
    margin: 50px auto;
  }
`

export const ListingContent = styled.div`
  margin-top: 2.5rem;

  h3 {
    color: ${(props) => props.theme['primary-dark']};
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
`
