import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatSelectionPage = React.lazy(() =>
  import("seatselection/SeatSelection")
);
import ErrorBoundary from "./Error"
import movieData from "./movieObservable"
import useBearStore from "store/store";


const App = () => {
  const history = useHistory();
  const location = useLocation();
  const { routeUrl,selectedMovie} = useBearStore((state) => state)



  const movieClicked = (movie) => {
    //history.push(`details/${movie.id}`);
  };
React.useEffect(()=>{
  if(routeUrl=="/details"){
  history.push(`/details/${selectedMovie.id}`);
  }
  else{
    history.push(routeUrl);
  }
},[routeUrl])
 

  return (
    <Switch>
      <Route path="/details/:id">
        <Suspense fallback={null}>
          <DetailsPage routing={{ history, location }} location={location}></DetailsPage>
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={null}>
          <SeatSelectionPage></SeatSelectionPage>
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={null}>
          <HomePage
          
          ></HomePage>
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
