import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../component/Quizes/Quizes';

const Quiz = () => {
    const quizs = useLoaderData();
    // console.log(quizs);
    const quizData = quizs.data.questions;
    const quizInfo = quizs.data;
    return (
        <div>
            
             <div className="flex flex-col justify-center items-center mt-4">
        <img
          src={quizInfo.logo}
          alt=""
          height={"50px"}
          width={"50px"}
          className="bg-black rounded-md mr-6"
        />
        <br />
        <p className='font-poppins'>
          In this category you have to answer
          <span className="font-bold m-1 text-2xl font-poppins">{quizInfo.total}</span> Quizes of
        </p>
        <p className="text-2xl m-2 font-poppins font-semibold">{quizInfo.name}</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
      {quizData.map((quiz) => (
          <Quizes 
          key={quiz.id}
           quiz={quiz}></Quizes>
        ))}
        </div>
      </div>
        
    );
};

export default Quiz;
