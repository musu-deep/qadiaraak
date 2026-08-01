import type { FC } from 'react'

export const Logo: FC<{ className?: string; size?: number }> = ({ className = '', size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    aria-label="شعار محامي اراك"
  >
    <rect width="32" height="32" rx="8" fill="#0B1F3A" />
    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#C9A24B" strokeOpacity="0.35" />
    <path
      d="M16 6l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10v-6l8-4z"
      stroke="#C9A24B"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 16l3 3 6-6.5"
      stroke="#E9C97A"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Wordmark: FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`font-display font-extrabold tracking-tight ${className}`}>
    محامي <span className="text-gold-400">اراك</span>
  </span>
)
