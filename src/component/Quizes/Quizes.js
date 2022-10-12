import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Quizes = ({quiz}) => {
  const getans = (answer) => {
    console.log(getans);
    if (answer === quiz.correctAnswer) {
      toast.success("It's Correct Answer!!", { autoClose: 800 });
    } else {
      toast.warning("It's Wrong Answer", { autoClose: 800 });
    }
  }
  const [answer, displayAns] = useState();
    return (
      <div className="flex flex-col justify-center items-center m-4  bg-slate-300 to-blue-500  shadow-lg dark:bg-gray-800 w-2/4 rounded-md text-black">
      <div className="flex justify-around items-center">
        <h1 className="text-black font-poppins text-md font-medium m-2">{quiz.question}</h1>
        <FontAwesomeIcon
          icon={faEye}
          className="mx-4 font-poppins"
          value={quiz.correctAnswer}
          onClick={() => displayAns(quiz.correctAnswer)}
        />
      </div>
      <div className="grid grid-cols border-1 gap-2 m-4">
        <button
          className="  focus:bg-slate-100 font-poppins border-black rounded-md"
          onClick={() => getans(quiz.options[0])}
        >
          1.{quiz.options[0]}
        </button>
        <button
          className="focus:bg-slate-100 font-poppins rounded-md"
          onClick={() => getans(quiz.options[1])}
        >
          2.{quiz.options[1]}
        </button>
        <button
          className="focus:bg-slate-100 font-poppins rounded-md"
          onClick={() => getans(quiz.options[2])}
        >
          3.{quiz.options[2]}
        </button>
        <button
          className="focus:bg-slate-100 font-poppins rounded-md"
          onClick={() => getans(quiz.options[3])}
        >
          4.{quiz.options[3]}
        </button>
      </div>
      <div className="text-black bg-sky-200 w-full p-4 rounded-md font-medium">
        <p className='font-poppins'>Click on the eye if you want to see correct answer</p>
        <p className='font-poppins'>Specially Recomended to try self!</p>
        <p className="text-xl text-green-600 font-poppins font-semiold">{answer}</p>
      </div>
    </div>

   
    );
};

export default Quizes;