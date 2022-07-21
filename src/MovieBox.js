import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, poster_path, vote_average}) =>{
    return (
    <div className="container">

        <div className="w-64">
       
       <img className="w-64 rounded-sm" src={API_IMG+poster_path} alt="" />
       <h1 className="font-bold bg-black text-white">{title}</h1>
       <h2 className="font-bold bg-black text-white">IMDB: ⭐{vote_average}</h2>

        </div>

        </div>
    )
}

export default MovieBox;