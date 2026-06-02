import { BrowserRouter, Routes, Route } from 'react-router'
import { ProtectedRoute } from './components/layout/ProtectedRoute'
import { RootLayout } from './components/layout/RootLayout'

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
            <RootLayout>
              <div>Home</div>
            </RootLayout>
          </ProtectedRoute>
        } />
        <Route path="/movie/:id" element={
          <ProtectedRoute>
            <RootLayout>
              <div>Movie Detail</div>
            </RootLayout>
          </ProtectedRoute>
        } />
        <Route path="/favorites" element={
          <ProtectedRoute>
            <RootLayout>
              <div>Favorites</div>
            </RootLayout>
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <RootLayout>
              <div>Profile</div>
            </RootLayout>
          </ProtectedRoute>
        } />

        {/* Rota não encontrada */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}