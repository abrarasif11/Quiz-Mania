import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../component/Quizes/Quizes';

const Quiz = () => {
    const quizs = useLoaderData();
    // console.log(quizs);
    const quizData = quizs.data.questions;
    return (
        <div>
             <h1>Quiz</h1>
        {quizData.map((quiz) => (
          <Quizes 
          key={quiz.id}
           quiz={quiz}></Quizes>
        ))}
        </div>
    );
};

export default Quiz;
