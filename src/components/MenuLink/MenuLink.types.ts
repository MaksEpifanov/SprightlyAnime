import { ReactNode } from 'react';

export interface MenuLinkProps {
  to: string
  children: ReactNode
  icon?: ReactNode | null
  white?: boolean
}

export interface NavLinkStyledProps {
  white?: boolean
}
