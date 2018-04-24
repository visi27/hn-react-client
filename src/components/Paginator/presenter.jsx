import React from 'react';
import PropTypes from 'prop-types';

const Paginator = ({ page, nbPages }) => {
  const currentPage = Number.parseInt(page, 10);
  const totPages = Number.parseInt(nbPages, 10);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage > 1 ? '' : 'disabled'}`}>
          <a className="page-link" href="/test" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/test">
            {currentPage}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/test">
            {currentPage + 1}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/test">
            {currentPage + 2}
          </a>
        </li>
        <li className={`page-item ${currentPage < totPages ? '' : 'disabled'}`}>
          <a className="page-link" href="/test" aria-label="Next">
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
};

Paginator.defaultProps = {
  page: 1,
  nbPages: 1,
};

export default Paginator;
