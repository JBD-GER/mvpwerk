'use client'

import type { ReactNode } from 'react'

export default function ScrollToFormButton({
  targetId = 'kontakt-form',
  className = '',
  children,
}: {
  targetId?: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={`#${targetId}`}
      onClick={(e) => {
        e.preventDefault()
        const el =
          document.getElementById(targetId) ?? document.querySelector('form')
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      className={className}
    >
      {children}
    </a>
  )
}
