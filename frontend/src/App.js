import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
        <Router>
            <AuthProvider>
                <div className='App'>
                    <Switch>
                        <Route path='/' exact></Route>
                        <Route path='/home' exact>
                            <Navbar />
                            <Home />
                        </Route>
                        <Route path='/profile'>
                            <Navbar />
                            <Profile />
                        </Route>
                        <Route path='/message'>
                            <Navbar />
                            <Chat />
                        </Route>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/signUp'>
                            <SignUp />
                        </Route>
                    </Switch>
                </div>
                <ToastContainer
                    position='bottom-left'
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </AuthProvider>
        </Router>
    );
}

export default App;
