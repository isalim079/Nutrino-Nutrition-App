import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import AuthProvider from './router/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-Lato'>
    <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
    </div>
  </React.StrictMode>,
)
