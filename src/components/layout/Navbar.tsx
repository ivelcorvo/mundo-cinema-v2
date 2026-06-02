/**
 * Navbar
 *
 * Barra de navegação fixa no topo da aplicação.
 * Contém o logo e um menu overlay retrátil com os links de navegação.
 * O menu flutua sobre o conteúdo ao abrir e some ao fechar.
 *
 * @example
 * <Navbar />
 */

import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faXmark,
  faHouse,
  faHeart,
  faUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../contexts/AuthContext'

const navLinks = [
  { to: '/', label: 'Home', icon: faHouse },
  { to: '/favorites', label: 'Favoritos', icon: faHeart },
  { to: '/profile', label: 'Perfil', icon: faUser },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  async function handleLogout() {
    await logout()
    closeMenu()
    navigate('/login')
  }

  return (
    <>
      {/* Barra fixa no topo */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] flex items-center justify-between px-6">
        <span className="text-[var(--color-brand)] font-bold text-lg tracking-tight">
          Mundo Cinema
        </span>

        <button
          onClick={toggleMenu}
          aria-label="Abrir menu"
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
        </button>
      </header>

      {/* Overlay escuro */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Menu lateral */}
      <nav
        className={[
          'fixed top-0 right-0 z-50 h-full w-72 bg-[var(--color-bg-secondary)] border-l border-[var(--color-border)]',
          'flex flex-col pt-24 pb-8 px-6',
          'transition-transform duration-300 ease-in-out',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <ul className="flex flex-col gap-1 flex-1">
          {navLinks.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[var(--color-brand)]/10 text-[var(--color-brand)]'
                      : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text-primary)]',
                  ].join(' ')
                }
              >
                <FontAwesomeIcon icon={icon} className="w-4" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botão de sair */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-error)] transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="w-4" />
          Sair
        </button>
      </nav>
    </>
  )
}