import React from 'react';

const Quizes = ({quiz}) => {
    return (
        <div>
           <div className="m-4 border-2">
      <h1>{quiz.question}</h1>
      <label htmlFor="1">
        <p>
          <input type="radio" name="answer" id="1" /> {quiz.options[0]}
        </p>
      </label>
      <label htmlFor="2">
        <p>
          <input type="radio" name="answer" id="2" /> {quiz.options[1]}
        </p>
      </label>
      <label htmlFor="3">
        <p>
          <input type="radio" name="answer" id="3" /> {quiz.options[2]}
        </p>
      </label>
      <label htmlFor="4">
        <p>
          <input type="radio" name="answer" id="4" /> {quiz.options[3]}
        </p>
      </label>
    </div> 
        </div>
    );
};

export default Quizes;