import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import App from "./App";
import store from "./store";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import { MoviesList } from "./components/MovieList";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        index={true}
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/movie/:movieId"
        element={<MoviePage />}
      />
      <Route
        path="/actor/:actorId"
        element={<ActorPage />}
      />
      {/* <Route
        path="/movie/editmovie"
        element={<MoviesList />}
      /> */}
    </Route>
  )
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
