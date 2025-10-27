import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

export default function Container({ className = '', ...props }: Props) {
  return (
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`} {...props} />
  )
}

