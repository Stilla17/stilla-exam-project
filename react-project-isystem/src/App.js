import React from "react";
import Window from "./page/window/Window";
import {Switch, Route} from "react-router-dom";
import InfoPage from "./page/info/InfoPage";
import Search from "./page/search/Search";

function App() {
    return (
        <div className="container">

            <Switch>

                <Route exact path="/" component={Window}/>
                <Route exact path="/info/:id" component={InfoPage}/>

            </Switch>
        </div>
    );
}

export default App;
