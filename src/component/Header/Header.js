import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <header className="p-4 bg-sky-200 dark:text-gray-100">
	<div className="container md:flex  justify-between  h-16 mx-auto">
		<a rel="noopener noreferrer" href="/home" aria-label="Back to homepage" className="flex items-center p-2">
			<h2 className='font-poppins text-4xl font-bold'>Quiz Mania</h2>
			<img className='ps-10 w-10' src="https://tse2.mm.bing.net/th?id=OIP.auVPY58zZxbU9hqfkmFb1gHaHa&pid=Api&P=0" alt="" />
		</a>
		<ul className="items-stretch hidden  space-x-3 md:flex">
			<li className="flex mt-4">
				<Link className='font-poppins' to={'/home'}>Home</Link>
			</li>
			<li className="flex mt-4">
			<Link className='font-poppins' to={'/topics'}>Topics</Link>
			</li>
			{/* <li className="flex mt-4">
			<Link className='font-poppins' to={'/quiz'}>Quiz</Link>
			</li> */}
			<li className="flex mt-4">
			<Link className='font-poppins' to={'/statics'}>Statics</Link>
			</li>
			<li className="flex mt-4">
			<Link className='font-poppins' to={'/blog'}>Blog</Link>
			</li>
		</ul>
		<div className='md:hidden '>
		<Link className='font-poppins mx-2' to={'/home'}>Home</Link>
		<Link className='font-poppins mx-2' to={'/topics'}>Topics</Link>
		<Link className='font-poppins mx-2' to={'/statics'}>Statics</Link>
		<Link className='font-poppins mx-2' to={'/blog'}>Blog</Link>
		</div>
	</div>
</header>
        </div>
    );
};

export default Header;