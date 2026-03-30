import { CloudUpload } from 'lucide-react'

import { cn } from '@/shared/utils/cn'

import type { IUploadImageProps } from './types'

export default function UploadImage({
  className,
  onChange,
  ...labelProps
}: IUploadImageProps) {

  return (
    <label
      {...labelProps}
      className={cn(
        'relative w-full cursor-pointer flex flex-col',
        'bg-estoquei-bg2',
        'border-[1.5px] border-dashed border-estoquei-border rounded-md',
        'outline-none',
        'focus-within:border-estoquei-border2',
        'flex min-h-[120px] items-center justify-center',
        'hover:border-estoquei-accent hover:bg-estoquei-accent/[0.03]',
        className
      )}
    >
      <CloudUpload size={24} className="pointer-events-none text-estoquei-text2" aria-hidden />
      <input type="file" accept="image/*" onChange={onChange} className="sr-only" />
      <div className="text-estoquei-text2 text-[13px] flex flex-col text-center">
        <span className="font-medium text-estoquei-accent">Toque para enviar uma imagem</span>
        <span className="text-estoquei-text3 font-light">PNG, JPG até 5 MB</span>
      </div>
    </label>
  )
}
