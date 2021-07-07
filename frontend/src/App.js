import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />

                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='/message'>
                        <Chat />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
