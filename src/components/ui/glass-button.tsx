import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden glass water-droplets hover-lift hover-glow",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30",
        hero: "bg-primary/10 text-foreground border-primary/20 hover:bg-primary/20 hover:text-primary-glow",
        ghost: "bg-transparent border-border hover:bg-muted/50 hover:text-accent-foreground",
        outline: "border-primary/50 bg-primary/5 hover:bg-primary/15 hover:border-primary",
        demo: "bg-gradient-primary text-white border-0 hover:scale-105 font-semibold shadow-lg hover:shadow-primary/50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-xl px-8",
        xl: "h-14 rounded-2xl px-12 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }