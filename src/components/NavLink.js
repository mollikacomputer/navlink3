"use client"
import Link from 'next/link';

const NavLink = ({children, href, exact= false, activeClassName, ...props}) => {

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;