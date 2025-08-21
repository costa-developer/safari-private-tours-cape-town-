"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b border-secondary/12 dark:border-white/12", className)}
        {...props}
    />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex ">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex cursor-pointer flex-1 items-center justify-between py-5 lg:py-7 text-sm font-medium transition-all text-left [&[data-state=open]>#plusicon]:rotate-45 [&[data-state=open]>#plusicon]:bg-primary",
                className
            )}
            {...props}
        >
            {children}
            <div id="plusicon" className=" bg-secondary/12 dark:bg-white/50 p-2 md:p-3 rounded-full transition-transform duration-200 ">
                <Plus className="h-5 w-5 shrink-0 text-muted-foreground" style={{color:'#000'}} />
            </div>
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
