import Spiral from './Riddles/01_Spiral';
import Helpme from './pages/Helpme';
import Home from './pages/Home';
import Prize from './pages/Prize';
import PolarPerlin from './Riddles/02_PolarPerlin';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home next="perlin" help="helpme"/>,
  },
  {
    path: "/perlin",
    element: <PolarPerlin next="hector"/>,
  },
  {
    path: "/hector",
    element: <Spiral next="prize"/>,
  },
  {
    path: "/prize",
    element: <Prize />,
  },
  {
    path: "/helpme",
    element: <Helpme next="/"/>,
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
