import clsx from "clsx"
import { FC } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<ButtonProps> = ({ className, children, ...rest}) => {
  return (
    <button className={clsx(className, 'bg-gradient-to-bl from-primary-400 to-primary-300 py-4 px-1 rounded')} {...rest}>{children}</button>
  )
}
export default Button