import clsx from 'clsx';
import { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={clsx(
        className,
        'rounded bg-gradient-to-bl from-primary-400 to-primary-300 px-1 py-4 text-light'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
