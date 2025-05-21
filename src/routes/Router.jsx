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
                path: 'addPlants',
                Component: AddPlants
            },
            {
                path: 'allPlants',
                Component: AllPlants,
                loader: () => fetch('http://localhost:3000/plants'),
                HydrateFallback: Loader
            },
            {
                path: 'plant/:id',
                Component: PlantDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/plant/${params.id}`),
                HydrateFallback: Loader
            },
            {
                path: 'myPlants/:email',
                Component: MyPlant,
                loader: ({ params }) => fetch(`http://localhost:3000/myPlants/${params.email}`),
                HydrateFallback: Loader
            },
            {
                path: 'update/:id',
                Component: Update,
                loader: ({ params }) => fetch(`http://localhost:3000/plant/${params.id}`),
                HydrateFallback: Loader
            }
        ]
    }
])







