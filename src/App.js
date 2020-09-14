import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
    return (
        <div className="App">
            <Router>
            <Header/>
            <div className="app__body">
                <Sidebar/>
                <Switch>
                    <Route path="/room/:roomId">
                        <Chat/>
                    </Route>
                </Switch>
            </div>
            </Router>
        </div>
    );
}

export default App;