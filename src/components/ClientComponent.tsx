"use client"
import React, { useEffect, useState } from 'react'

const ClientComponent = (
  { children, fallback }
    : {
      children: React.ReactNode,
      fallback: React.ReactNode
    }
) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return <div>
      {fallback}
    </div>;
  }

  return (
    <div>{children}</div>
  )
}

export default ClientComponent