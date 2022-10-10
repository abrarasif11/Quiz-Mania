import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizes = useLoaderData([]);
    // console.log(quizes);
    const quizData = quizes.data;
    return (
        <div >
           {
            quizData.map(quiz => <Topic 
            key={quiz.id}
            quiz={quiz}
            ></Topic> )
           }
        </div>
    );
};

export default Topics;