import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({info, pageNumber, setPageNumber}) => {
    return <ReactPaginate
    className='pagination justify-content-center gap-4 my-3'
    pageCount={info?.pages}
    nextLabel="Next"
    previousLabel="Prev"
    previousclassName='btn btn-primary'
    nextclassName='btn btn-primary'
    pageclassName='page-item'
    pageLinkclassName='page-link'
    forcePage={pageNumber===1? 0 :pageNumber - 1 } 
    onPageChange={(data) => {
      setPageNumber(data.selected + 1)
    }}
    
    />
  }
export default Pagination
