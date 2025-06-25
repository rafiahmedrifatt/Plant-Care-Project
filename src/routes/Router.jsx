import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddPlants from "../pages/AddPlants";
import AllPlants from "../pages/AllPlants";
import PlantDetails from "../pages/PlantDetails";
import MyPlant from "../pages/MyPlant";
import Update from "../pages/Update";
import Loader from "../components/loader/Loader";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'aboutUs',
                Component: AboutUs
            },
            {
                path: 'addPlants',
                element:
                    <PrivateRoute>
                        <AddPlants />
                    </PrivateRoute>
            },
            {
                path: 'allPlants',
                Component: AllPlants,
                loader: () => fetch('https://plant-care-server-kappa.vercel.app/plants'),
                HydrateFallback: Loader
            },
            {
                path: 'plant/:id',
                element: <PrivateRoute><PlantDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://plant-care-server-kappa.vercel.app/plant/${params.id}`),
                HydrateFallback: Loader
            },
            {
                path: 'myPlants/:email',
                element: <PrivateRoute><MyPlant /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://plant-care-server-kappa.vercel.app/myPlants/${params.email}`),
                HydrateFallback: Loader
            },
            {
                path: 'update/:id',
                element: <PrivateRoute><Update /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://plant-care-server-kappa.vercel.app/plant/${params.id}`),
                HydrateFallback: Loader
            }
        ]
    }
])







