import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    const allnews = useLoaderData()
    return (
        <div>
            <h2>Dragon News Home: {allnews.length}</h2>
            {
                allnews.map(news => <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;