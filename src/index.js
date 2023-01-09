import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import App from './App';
import './assets/styles/style.scss';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DefaultBlocksFrontPage from './pages/DefaultBlocksFrontPage/DefaultBlocksFrontPage';
import CustomBlocksFrontPage from './pages/CustomBlocksFrontPage/CustomBlocksFrontPage';
import components from './components/gutenberg/components';
import SingleComponentPage from './pages/SingleComponentPage/SingleComponentPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CustomBlocksFrontPage />
      },
      {
        path: "/:slug",
        errorElement: <ErrorPage />,
        loader: ({params}) => {
          const component = components.find(component => component.slug === params.slug)
          if(component) return redirect(`/${component.category}/${component.slug}`, 301);
          return null;
        }
      },
      {
        path: "/:category/:slug",
        element: <SingleComponentPage />,
        errorElement: <ErrorPage />,
        loader: ({params}) => components.find(component => component.slug === params.slug && component.category === params.category)
      }
    ]
  },
]);

const root = ReactDOM;
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
