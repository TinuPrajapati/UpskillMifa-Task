import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home, Payment } from './Components/index.js';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element={<Home/>}/>
      <Route path="payment" element={<Payment/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
