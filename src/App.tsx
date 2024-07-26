// Development
import { RouterProvider } from 'react-router-dom';

// Context
import { CartProvider } from './contexts/Cart';
import { UserProvider } from './contexts/User';

// CSS
import './index.css'

// Router
import { router } from './routes';

// CSS
import './App.css'

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App
