import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import Dashboard from './component/dashboard.jsx'
import './styles/navbar.css'
// import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <App/>
//   },
//   {
//     path: "about",
//     className: 'active',
//     element: <NavigationBar/>
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
