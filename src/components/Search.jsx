import React, { useState } from "react";
import { listOfMovies } from "../services/services";
import { Pagination } from "./Pagination";
import { List } from "./list";
import { FaSortDown, FaSortNumericDown, FaSortNumericUp } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moviePerPage] = useState(3);
  const [moviesM, setMoviesM] = useState([]);
  const [moviesUp, setMoviesUp] = useState([]);
  const IndexOfLastMovies = currentPage * moviePerPage;
  const IndexOfFirstMovies = IndexOfLastMovies - moviePerPage;
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    listOfMovies(search, title, year, type).then((res) => {
      setMovies(res.data.Search);
    });
    let div = document.querySelector("#list");
    div.style.display = "flex";
    let div2 = document.querySelector("#list2");
    div2.style.display = "none";
    let div3 = document.querySelector("#list3");
    div3.style.display = "none";
  }

  function handleClick2(e) {
    console.log("ooo");

    let div = document.querySelector("#closeFilter");
    if ((div.style.display = "hidden")) {
      console.log("iii");
      div.style.display = "block";
      return;
    }
  }
  function handleClose(e) {
    let div = document.querySelector("#closeFilter");
    div.style.display = "none";
    setTitle("");
    setYear("");
    setType("");
    let reset = document.querySelector("#reset");
    reset.value = "";
  }
  function handleFilter(e) {
    listOfMovies(search, title, year, type).then((res) => {
      if (res.data.Search === undefined) {
        return;
      }
      if (res.data.Search.length > 0) {
        let ar = res.data.Search.filter((movie) => {
          return movie.Title.toLowerCase().includes(title.toLowerCase());
        });
        if (ar.length === 0) {
          ar = undefined;
          console.log("olala");
          return setMovies(ar);
        } else {
          return setMovies(ar);
        }
      }
    });

    setTitle("");
    setYear("");
    setType("");
    let reset = document.querySelector("#reset");
    reset.value = "";
  }
  function sortDown(e) {
    let div = document.querySelector("#list");
    div.style.display = "none";
    let div2 = document.querySelector("#list2");
    div2.style.display = "none";
    let div3 = document.querySelector("#list3");
    div3.style.display = "flex";
    return setMoviesUp(movies.sort((a, b) => (a.Year > b.Year ? 1 : -1)));
  }

  function sortUp(e) {
    let div = document.querySelector("#list");
    div.style.display = "none";
    let div2 = document.querySelector("#list2");
    div2.style.display = "flex";
    let div3 = document.querySelector("#list3");
    div3.style.display = "none";
    return setMoviesM(movies.sort((a, b) => (a.Year < b.Year ? 1 : -1)));
  }
  return (
    <>
      <div className="container">
        <div className="search">
          <input
            placeholder="Search movies"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Search
          </button>
        </div>
        <div className="filterContainer">
          <div className="filter">
            <p className="white">Sort</p>
            <FaSortNumericDown
              className="white pointer sort"
              onClick={(e) => sortDown(e)}
            />
            <FaSortNumericUp
              className="white pointer"
              onClick={(e) => sortUp(e)}
            />
          </div>
          <div className="filter">
            <p className="white">Filter</p>
            <FaSortDown
              className="white pointer"
              onClick={(e) => {
                handleClick2(e);
              }}
            />
          </div>
        </div>
        <div id="closeFilter">
          <p className="close">
            <MdClose
              onClick={(e) => {
                handleClose(e);
              }}
              className="pointer"
            />
          </p>
          <div id="inputFilter">
            <input
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="reset"
            />
            <input
              type="number"
              min="1900"
              max="2099"
              step="1"
              placeholder="Year"
              id="reset"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <select
              onChange={(e) => {
                setType(e.target.value);
              }}
              id="reset"
            >
              <option>Type of video:</option>
              <option>Movie</option>
              <option>Series</option>
              <option>Game</option>
            </select>
            <button
              onClick={(e) => {
                handleFilter(e);
              }}
            >
              Filter:
            </button>
          </div>
        </div>
        <div id="list">
          <List
            movies={movies}
            IndexOfFirst={IndexOfFirstMovies}
            IndexOfLast={IndexOfLastMovies}
          />
        </div>
        <div id="list2">
          <List
            movies={moviesM}
            IndexOfFirst={IndexOfFirstMovies}
            IndexOfLast={IndexOfLastMovies}
          />
        </div>
        <div id="list3">
          <List
            movies={moviesUp}
            IndexOfFirst={IndexOfFirstMovies}
            IndexOfLast={IndexOfLastMovies}
          />
        </div>
        <Pagination
          moviePerPage={moviePerPage}
          movies={movies}
          paginate={paginate}
        />
      </div>
    </>
  );
};
