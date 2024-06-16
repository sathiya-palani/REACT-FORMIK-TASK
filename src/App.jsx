import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.jsx';
import Author from './pages/Author.jsx';
import Book from './pages/Book.jsx';



// create a router 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <div><Link to="/book">Book Details</Link> &nbsp;&nbsp; | &nbsp;&nbsp;<Link to="/author">Author  Details</Link></div>
      },
      {
        path: "book",
        element: <Book />
      },
      {
        path: "author",
        element: <Author />
      }
    ]
  },
]);

const App = () => {
  // wrap the app with the RouterProvider
  return <RouterProvider router={router} />;
}
export default App;
