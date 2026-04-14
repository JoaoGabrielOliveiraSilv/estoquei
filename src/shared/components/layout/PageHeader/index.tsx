import { cn } from '@/shared/utils/cn'

interface IPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  countItems: number
}

export default function PageHeader({ title, countItems, ...props }: IPageHeaderProps) {
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
      <h1 className="text-estoquei-text font-medium">{title}</h1>
      <span className={
        cn(
            'bg-estoquei-bg3 text-estoquei-text3',
            'px-2 py-[2px] text-sm font-medium ',
            'rounded-full border border-estoquei-border'
        )
      }>{countItems}</span>
    </div>
  )
}
