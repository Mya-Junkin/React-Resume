import "./App.css";
//import "@aws-amplify/ui-react/styles.css";
//import { API } from "aws-amplify";
//import { withAuthenticator } from "@aws-amplify/ui-react";
//import { Router } from "@aws-amplify/ui-react/dist/types/components/Authenticator/Router";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Resume from './pages/resume';
import Blog from './pages/blog';



const App = ({ signOut }) => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>

        </div>
    );
};

export default App;
//previously 'export default withAuthenticator(App);
