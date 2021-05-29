import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/main'
import Register from './pages/register'
import Post from './pages/post'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/main" component={Main} />
            <Route path="/register" component={Register} />
            <Route path ="/post" component={Post} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
