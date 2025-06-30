import { useId } from 'react'
import clsx from 'clsx'

// export function Logomark({ invert = false, filled = false, className, ...props }) {
//   return (
//     <img
//       src="/logo.png"
//       alt="Crystal Brand Educational Consult Logomark"
//       className={clsx(
//         'h-8 transition-all duration-300',
//         invert ? 'invert' : '',
//         filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
//         className
//       )}
//       {...props}
//     />
//   )
// }

export function Logo({ className, ...props }) {
  return (
     <img
      src="/logo.png"
      alt="Crystal Brand Educational Consult"
      className={clsx(className)}
      {...props}
    />
  )
}

export function LogoShort({ className, ...props }) {
  return (
    <span className={clsx('inline-flex items-center space-x-2', className)} {...props}>
      <img
        src="/logo.png"
        alt="Crystal Brand Educational Consult"
        className="h-8 w-auto"
      />
      <span className="text-lg font-semibold whitespace-nowrap">
        Crystal Brand
      </span>
    </span>
  )
}

export function LogoLong({ className, ...props }) {
  return (
    <span className={clsx('inline-flex items-center space-x-2', className)} {...props}>
      <img
        src="/logo.png"
        alt="Crystal Brand Educational Consult"
        className="h-8 w-auto"
      />
      <span className="text-lg font-semibold whitespace-nowrap">
        Crystal Brand Educational Consult
      </span>
    </span>
  )
}

