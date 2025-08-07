import { cn } from '@/lib/utils';
import React from 'react'

type PurpleIconProps = {
  children: React.ReactNode;
  className?: string;
}

const PurpleIcon = ({ children , className } : PurpleIconProps) => {
  return (
    <div className={cn(`px-3 py-2 iconBackground ${className}`)}>{children}</div>
  )
}

export default PurpleIcon