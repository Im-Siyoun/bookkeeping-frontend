import React from 'react';
import Navigation from '../components/navbar';
import Booklist from  '../components/booklist';
import { Link } from "react-router-dom";

class Main extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <div className="content" class="center">
                    <Booklist />
                </div>
                <Link to="/register">
                    <button>등록 페이지</button>
                </Link>
            </div>
    )}
}

export default Main;