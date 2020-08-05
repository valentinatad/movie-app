import React from "react";
import "./list.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const List = ({ movies, IndexOfFirst, IndexOfLast }) => {
  
  if (movies === undefined) {
    return <p className="alert">There is no movie with that criteria.</p>;
  }

  const currentMovie = movies.slice(IndexOfFirst, IndexOfLast);

  return (
    <>
      <div id="listOfMovies">
        {currentMovie.map((movie) => (
          <Zoom>
            <div className="movie" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} className="movieImg" />
              <p className="name">
                <b>Title: {movie.Title}</b>
              </p>
              <p>
                <b>Type:</b> {movie.Type}
              </p>
              <p>
                <b>Year:</b> {movie.Year}
              </p>
            </div>
          </Zoom>
        ))}
      </div>
    </>
  );
};
