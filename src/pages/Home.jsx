import React, { Suspense } from 'react';
import Banner from '../components/HomeComponents/banner/Banner';
import NewPlants from '../components/HomeComponents/NewPlants/NewPlants';
import Loader from '../components/loader/Loader';
import TotalWork from '../components/HomeComponents/totalWork/TotalWork';
import PlantCareSection from '../components/HomeComponents/PlantCareSection/PlantCareSection';
import PlantBenefitsSection from '../components/HomeComponents/PlantBenefitSection/PlantBenefitSection';

const Home = () => {
    const dataPromise = fetch('https://plant-care-server-kappa.vercel.app/plants').then(res => res.json())
    return (
        <div>
            <Banner />
            <Suspense fallback={<Loader />}>
                <NewPlants dataPromise={dataPromise} />
            </Suspense>
            <TotalWork />
            <PlantCareSection></PlantCareSection>
            <PlantBenefitsSection></PlantBenefitsSection>
        </div>
    );
};

export default Home;