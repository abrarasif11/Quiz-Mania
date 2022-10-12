import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({quiz}) => {
	const navigate = useNavigate()
	const handleAddQuiz = (id) =>{
		navigate(`/quiz/${id}`)
	}
    
    return (
        <div>
            <div className="m-5 max-w-xs rounded-md shadow-md bg-white-100 dark:text-gray-100">
	<img src={quiz.logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-slate-300"  />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide font-poppins">{quiz.name}</h2>
			<p className="text-xl font-semibold tracking-wide font-poppins">Total Quiz : {quiz.total}</p>
			
		</div>
		<button onClick={() => {handleAddQuiz(quiz.id)}} type="button" className="flex items-center justify-center w-full p-3 font-xl tracking-wide rounded-md bg-violet-700 hover:bg-indigo-500	 text-gray-100 font-poppins">Start Quiz</button>
	</div>
</div>
        </div>
    );
};

export default Topic;