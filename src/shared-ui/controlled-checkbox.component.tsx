import { Checkbox } from '@mantine/core'
import { FieldValues, useController } from 'react-hook-form'
import { TControlledInput } from '../types/controlled-input.type'
import clsx from 'clsx'
import cnBind from 'classnames/bind'
import styles from "./../components/index.module.scss"
const cx = cnBind.bind(styles)
interface IControlledCheckboxProps<T extends FieldValues>
  extends Omit<TControlledInput<T>, 'size'> {
  label: React.ReactNode
}

export default function ControlledCheckbox<T extends FieldValues>(
  props: IControlledCheckboxProps<T>
) {
  const { name, control, ...otherProps } = props

  const { field, fieldState } = useController({ name, control })

  return (
    <Checkbox
      color="#F9B004"
      {...otherProps}
      className={clsx(cx("input"))}
      {...field}
      error={fieldState.error?.message}
    />
  )
}
