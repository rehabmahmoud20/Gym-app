const Pagination = ({ totalCards, cardsPerPage, handlePage, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div aria-label="Page navigation example ">
      <ul className="pagination justify-content-center mt-5">
        <li
        className="page-item"
        
        >
          <a
            className={` ${
                currentPage === 1 && 'disabled'
            } page-link `}
          
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((e,index) => (
          <li className="page-item" key={index}>
            <a
              className="page-link text-dark"
              onClick={() => {
                handlePage(e);
              }}
            >
              {e}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a
           className={`${
            currentPage === pageNumbers.length  && 'disabled'
        } page-link `}
            onClick={() => {
              handlePage(currentPage + 1);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
