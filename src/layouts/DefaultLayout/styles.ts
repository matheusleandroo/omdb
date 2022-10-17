import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  min-height: 100%;
`
export const OutletContainer = styled.div`
  min-height: 100vh;
  padding: 135px 20px 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const OutletContent = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  height: 100%;
  max-width: 700px;
  width: 100%;
  padding: 25px 15px;

  @media (min-width: 768px) {
    padding: 30px 60px;
  }
`
