import React from "react";
import { create } from 'zustand'

const useBearStore = create((set) => ({
 
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
    },
    getMovieList:  (movieList) => set({  movieList: movieList }),
    getUserSelectedMovie: ( selectedMovie) => set({  selectedMovie:  selectedMovie }),
    updateRoute:(routeUrl) => set({   routeUrl:  routeUrl }),
    updateBookingDetails:(bookingDetails) => set({   bookingDetails:  bookingDetails })
})

)

export default useBearStore

// export const counterSlice = createSlice({
//   name: "movie",
  
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
    
//     getUserSelectedMovie:(state,actions)=>{
//       state.selectedMovie=actions.payload
//     },
//     updateBookingDetails:(state,actions)=>{
//       state.bookingDetails=actions.payload

//     },
//     updateRoute:(state,actions)=>{
//       state.routeUrl=actions.payload
//     }
//   },
// });

// const { increment,  getMovieList, updateRoute, getUserSelectedMovie,updateBookingDetails} = counterSlice.actions;

// const store = configureStore({
//   reducer: {
//     movie: counterSlice.reducer,
//   },
// });

// export function useStore() {
//   const  movieList = useSelector((state) => state.movie. movieList);
//   const  routeUrl = useSelector((state) => state.movie.  routeUrl);
//   const selectedMovie=useSelector((state)=>state.movie.selectedMovie);
//   const  bookingDetails=useSelector((state)=>state.movie.bookingDetails)
//   const dispatch = useDispatch();
//   return {
//     movieList,
//     routeUrl,
//     selectedMovie,
//     bookingDetails,
//     increment: () => dispatch(increment()),
//     getMovieList: (payload) => dispatch(getMovieList(payload)),
//     updateRoute:(payload)=>dispatch(  updateRoute(payload)),
//     getUserSelectedMovie:(payload)=>dispatch( getUserSelectedMovie(payload)),
//     updateBookingDetails:(payload)=>dispatch(updateBookingDetails(payload))
//   };
// }

// export function StoreProvider({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }