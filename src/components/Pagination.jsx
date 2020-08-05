import React from "react";
import "./pagination.css";
export const Pagination = ({ moviePerPage, movies, paginate }) => {

  if (movies === undefined) {
    return <p></p>;
  }
  if (movies === null) {
    return <p></p>;
  }
  const totalMovies = movies.length;

  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalMovies / moviePerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
