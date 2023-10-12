import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

export const counterSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    routeUrl:"/",
    selectedMovie:  {  "id": "",
    "name": "",
    "imageUrl": "",
    "description": ""
    },
    bookingDetails:{
      movie: "",
      date:"",
      time:"",
    }
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    getMovieList: (state,actions) => {
      state.movieList = actions.payload;
    },
    getUserSelectedMovie:(state,actions)=>{
      state.selectedMovie=actions.payload
    },
    updateBookingDetails:(state,actions)=>{
      state.bookingDetails=actions.payload

    },
    updateRoute:(state,actions)=>{
      state.routeUrl=actions.payload
    }
  },
});

const { increment,  getMovieList, updateRoute, getUserSelectedMovie,updateBookingDetails} = counterSlice.actions;

const store = configureStore({
  reducer: {
    movie: counterSlice.reducer,
  },
});

export function useStore() {
  const  movieList = useSelector((state) => state.movie. movieList);
  const  routeUrl = useSelector((state) => state.movie.  routeUrl);
  const selectedMovie=useSelector((state)=>state.movie.selectedMovie);
  const  bookingDetails=useSelector((state)=>state.movie.bookingDetails)
  const dispatch = useDispatch();
  return {
    movieList,
    routeUrl,
    selectedMovie,
    bookingDetails,
    increment: () => dispatch(increment()),
    getMovieList: (payload) => dispatch(getMovieList(payload)),
    updateRoute:(payload)=>dispatch(  updateRoute(payload)),
    getUserSelectedMovie:(payload)=>dispatch( getUserSelectedMovie(payload)),
    updateBookingDetails:(payload)=>dispatch(updateBookingDetails(payload))
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}