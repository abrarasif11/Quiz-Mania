import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl font-poppins">Question Answer Part</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline font-poppins">What is the purpose of React Router?</summary>
				<div className="px-4 pb-4">
					<p className='font-poppins'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline font-poppins">How Does Context API Works?</summary>
				<div className="px-4 pb-4">
					<p className='font-poppins'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>
				</div>
			</details>
			<details open="">
				<summary className="py-2 outline-none cursor-pointer focus:underline font-poppins">Write Something About UseRef Hook?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p className='font-poppins'>useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component. 

The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section. 

Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component. 

For example, it’s often quite handy when using external libraries that weren’t made with React in mind.

You can initialize a new ref inside a component with the following code:</p>
				</div>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;