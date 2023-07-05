import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Sematic UI styles added
import 'semantic-ui-css/semantic.min.css'
import { QueryClient, QueryClientProvider } from 'react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// const queryClient = new QueryClient()

// ReactDOM.createRoot(document.getElementById("root")).render(

//     <QueryClientProvider>
//       <App />
//     </QueryClientProvider>

// );