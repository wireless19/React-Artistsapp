import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Artists from "./Artists";
import Artist from "./Artist";
import Album from "./Album";


function App() {

    return (

        <Router>

            <Switch>

                <Route exact path="/" component={Artists} />
                <Route path="/artist/:id" component={Artist} />
                <Route path="/album/:id" component={Album} />


            </Switch>
        </Router>

    )

}

export default App;