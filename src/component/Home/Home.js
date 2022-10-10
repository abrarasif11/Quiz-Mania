import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl m-8 ">
          Welcome to <span className="text-4xl font-bold">Quiz Times</span>
        </h1>
        <p className="mb-8">
          Here we test your knowledge
          <span className="text-2xl font-semibold "> of your Future Development</span> 
        </p>
            <div className='flex flex-col items-center justify-center'>
            <img src="https://img.freepik.com/free-vector/website-faq-section-user-helpdesk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-12.jpg?w=740&t=st=1665426064~exp=1665426664~hmac=779d47790f56d7fa4af01637e8f3886369deb25763593bb5962c90bd84b9b0b4" alt="" />
            </div>
        </div>
    );
};

export default Home;