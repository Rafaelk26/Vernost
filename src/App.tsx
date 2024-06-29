// Development
import { RouterProvider } from 'react-router-dom';


// CSS
import './index.css'

// Router
import { router } from './routes';

// CSS
import './App.css'

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
