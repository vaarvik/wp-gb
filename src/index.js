import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import App from './App';
import './assets/styles/style.scss';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FrontPage from './components/FrontPage/FrontPage';
import components from './components/gutenberg/components';
import SingleComponentPage from './components/SingleComponentPage/SingleComponentPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <FrontPage />
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
