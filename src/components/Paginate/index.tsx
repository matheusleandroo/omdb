import React from 'react'

import { Container, PaginateComponent } from './styles'

interface PaginateProps {
  pageCount: number
  onPageChange(selected: number): void
}

export function Paginate({ pageCount, onPageChange }: PaginateProps) {
  return (
    <Container>
      <PaginateComponent
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        onPageChange={(selectedItem: { selected: number }) =>
          onPageChange(selectedItem.selected + 1)
        }
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
      />
    </Container>
  )
}
