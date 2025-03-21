import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Applayout from './components/Applayout';
import ThankYou from './components/ThankYou';


function App() {
  const router = createBrowserRouter([
    // {
    //   path: '/',
    //   element:
    //     <About />
    // },
    // {
    //   path: '/resume',
    //   element:
    //     <Resume />
    // },
    // {
    //   path: '/portfolio',
    //   element:
    //     <Portfolio />
    // },
    // {
    //   path: '/contact',
    //   element: <Contact />
    // }
    {
      element: <Applayout />,
      children: [
        {
          path: '/',
          element:
            <About />
        },
        {
          path: '/resume',
          element:
            <Resume />
        },
        {
          path: '/portfolio',
          element:
            <Portfolio />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/thankyou',
          element: <ThankYou />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
