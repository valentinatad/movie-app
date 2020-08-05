import axios from "axios";
export const listOfMovies = async (search, title, year, type) => {
    console.log(search)
    return await axios.get(`http://www.omdbapi.com/?s=${search}&t=${title}&y=${year}&type=${type}&apikey=1f1e30ce`).then(response => {
      
      return response
    })
  }
  