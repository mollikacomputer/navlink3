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
        <nav className="flex items-center justify-between container mx-auto" >
            <h2 className="text-2xl font-semibold"> Ranjit NavLink </h2>
            <ul className="flex items-center justify-center ">
                {navItems.map(({path, title})=>(
                    <li className="mx-2" key={path}>
                        <NavLink exact={'/'} href={path} activeClassName="text-blue-500" >
                        {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default NavBar;