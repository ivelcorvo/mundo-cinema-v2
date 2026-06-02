/**
 * Card
 *
 * Container genérico reutilizável com fundo, borda e padding padrão.
 * Base para qualquer bloco de conteúdo agrupado visualmente.
 *
 * @example
 * // Card padrão
 * <Card>
 *   <p>Conteúdo aqui</p>
 * </Card>
 *
 * // Card elevado sem padding
 * <Card variant="elevated" padding="none">
 *   <img src="..." />
 * </Card>
 *
 * // Card clicável
 * <Card onClick={() => navigate('/movie/1')}>
 *   <p>Filme</p>
 * </Card>
 */

type CardVariant = 'default' | 'elevated'
type CardPadding = 'none' | 'sm' | 'md' | 'lg'

interface CardProps {
  variant?: CardVariant
  padding?: CardPadding
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<CardVariant, string> = {
  default:
    'bg-[var(--color-bg-card)] border border-[var(--color-border)]',
  elevated:
    'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
}

const paddingClasses: Record<CardPadding, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
}

export function Card({
  variant = 'default',
  padding = 'md',
  onClick,
  children,
  className = '',
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={[
        'rounded-[var(--radius-lg)]',
        variantClasses[variant],
        paddingClasses[padding],
        onClick
          ? 'cursor-pointer transition-colors hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-elevated)]'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}