import Spiral from './pages/02_Spiral';
import Home from './pages/01_Home';
import './App.css'
import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/spiral",
    element: <Spiral />,
  },
]);

function App() {
  const words = ["         ","Miles to go", "before I sleep", "you've let me down","no reason for me to stay here"];
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
