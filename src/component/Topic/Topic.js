import React from 'react';

const Topic = ({quiz}) => {
    
    return (
        <div>
            <div className="m-5 max-w-xs rounded-md shadow-md bg-white-100 dark:text-gray-100">
	<img src={quiz.logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-slate-300"  />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide font-poppins">{quiz.name}</h2>
			<p className="text-xl font-semibold tracking-wide font-poppins">Total Quiz : {quiz.total}</p>
			
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-xl tracking-wide rounded-md bg-violet-700 text-gray-100 font-poppins">Start Quiz</button>
	</div>
</div>
        </div>
    );
};

export default Topic;