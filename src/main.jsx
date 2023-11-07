import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Queryclient, QueryclientProvider} from '@tanstack/react-query'

const queryClient = new Queryclient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryclientProvider client={queryClient}>
      <App />
    </QueryclientProvider>
  </React.StrictMode>,
)
