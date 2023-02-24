import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import {
    BrowserRouter,
    Routes, //replaces "Switch" used till v5
    Route,
} from "react-router-dom";
import Header from "./Components/Header";
//import { Router } from "@aws-amplify/ui-react/dist/types/components/Authenticator/Router";

//previous navbar componenet
// import Navbar from './Components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 



const App = ({ signOut }) => {
    return (
        <div className="App">
            <Header />
            <p>This is App.js</p>
        </div>
    );
};

export default App;
//previously 'export default withAuthenticator(App);
