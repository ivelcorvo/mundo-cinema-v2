import { BrowserRouter, Routes, Route } from 'react-router'
import { ProtectedRoute } from './components/layout/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />

        {/* Rotas protegidas */}
        <Route path="/" element={
          <ProtectedRoute>
            <div>Home</div>
          </ProtectedRoute>
        } />
        <Route path="/movie/:id" element={
          <ProtectedRoute>
            <div>Movie Detail</div>
          </ProtectedRoute>
        } />
        <Route path="/favorites" element={
          <ProtectedRoute>
            <div>Favorites</div>
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <div>Profile</div>
          </ProtectedRoute>
        } />

        {/* Rota não encontrada */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}