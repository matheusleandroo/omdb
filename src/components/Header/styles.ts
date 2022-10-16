import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  padding: 1.25rem;
  font-weight: bold;
  font-size: 2rem;
  position: fixed;
  width: 100vw;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
`
