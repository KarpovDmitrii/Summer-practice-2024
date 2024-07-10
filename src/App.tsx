import * as React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Caharacters } from './characters';
import { Comics } from './comics';
import { CharacterPages } from './characters_pages';
import { ComicsPages } from './comics_pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/characters" />,
  },
  {
    path: '/characters',
    element: <Caharacters />,
  },
  {
    path: '/comics',
    element: <Comics />,
  },
  {
    path: '/characters/:id',
    element: <CharacterPages />,
  },
  {
    path: '/comics/:id',
    element: <ComicsPages />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;