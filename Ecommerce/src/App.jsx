import { useState } from 'react'
import { Auth } from './components/pages/Auth'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { HomeLayout } from './components/header/HomeLayout'
import { Navigate } from 'react-router-dom'

function App() {
  
  return (
    <Routes>
      {localStorage.getItem("user-token")?
      (
        <Route path='/' element={<HomeLayout></HomeLayout>}>

        </Route>
      ):
      (
        <>
        <Route path="auth" element={<Auth/>}></Route>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
        </>
        )}
      
    </Routes>
  )
}

export default App
