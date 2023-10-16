import React, { useEffect, useState } from "react";
import "./DetailsContent.scss";
import { io } from "socket.io-client";
const sockets = io("http://localhost:8080");
import {useStore } from "store/store";
const DetailsContent = (props) => {
  const socket=props?props.socket:sockets
  const data = props.data?props.data:{};
  const selectedMovie=data.selectedMovie?data.selectedMovie:null
  const [movie, setMovie] = useState([]);
  const [date, setDate] = useState("01/02/2022");
  const [time, setTime] = useState("10 Am");
  const {selectedMovie:userselectedMovie, routeUrl,  getMovieList, updateRoute, getUserSelectedMovie,movieList,updateBookingDetails}=useStore()

  useEffect(() => {
   

    setMovie(selectedMovie);
  },[]);



  const renderImage = () => {
    const imgUrl = `http://localhost:5555/images/${movie.imageUrl}`;
    return <img src={imgUrl}></img>;
  };

  const bookMovie = () => {
  const movieList=data.data?data.data:[]

    const booking = {
      movie: movie.id,
      date,
      time,
    };

    // import("movieapp/MovieData").then((module) => {
    //   const movieData = module.default;
    //   movieData.next(booking);
    //   props.routing.history.push("/book");
    // });
    updateBookingDetails(booking)

    socket.emit("chat",{data:movieList,routeUrl:"/book",selectedMovie:selectedMovie,booking:booking});

  };

  return (
    <div className="details-content-container">
      <div className="details-content-row">
        {renderImage()}
        <div className="details-content-column ml-2">
          <div>
            <h3 className="movie-title">{movie.name}</h3>
            <br></br>
            <span>{movie.description}</span>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="details-content-column align-center">
        <div className="details-content-book-movie">
          <span className="mb-2">Book Movie</span>
          <select
            placeholder="Select Date"
            className="mb-2"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          >
            <option value="01/02/2022">01/02/2022</option>
            <option value="02/02/2022">02/02/2022</option>
            <option value="03/02/2022">03/02/2022</option>
            <option value="04/02/2022">04/02/2022</option>
            <option value="05/02/2022">05/02/2022</option>
          </select>
          <select
            placeholder="Select Time"
            className="mb-2"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          >
            <option value="10 Am">10 Am</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="4 PM">4 PM</option>
            <option value="8 PM">8 PM</option>
            <option value="9:30 PM">9:30 PM</option>
          </select>
          <button onClick={bookMovie}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
