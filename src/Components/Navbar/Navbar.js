import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import {Button} from "../../globalStyles";
import Logo from '../../Assets/images/Logo.png'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavbarLinks,
    NavBtnLink
} from './Navbar.Styles'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    };

    useEffect(() => {
        setButton();
    }, []);

    window.addEventListener('resize' , showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo onClick={closeMobileMenu}>
                            <NavIcon src={Logo}/>
                            Ultra
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavbarLinks onClick={closeMobileMenu} to="/">
                                    Home
                                </NavbarLinks>
                            </NavItem>
                            <NavItem>
                                <NavbarLinks onClick={closeMobileMenu} to="/intro">
                                    Intro
                                </NavbarLinks>
                            </NavItem>
                            <NavItem>
                                <NavbarLinks onClick={closeMobileMenu} to="/faq">
                                    FAQ
                                </NavbarLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/register'>
                                        <Button primery>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/register'>
                                        <Button onClick={closeMobileMenu} fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
