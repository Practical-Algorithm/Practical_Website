import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-baijamjuree ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        link_color: "text-button-tertiary-color-fg fill-button-tertiary-color-fg",
        secondary: "text-button-secondary-fg bg-button-secondary-color-bg border  border-button-secondary-border hover:bg-button-secondary-color-bg_hover",
      },
      size: {
        sm: "text-sm font-semibold py-2.5 px-[14px] gap-x-2",
        link_lg: "text-md font-semibold p-0 gap-x-2"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const iconVariants = cva("flex justify-center items-center", {
  variants: {
    size: {
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-8 h-8",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
