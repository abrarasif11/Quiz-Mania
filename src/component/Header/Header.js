import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="p-4 bg-sky-200 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<h2 className='text-4xl font-bold'>Quiz Times</h2>
			<img className='ps-10 w-10' src="https://tse2.mm.bing.net/th?id=OIP.auVPY58zZxbU9hqfkmFb1gHaHa&pid=Api&P=0" alt="" />
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<Link to={'/'}>Home</Link>
			</li>
			<li className="flex">
				<Link to={'/topics'}>Topics</Link>
			</li>
			<li className="flex">
				<Link to={'/statics'}>Statics</Link>
			</li>
			<li className="flex">
				<Link to={'/blog'}>Blog</Link>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Header;