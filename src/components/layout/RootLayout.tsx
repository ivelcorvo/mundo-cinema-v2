/**
 * RootLayout
 *
 * Componente estrutural que envolve todas as páginas autenticadas.
 * Garante que Navbar e Footer estejam presentes em todas as páginas privadas,
 * com o conteúdo principal ocupando o espaço restante entre eles.
 *
 * @example
 * <RootLayout>
 *   <Home />
 * </RootLayout>
 */

import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-primary)]">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}