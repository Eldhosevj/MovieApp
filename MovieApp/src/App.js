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
import { io } from "socket.io-client";
const socket = io("http://localhost:8080");

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = React.useState(null)
const [url,setUrl]=React.useState("/")

  const movieClicked = (movie) => {
    //history.push(`details/${movie.id}`);
  };
  React.useEffect(() => {
    console.log("runiing unnesary")
    socket.on("chat", (args) => {
      if(url!==args.routeUrl){
        setUrl(args.routeUrl)
         setData(args)

      }
      if (args.routeUrl == "/details") {
        history.push(`/details/${args.selectedMovie.id}`);
      }
      else {
        history.push(args.routeUrl);
      }
    });

  })


  return (
    <Switch>
      <Route path="/details/:id">
        <Suspense fallback={null}>
          <DetailsPage routing={{ history, location }} location={location}
            socket={socket}
            data={data}
          ></DetailsPage>
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={null}>
          <SeatSelectionPage
            socket={socket}
            data={data}
          ></SeatSelectionPage>
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={null}>
          <HomePage
            socket={socket}

          ></HomePage>
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
