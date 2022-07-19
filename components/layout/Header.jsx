import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "/assets/Logos/PlanetCaravansLogo.svg";
import MobileMenu from "/assets/Logos/PlanetCaravansMobileMenu.svg";
import {AiOutlineClose} from "react-icons/ai";

const Header = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('#000')

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect( () => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#fff')
                setTextColor('#000')
            } else {
                setColor('transparent')
                setTextColor('#000')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);


    return (

        <nav>
            <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-100'>
                <div className='max-w-[1240px] m-auto flex justify-between items-center px-4 text-planet-black'>
                    <ul style={{color: `${textColor}`}} className='hidden sm:flex px-9'>
                        <li className='py-4 px-12 hover:text-planet-red'>
                            <Link href='/commercial'>Commercial</Link>
                        </li>
                        <li className='py-4 px-12 hover:text-planet-red'>
                            <Link href='/tourers'>Tourers</Link>
                        </li>
                    </ul>

                    <Link href='./'>
                        <Image className='px-15 mx-3 sm:justify-between justify-items-stretch' src={Logo} alt="planet caravans" />
                    </Link>

                    <ul style={{color: `${textColor}`}} className='hidden sm:flex px-9'>
                        <li className='py-4 px-12 hover:text-planet-red'>
                            <Link href='/about'>Our History</Link>
                        </li>
                        <li className='py-4 px-12 hover:text-planet-red'>
                            <Link href='/contact'>Get in Touch</Link>
                        </li>
                    </ul>


                    {/*Mobile Menu Button*/}
                    <div onClick={handleNav} className='block sm:hidden z-10'>
                        {nav ? <AiOutlineClose size={30} style={{color: `${textColor}`}} /> : <Image className='px-15 mx-3 sm:justify-start justify-between justify-items-stretch' src={MobileMenu} alt="planet caravans" /> }
                    </div>

                    {/*Mobile Menu*/}
                    <div className={nav ? 'sm:hidden bg-planet-white absolute top-0 left-o right-0 bottom-o flex justify-center items-center w-full h-screen bg-planet-white ease-in' : 'sm:hidden bg-planet-white absolute top-0 left-[-100%] right-0 bottom-o flex justify-center items-center w-full h-screen bg-planet-white ease-in'}>
                        <ul>
                            <li className='p-4 text-3xl hover:text-planet-red'>
                                <Link href='/commercial'>Commercial</Link>
                            </li>
                            <li className='p-4 text-3xl hover:text-planet-red'>
                                <Link href='/tourers'>Tourers</Link>
                            </li>
                            <li className='p-4 text-3xl hover:text-planet-red'>
                                <Link href='/about'>Our History</Link>
                            </li>
                            <li className='p-4 text-3xl hover:text-planet-red'>
                                <Link href='/contact'>Get in Touch</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Header;
