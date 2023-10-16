import React, { Suspense, useEffect, useState } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
    import MovieCard from "components/MovieCard"
import RoutingContext from "../../utils/RoutingProvider";
import "./HomeContent.scss";
import useBearStore from "store/store";

const dummyItem = [{ name: "Dummy Movie" }];

const HomeContent = (props) => {
  const { updateRoute, selectedMovie,movieList, getMovieList,getUserSelectedMovie} = useBearStore((state) => state)

  const [movies, setMovies] = useState(dummyItem);
  useEffect(async () => {
    // Add the logic to load the movies from server and set to the state
    const resp = await fetch("http://localhost:5555/movies");
    const data = await resp.json();
    setMovies(data);
    getMovieList(data)
 

  }, []);

  const movieClicked = (item) => {
   console.log( selectedMovie," selectedMovie")
     getUserSelectedMovie(item)
    updateRoute("/details")
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <MovieCard title={item.name} imageUrl={item.imageUrl}></MovieCard>
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <RoutingContext.Provider value={props.routing}>
        <QuickBooking></QuickBooking>
        <div className="movies-container">
          <Suspense fallback={null}>{renderMovieList()}</Suspense>
        
        </div>
      </RoutingContext.Provider>
    </div>
  );
};

export default HomeContent;
