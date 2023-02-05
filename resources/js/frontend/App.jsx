import './style/common.css'
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import Root from './routes/Root';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
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
