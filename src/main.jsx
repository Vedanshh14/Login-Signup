
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
   <ToastContainer 
            position="top-center"
            autoClose={2000} 
            hideProgressBar={false}
            closeOnClick
            pauseOnHover={false}
            draggable
            theme="dark"
        />
  </BrowserRouter>
   
 
)
