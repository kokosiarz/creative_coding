import Spiral from './pages/02_Spiral';
import Home from './pages/01_Home';
import Prize from './pages/03_Prize';
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
