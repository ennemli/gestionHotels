import './style/common.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Root from './routes/Root';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        
        path: 'contact',
        element: <Contact />
      }
    ]
  },

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
