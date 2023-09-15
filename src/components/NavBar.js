import NavLink from "./NavLink";

const navItems = [
    {
        path:'/',
        title:"Home",
    },
    {
        path:'/about',
        title:"About",
    },
    {
        path:'/services',
        title:"Services",
    },
    {
        path:'/contact',
        title:"Contact",
    },
    {
        path:'/blog',
        title:"Blog",
    },
];

const NavBar = () => {
    return (
        <nav className="flex justify-between" >
            <h2> Ranjit NavLink </h2>
            <ul className="flex ">
                {navItems.map(({path, title})=>(
                    <li className="mx-2" key={path}>
                        <NavLink href={path}>
                        {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;