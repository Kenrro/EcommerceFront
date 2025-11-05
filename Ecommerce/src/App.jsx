import { useEffect, useState } from 'react'
import { Auth } from './components/pages/Auth'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { HomeLayout } from './components/header/HomeLayout'
import { Navigate } from 'react-router-dom'
import { AUTH_URI } from './api/Api'
import { CartContext, CartProvider } from './context/CartContext'

function App() {
  const [isValidToken, setIsValidToken] = useState(null);
  const token = localStorage.getItem("user-token");
  
  useEffect(() => {
    async function checkUserToken() {
      if (!token) {
        setIsValidToken(false)
        return
      }

      try {
        const response = await fetch(`${AUTH_URI}check`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        })

        if (!response.ok) throw new Error("Token invalido")
        setIsValidToken(true)
        
      } catch (err) {
        console.error("Error verificando token:", err)
        setIsValidToken(false)
      } 
    }

    checkUserToken()
  }, [token])

  if(isValidToken === null) {
    return <div>Cargando...</div>
  }
  return (
      
      isValidToken?
      (
          <CartProvider>
            <Routes>
              <Route path="/" element={<HomeLayout />} >
                <Route index element={<Home></Home>}></Route>
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </CartProvider>
        
      ):
      (
        <Routes>
          <Route path="auth" element={<Auth/>}></Route>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
        )
      
  )
}

export default App
