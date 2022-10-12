import React from 'react';

const Quizes = ({quiz}) => {
    return (
        <div>
           <div className=" m-4  bg-slate-100 border-1 mx-auto w-2/4 p-4">
      <h1 className='font-poppins'>{quiz.question.replace(/(<([^>]+)>)/ig,)}</h1>
     <div className='grid grid-cols-1 '>
     <label htmlFor="1">
        <p className='font-poppins border-2  border-indigo-500  mb-4 mt-4 '>
          <input  type="radio" name="answer" id="1" /> {quiz.options[0]}
        </p>
      </label>
      <label htmlFor="2">
        <p className='font-poppins border-2 border-indigo-500 mb-4 mt-4'>
          <input type="radio" name="answer" id="2" /> {quiz.options[1]}
        </p>
      </label>
      <label htmlFor="3">
        <p className='font-poppins border-2 border-indigo-500  mb-4 mt-4'>
          <input type="radio" name="answer" id="3" /> {quiz.options[2]}
        </p>
      </label>
      <label htmlFor="4">
        <p className='font-poppins border-2 border-indigo-500 mb-4 mt-4'>
          <input  type="radio" name="answer" id="4" /> {quiz.options[3]}
        </p>
      </label>
     </div>
    </div> 
        </div>
    );
};

export default Quizes;