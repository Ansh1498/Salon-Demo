import { Link } from 'react-router-dom'

const base =
  'inline-block rounded-full bg-button px-9 py-4 text-lg text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-sand'

export default function Button({ to, href, children, className = '', ...props }) {
  const classes = `${base} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}