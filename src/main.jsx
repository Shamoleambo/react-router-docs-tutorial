import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, {
  loader as contactsLoader,
  action as rootAction
} from './routes/root'
import Contact, { loader as singleContactLoader } from './routes/contact'
import EditContact, { action as editAction } from './routes/edit'
import ErrorPage from './error-page'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: contactsLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: singleContactLoader
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: singleContactLoader,
        action: editAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
