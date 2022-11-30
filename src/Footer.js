import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <footer>
                <nav className="footer">
                    <div className="footer-logo">
                        <br />
                        <Link to="/" className="footer-site-title">
                            innovat10ns
                        </Link>
                    </div>
                    <ul className="Footer-Bar-Categories">
                        <CustomLink to="/how">h0w we 1nn0vate</CustomLink>
                        <CustomLink to="/tenants">inn0vat10ns tenants</CustomLink>
                        <CustomLink to="/industries">industr1es we serve</CustomLink>
                        <CustomLink to="/products">our pr0ducts</CustomLink>
                        <CustomLink to="/services">our serv1ces</CustomLink>
                        <CustomLink to="/tv">tv sh0w</CustomLink>
                        <CustomLink to="/careers">can you 1nn0vate?</CustomLink>
                        <CustomLink to="/contact">c0ntact us</CustomLink>
                    </ul>
                    <br />
                    {`Copyright © innovat10ns ${year}`}
                </nav>

            </footer>
        </>
    )
};

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