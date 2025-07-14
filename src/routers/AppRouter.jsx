// feed back
import Error from "@/feedback/Error";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

// pages
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";

// ui
import MainLayout from "@/UI/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


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
