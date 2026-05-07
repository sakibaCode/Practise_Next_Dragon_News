import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 container mx-auto rounded-xl'>
            <button className='btn bg-red-600 text-white'>Latest</button>
            <Marquee>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Enim temporibus earum sit laboriosam ab deleniti hic explicabo
                  tempora nihil quae maiores esse neque, perferendis, rerum quaerat
                   quidem dolorem commodi sint?
            </Marquee>
        </div>
    );
};

export default BreakingNews;