import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//만든 페이지들을 import
// import HomePage from "./pages/home.tsx";
import Movies from "./pages/movies.tsx";
import NotFound from "./pages/not-found.tsx";
import RootLayout from "./layout/root-layout.tsx";
import HomePage from "./pages/home.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        // element: <HomePage/>,
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index : true,
                element: <HomePage/>
            },
            {
                path: 'movies/:movieId',
                element: <Movies/>
            }
        ]
    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
