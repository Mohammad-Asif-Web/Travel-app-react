import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/Service/Service"
import Contact from "../components/Contact/Contact"
import Category from "../components/Category/Category"
import Login from "../components/Login/Login"
import Signup from "../components/Signup/Signup"


 const Routes = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/service",
                element: <Service></Service>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/category",
                element: <Category></Category>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
        ]
    }
])
export default Routes;

