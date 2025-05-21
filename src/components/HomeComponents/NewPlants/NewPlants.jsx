import React, { use } from 'react';

const NewPlants = ({ dataPromise }) => {
    const newTreesData = use(dataPromise)
    return (
        <div className='w-8/12 mx-auto grid grid-cols-3'>
            {
                newTreesData.map(data => <div className="card card-side bg-base-100 shadow-sm w-[20vw]">
                    <figure className='w-[10vw]'>
                        <img
                            src={data.photo}
                            alt="Movie" />
                    </figure>
                    <div className="card-body w-[10vw]">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default NewPlants;