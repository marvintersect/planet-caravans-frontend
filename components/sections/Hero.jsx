import React from "react";
import Image from "next/image";
import RedCaravan from "/assets/Caravans/Colour-Red, Direction-Right.png";
import WhiteCaravan from "/assets/Caravans/Colour-White, Direction-Right.png";

const Hero = ({heading,message}) => {
    return (
        <hero>

            <div className='hero flex justify-center h-1/2'>
                <div className='container relative justify-items-center mx-auto p-9 mt-56'>
                    <h1 className='flex px-9 ml-12'>{heading}</h1>
                    <p className='flex w-2/5 px-9 mt-6 ml-12'>{message}</p>

                        <div className='container relative justify-items-center mx-auto px-9 mt-6 ml-12 mb-12'>
                            <button>
                                <a className="flex bg-transparent hover:bg-planet-black text-planet-black hover:text-planet-blue py-3 px-6 border border-planet-black hover:border-planet-black">
                                    Create your own
                                </a>
                            </button>
                        </div>

                    <div className='container relative flex mx-auto mt-6 ml-12'>
                        <div className="div-wrapper container items-center justify-center mx-auto relative float-left mr-36">
                            <Image src={RedCaravan} layout="responsive" alt='red-caravan' />

                            <div className='bg-planet-black absolute  top-1/4 left-1/4 rounded-full p-3 z-[5] ml-12'>
                                <button>
                                    <div
                                        className="relative w-24 h-24 rounded-full p-3 flex justify-center items-center text-center bg-transparent hover:bg-planet-black text-planet-white hover:text-planet-blue">
                                        <a>
                                            <p className='small-button'>Planet 23</p>
                                            <p className='small-button'> From £26,950 </p>
                                        </a>
                                    </div>
                                </button>
                            </div>

                        </div>
                        <div className='div-wrapper flex-nowrap container mx-auto float-right ml-36 -mr-36'>
                            <Image src={WhiteCaravan} layout="responsive" alt='white-caravan' />
                        </div>
                    </div>

                </div>
            </div>
        </hero>
    );
};

export default Hero;
