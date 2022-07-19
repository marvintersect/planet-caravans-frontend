import React from "react";
import Image from "next/image";
import CaravanPicture from "/assets/Caravans/CaravanPicture.png"

const ContentImage = () => {
    return (
        <div className='bg-clip-content p-12 ml-12 -mr-36'>
            <Image src={CaravanPicture} alt='caravan_picture' layout='responsive' />
        </div>
    );
};

export default ContentImage;
