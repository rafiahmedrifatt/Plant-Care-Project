import React, { Suspense } from 'react';
import Banner from '../components/HomeComponents/banner/Banner';
import NewPlants from '../components/HomeComponents/NewPlants/NewPlants';
import Loader from '../components/loader/Loader';

const Home = () => {
    const dataPromise = fetch('http://localhost:3000/plants').then(res => res.json())
    return (
        <div>
            <Banner />
            <Suspense fallback={Loader}>
                <NewPlants dataPromise={dataPromise} />
            </Suspense>
        </div>
    );
};

export default Home;