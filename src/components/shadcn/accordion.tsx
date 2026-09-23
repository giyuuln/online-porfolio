import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '../ui'

/**
 * shadcn/ui accordion, on the Radix disclosure primitive (MIT).
 *
 * Hand-authored rather than pulled with `npx shadcn add`: this environment
 * blocks ui.shadcn.com (403 at the egress proxy), and the generated file
 * would need the same edits anyway. Deloused per components/shadcn/README:
 *   - lucide-react's ChevronDown  ->  Icon.Chevron (no new icon dependency)
 *   - no `cva` (Apache-2.0, and a single variant does not need it)
 *   - type-only imports split out, since verbatimModuleSyntax makes a type
 *     in value position a hard TS1484 error
 *
 * Radix drives the open/close height with --radix-accordion-content-height;
 * the matching keyframes live in tailwind.config.js.
 */

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-t border-line', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <Icon.Chevron className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:text-brand" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-6 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
