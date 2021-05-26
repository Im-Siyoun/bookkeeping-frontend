import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main'
import Register from './pages/register'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/main" component={Main} />
            <Route path="/register" component={Register} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
