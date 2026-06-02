/**
 * Badge
 *
 * Etiqueta reutilizável para exibir categorias, gêneros ou status.
 *
 * @example
 * // Badge padrão
 * <Badge>Ação</Badge>
 *
 * // Badge com variante de destaque
 * <Badge variant="brand">Em alta</Badge>
 *
 * // Badge de status
 * <Badge variant="success">Disponível</Badge>
 *
 * // Badge pequeno
 * <Badge size="sm">Drama</Badge>
 */

type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'error'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  brand:
    'bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/20',
  success:
    'bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20',
  warning:
    'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border border-[var(--color-warning)]/20',
  error:
    'bg-[var(--color-error)]/10 text-[var(--color-error)] border border-[var(--color-error)]/20',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
}

export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center font-medium rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}