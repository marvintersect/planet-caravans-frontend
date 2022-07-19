import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from '/assets/Logos/PlanetCaravansFooterLogo.svg';


const Footer = () => {
    return (
        <footer>
            <div className='container relative bg-planet-black h-1/8 w-full flex md:flex-row justify-between mx-auto px-9'>
                <div className='flex px-9 ml-12'>
                    <Link href='./'>
                        <Image src={FooterLogo} />
                    </Link>
                </div>

                <div >
                    <ul className='text-planet-white justify-end px-9 mr-12 flex gap-x-9'>
                        <li className='hover:text-planet-blue'>
                            <Link href='/privacy'>Privacy Policy</Link>
                        </li>
                        <li className='hover:text-planet-blue'>
                            <Link href='/cookie'>Cookie Policy</Link>
                        </li>
                        <li className='hover:text-planet-blue'>
                            <Link href='./'>&copy; 2022</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
