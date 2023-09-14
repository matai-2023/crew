import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'w-auto bg-black text-white py-2 px-4 rounded-lg shadow-left-bottom-pink',
        className,
        'text-uppercase'
      )}
      style={{ fontFamily: 'Inter, sans-serif' }}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
