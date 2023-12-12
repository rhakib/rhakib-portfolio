import { Navbar, Button } from "keep-react";
import { Link, NavLink, } from "react-router-dom";

import './Navbar.css'


const NavBar = () => {
    

    return (
        <div className="w-full bg-black" >
            <Navbar className="bg-black z-10 bg-opacity-70 text-white" fluid={true}>
                <Navbar.Container className="flex mx-auto w-full max-w-screen-xl items-center justify-between">
                    <Navbar.Container className="flex items-center">
                        <Navbar.Brand>
                            <Link to='/'><h2 className="font-bold text-2xl">RHdev</h2></Link>
                        </Navbar.Brand>
                        <Navbar.Divider></Navbar.Divider>
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden nav navbarText text-white items-center justify-between gap-8">
                            <NavLink to='/'><Navbar.Link linkName="Home" /></NavLink>
                            <NavLink to='/projects'><Navbar.Link linkName="Projects" /></NavLink>

                            <NavLink to='/about'><Navbar.Link linkName="About me" /></NavLink>
                        </Navbar.Container>
                        <Navbar.Collapse collapseType="sidebar">
                            <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            

                            <NavLink to='/contact' className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : 'btn btn-ghost btn-sm'} ><Navbar.Link linkName="Contact Us" /></NavLink>
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>

                    <Navbar.Container className="flex gap-2">
                        
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default NavBar;