import React from "react";
import SignUp from "./componets/SignUp";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Counter from "./componets/FavouriteMovies/FavouriteMovies";
export function route() {
  return (
      <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/card" component={<Counter />} />
      </Switch>
    </BrowserRouter>
    </>
  );
}
