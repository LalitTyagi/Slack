import React from 'react';
import './App.css';
import {useStateValue} from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Chat from './Chat/Chat';
import Header from './Header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';


function App() {
    // const[user, setUser] = useState(null);
    const[{user}] = useStateValue(null);
    return (
        <div className="App">
            <Router>
                {!user ? (
                    <Login/>
                ) : (
                        <>
                            <Header />
                            <div className="app__body">
                                <Sidebar />
                                <Switch>
                                    <Route path="/room/:roomId">
                                        <Chat />
                                    </Route>
                                </Switch>
                            </div>
                        </>
                    )}
            </Router>
        </div>
    );
}

export default App;