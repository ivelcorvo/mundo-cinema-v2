/**
 * Input
 *
 * Campo de texto reutilizável com suporte a label, ícone, erro e hint.
 *
 * @example
 * // Input simples
 * <Input label="E-mail" type="email" placeholder="seu@email.com" />
 *
 * // Input com erro
 * <Input label="Senha" type="password" error="Senha incorreta." />
 *
 * // Input com ícone
 * <Input label="Buscar" icon={faMagnifyingGlass} placeholder="Buscar filmes..." />
 *
 * // Input com hint
 * <Input label="Senha" type="password" hint="Mínimo de 6 caracteres." />
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  icon?: IconDefinition
}

export function Input({
  label,
  error,
  hint,
  icon,
  id,
  className = '',
  ...rest
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}

        <input
          id={inputId}
          className={[
            'w-full bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]',
            'rounded-[var(--radius-md)] px-4 py-2.5 text-sm outline-none',
            'border transition-colors placeholder:text-[var(--color-text-muted)]',
            'focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent',
            error
              ? 'border-[var(--color-error)]'
              : 'border-[var(--color-border)] hover:border-[var(--color-border-hover)]',
            icon ? 'pl-10' : '',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        />
      </div>

      {error && (
        <p className="text-xs text-[var(--color-error)]">{error}</p>
      )}

      {hint && !error && (
        <p className="text-xs text-[var(--color-text-muted)]">{hint}</p>
      )}
    </div>
  )
}