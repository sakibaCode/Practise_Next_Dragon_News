import React from "react";

const Loading = () => {
    return (
        <div className="container mx-auto mt-10 animate-pulse space-y-4">

            <div className="h-6 bg-gray-300 rounded w-1/3"></div>

            <div className="space-y-3">
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>

            <div className="space-y-3">
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>

        </div>
    );
};

export default Loading;