import Spiral from './pages/01_Spiral';
import Helpme from './pages/Helpme';
import Home from './pages/Home';
import Prize from './pages/Prize';
import PolarPerlin from './pages/02_PolarPerlin';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/perlin",
    element: <PolarPerlin />,
  },
  {
    path: "/helpme",
    element: <Helpme />,
  },
  {
    path: "/hector",
    element: <Spiral />,
  },
  {
    path: "/prize",
    element: <Prize />,
  },
]);

function App() {
  let elem = document.getElementById("root");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
