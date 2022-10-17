import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  height: -webkit-fill-available;
  margin: 50px 25px;
  padding: 25px;
  overflow-y: auto;

  @media (min-width: 768px) {
    margin: 50px auto;
    padding: 75px;
  }
`
