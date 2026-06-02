/**
 * Footer
 *
 * Rodapé fixo na base da aplicação.
 * Exibe créditos e link para a API utilizada.
 *
 * @example
 * <Footer />
 */

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-6 px-6 mt-auto">
      <p className="text-center text-xs text-[var(--color-text-muted)]">
        Dados fornecidos por{' '}
        <a
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] transition-colors"
        >
          The Movie Database (TMDB)
        </a>
        . Projeto desenvolvido para fins de portfólio.
      </p>
    </footer>
  )
}