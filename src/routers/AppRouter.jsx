// feed back
import Error from "@/feedback/Error";

// pages
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import About from "@/pages/About";
import Contact from "@/pages/Contact";


// ui
import MainLayout from "@/UI/MainLayout";

// router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "@/pages/ProductDetails";


const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout /> ,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'Menu',
        element: <Menu />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "About",
        element: <About />
      },
    ],
  },
]);



export default function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}
