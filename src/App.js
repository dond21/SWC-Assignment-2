import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl,Button } from 'react-bootstrap';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=86d62c97f0ba142a76178b34c08bedef";
const API_SEARCH = "https://api.themoviedb.org/3/movie/company?api_key=86d62c97f0ba142a76178b34c08bedef&query";

function App() {

      const [movies, setMovies] = useState([]);
      const [query, setQuery] = useState('');

    useEffect(() => {
      fetch(API_URL)
      .then((res) => res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
    }, [])

    const searchMovie = async(e)=>{
      e.preventDefault();
      console.log("Searching...");
      try{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=86d62c97f0ba142a76178b34c08bedef&query=${query}`;
        const res= await fetch(url);
        const data= await res.json();
        console.log(data);
        setMovies(data.results);
      }

        catch(e){
          console.log(e);
        }
    } 
     
    const changeHandler=(e)=>{
      setQuery(e.target.value);
    }

  return (
    
    <div class="conatiner flex">
    <div class="left">
      <div class="ltop flex">
        <img src="images/Logo.svg" class="mx-12 w-12 my-3" alt="" />
        <div class="py-8 text-xl -mx-6 font-bold">Movies</div>
      </div>

      <div class="lbet mx-14 text-xl my-7 space-y-10 font-semibold">
        <div>Search Results</div>
        <div>All Team</div>
        <div>Core</div>
        <div>Developers</div>
        <div>Mentors</div>
      </div>

      <div class="ldown">
        <button class="my-56 mx-14 w-36 h-10 text-xl font-bold bg-black text-white rounded-lg">
          + Add
        </button>
      </div>
    </div>

    <div class="right">
      <div class="rtop flex" onSubmit={searchMovie} autoComplete="off">
        <div class="mx-96"></div>
        <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
        <Button className=" w-12 h-14 my-3" variant="secondary" type = "submit">
        <img
          src="images/search-logo.svg"
          
          className="w-8 mx-1  cursor-pointer"
          alt=""
        />
        </Button>
        <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2 mx-3 h-14 my-3"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}>

              </FormControl>
              </Form>
      </div>

      <div class="rdown">
        <div class="grid grid-cols-3 space-y-5 gap-3 justify-center">
        {movies.map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq}/>)}
        </div>
      </div>

    </div>
  </div>
  );
}

export default App;
