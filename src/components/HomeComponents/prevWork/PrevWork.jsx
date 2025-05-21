import React from 'react';

const PrevWork = () => {
    return (
        <div>
            <figure className="diff aspect-16/9 md:w-[45vw] mt-20 mx-auto md:-mb-40" tabIndex={0}>
                <div className="diff-item-1" role="img" tabIndex={0}>
                    <img alt="daisy" src="https://i.postimg.cc/0NL3vsy4/febiyan-Hk0e-Tvr-K7-Mg-unsplash.jpg" />
                    <h1 className='text-left p-5'>Before</h1>
                </div>
                <div className="diff-item-2" role="img">
                    <img
                        alt="daisy"
                        src="https://i.postimg.cc/g0Q90hNN/veronica-reverse-q-Ywy-RF9u-uo-unsplash.jpg" />
                    <h1 className='text-right p-5'>After</h1>
                </div>
                <div className="diff-resizer"></div>
            </figure>
        </div>
    );
};

export default PrevWork;