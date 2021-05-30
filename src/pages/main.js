import React from 'react';
import Navigation from '../components/navbar';
import Booklist from  '../components/booklist';

class Main extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <div className="content" class="center">
                    <Booklist />
                </div>
            </div>
    )}
}

export default Main;