import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import "./index.css";



// lazy loading
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </>
    );
};
// createBrowserRouter is function of react-router-dom to create a browser router and recommended router
// it include path: "/about", -- path
// element: <about/> ---path direction

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={"loading..."}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                // suspense for when loading takes time instaed which will throw error
                element: <Suspense fallback={<h1>Loading.....</h1>}>
                    <Grocery /></Suspense>,
            },
            {
                path: "/restaurants",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));


// RouterProvider
root.render(<RouterProvider router={appRouter} />);