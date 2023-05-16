import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "features/loginForm";
import RegisterForm from "features/registerForm";

const App: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1>Hello</h1>,
            loader: undefined
        },
        {
            path: "login",
            element: <LoginForm />
        },
        {
            path: "register",
            element: <RegisterForm />
        }
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
