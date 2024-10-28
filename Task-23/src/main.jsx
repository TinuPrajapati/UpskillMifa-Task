import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom';
import { Dashboard, Home, About, Login, SignUp} from './Components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<Dashboard />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
