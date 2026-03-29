import { cn } from '@/shared/utils/cn'

interface IPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  countItems: number
  icon: React.ReactNode
}

export default function PageHeader({ title, countItems, icon, ...props }: IPageHeaderProps) {
  return (
    <div
      {...props}
      className={cn(
        'flex items-center gap-2',
        'h-[54px] px-6',
        'bg-estoquei-bg',
        'border-b border-estoquei-border',
        props.className
      )}
    >
      <h1 className="text-estoquei-text font-medium gap-2">{title}</h1>
      <span className={
        cn(
            'bg-estoquei-bg3 text-estoquei-text3',
            'px-2 py-[2px] text-[10px] ',
            'rounded-full border border-estoquei-border'
        )
      }>{countItems}</span>
    </div>
  )
}
