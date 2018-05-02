import React from 'react';
import PropTypes from 'prop-types';

const Paginator = ({
  page, nbPages, onNextPage, onPrevPage, onGoToPage,
}) => {
  const currentPage = Number.parseInt(page, 10);
  const totPages = Number.parseInt(nbPages, 10);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage > 1 ? '' : 'disabled'}`}>
          <a
            className="page-link"
            href="/"
            aria-label="Previous"
            onClick={(e) => {
              e.preventDefault();
              onPrevPage();
            }}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item active">
          <span className="page-link">{currentPage}</span>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onGoToPage(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onGoToPage(currentPage + 2);
            }}
          >
            {currentPage + 2}
          </a>
        </li>
        <li className={`page-item ${currentPage < totPages ? '' : 'disabled'}`}>
          <a
            className="page-link"
            href="/"
            aria-label="Next"
            onClick={(e) => {
              e.preventDefault();
              onNextPage();
            }}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  page: PropTypes.number,
  nbPages: PropTypes.number,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onGoToPage: PropTypes.func.isRequired,
};

Paginator.defaultProps = {
  page: 1,
  nbPages: 1,
};

export default Paginator;
