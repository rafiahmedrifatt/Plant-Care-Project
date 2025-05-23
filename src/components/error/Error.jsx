import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-[url(https://i.postimg.cc/gJFrTwJ0/simple-tree-sketch-falling-leaves.jpg)] bg-cover h-[100vh]">
            <div className="text-center">
                <p className="text-base font-semibold text-white">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-white sm:text-xl/8">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;