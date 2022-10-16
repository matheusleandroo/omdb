import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

export const Container = styled.div`
  margin-bottom: 3rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      min-width: 25px;
      text-align: center;
      list-style: none;
      border-radius: 3px;
      margin: 0.2rem 0.3rem;
      cursor: pointer;
      transition: background 0.2s;
      a {
        padding: 0.2rem 0.5rem;
      }
    }
    li.selected {
      text-decoration: underline;
      a {
        font-weight: bold;
      }
    }
    li:hover {
      background-color: ${(props) => props.theme['gray-100']};
      font-weight: bold;
    }
  }
  @media (min-width: 576px) {
    ul > li {
      min-width: 35px;
      margin: 0.3rem 0.5rem;
      a {
        padding: 0 0.6rem;
      }
    }
  }
`

export const PaginateComponent = styled(ReactPaginate)``
