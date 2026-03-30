import type { LabelHTMLAttributes } from 'react'

export interface IUploadImageProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
