import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  { id: 1, title: "Bangladesh Wins Historic Test Match Against Australia" },
  { id: 2, title: "Government Announces New Digital Economy Policy" },
  { id: 3, title: "Dhaka Stock Exchange Hits Record High" },
  { id: 4, title: "New Climate Change Report Warns of Rising Sea Levels" },
  { id: 5, title: "Tech Giants Invest Billions in AI Infrastructure" },
  { id: 6, title: "Local Farmers Adopt Solar-Powered Irrigation Systems" },
  { id: 7, title: "Scientists Discover New Species in Amazon Rainforest" },
  { id: 8, title: "Global Oil Prices Drop Amid Economic Uncertainty" },
  { id: 9, title: "Education Ministry Launches Free Online Learning Platform" },
  { id: 10, title: "Cyclone Warning Issued for Coastal Districts" },
];

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto rounded-xl'>
            <button className='btn bg-red-600 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map((n)=>(
                        <span key={n.id} className='mr-10'>{n.title}</span>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;