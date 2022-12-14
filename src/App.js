import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Main from './component/layout/Main';
import Statics from './component/Statitcs/Statics';
import Topics from './component/Topics/Topics';
import Quiz from './Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
      {
        path: '/topics',
        loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element : <Topics></Topics>
      },
      {
        path: '/statics',
        loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element : <Statics></Statics>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path: '/quiz/:id',
        loader : async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element : <Quiz></Quiz>
      }
      ],
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
