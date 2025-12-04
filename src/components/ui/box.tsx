// app/_components/box.tsx

type BoxProps = {
  className?: string
  children: React.ReactNode
}

export function Box({children,  className = "" }: BoxProps) {
  return (
    
    <div
    style={{
      
    }}
      className={`
        bg-primary
        text-center
        ${className}
        `}
    >
      {children}
</div>

  )
  
}

