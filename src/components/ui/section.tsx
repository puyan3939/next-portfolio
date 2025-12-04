// app/_components/Section.tsx
import type { ReactNode } from "react"

type SectionProps = {
  title: string
  children: ReactNode
  className?: string
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section         
            style={{
            borderRadius: "2vw",
            border: "solid 3px black",
            
        }}
    className={`
        border-primary
        w-[80%]
        sm:w-[70%]
        lg:w-[50%]
        px-4
        sm:px-8
        lg:px-12
        py-4
        sm:py-8
        lg:py-12
        mt-8
        ${className}
        `}>
      <h1 
       style={{
            fontFamily:""
        }}
      className="text-3xl font-bold text-primary text-center">
        {title}
        </h1>
        
      <div className="mt-4">
        {children}
      </div>

    </section>
  )
}
