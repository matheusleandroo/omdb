import React from 'react'

import { Container, PaginateComponent } from './styles'

interface PaginateProps {
  pageCount: number
  onPageChange(selected: number): void
  page: number
}

export function Paginate({ page, pageCount, onPageChange }: PaginateProps) {
  return (
    <Container>
      <PaginateComponent
        forcePage={page - 1}
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
