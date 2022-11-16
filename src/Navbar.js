import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Innovat10n 1nc.
      </Link>
      <ul className="Nav-Bar-Categories">
        <CustomLink to="/how">H0w We 1nn0vate</CustomLink>
        <CustomLink to="/tenants">the 1nn0vat10n tenants</CustomLink>
        <CustomLink to="/products">0ur pr0ducts</CustomLink>
        <CustomLink to="/services">0ur serv1ces</CustomLink>
        <CustomLink to="/tv">the tv sh0w</CustomLink>
        <CustomLink to="/careers">d0 y0u have what 1t takes t0 1nn0vate?</CustomLink>
        <CustomLink to="/contact">c0ntact us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
