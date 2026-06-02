/**
 * Spinner
 *
 * Indicador de carregamento reutilizável com suporte a tamanhos.
 * Usado para feedback visual durante operações assíncronas.
 *
 * @example
 * // Spinner padrão
 * <Spinner />
 *
 * // Spinner grande centralizado
 * <Spinner size="lg" className="mx-auto" />
 *
 * // Spinner pequeno inline
 * <Spinner size="sm" />
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

type SpinnerSize = 'sm' | 'md' | 'lg'

interface SpinnerProps {
  size?: SpinnerSize
  className?: string
}

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'text-base',
  md: 'text-2xl',
  lg: 'text-4xl',
}

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  return (
    <span
      className={[
        'text-[var(--color-brand)]',
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <FontAwesomeIcon icon={faSpinner} spin />
    </span>
  )
}