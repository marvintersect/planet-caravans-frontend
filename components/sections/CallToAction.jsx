import React from 'react';
import Image from "next/image";
import RedCaravan from "/assets/Caravans/Colour-Red, Direction-Right.png";
import WhiteCaravan from "/assets/Caravans/Colour-White, Direction-Right.png";

const CallToAction = () => {
    return (
        <div className='cta flex justify-center h-1/2'>

            <div className="columns h-1/2 justify-center justify-items-center px-36 py-12">
                <div className='column container relative justify-center justify-items-center items-center mx-auto p-12'>

                    <div className='div-wrapper flex-nowrap container mx-auto float-left ml-36 -mr-36'>
                        <p className='text-left leading-loose px-12'>
                            Hi
                        </p>
                        <Image src={WhiteCaravan} layout="responsive" alt='white-caravan' />
                    </div>

                </div>
                <div className='column container relative justify-center justify-items-center mx-auto p-12'>
                    <div className='div-wrapper flex-nowrap container mx-auto float-right ml-36 -mr-36'>
                        <p className='text-left leading-loose px-12'>
                            Hi
                        </p>
                    <Image src={WhiteCaravan} layout="responsive" alt='white-caravan' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;