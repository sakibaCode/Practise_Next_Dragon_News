import Link from 'next/link';
import React from 'react';

const not_found = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 text-4xl font-semibold h-[80vh]'>
            <h2 className='text-red-500 text-'> Page Not Found</h2>
            <Link href={"/"}>
                <button className='btn bg-red-300 text-white'>Bact to Home</button>
            </Link>
        </div>
    );
};

export default not_found;