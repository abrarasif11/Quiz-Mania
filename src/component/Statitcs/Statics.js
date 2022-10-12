import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const quizCategories = useLoaderData()
    const quizTypes = quizCategories.data
    console.log(quizTypes);
    return (
        <div className='flex flex-col items-center justify-center mt-4'>
            <LineChart
        width={450}
        height={450}
        data={quizTypes}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />
        <Tooltip />
      </LineChart>
        </div>
    );
};

export default Statics;