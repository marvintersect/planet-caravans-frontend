import React from 'react';

const ContentText = ({subheading,heading,text1, text2}) => {
    return (
        <div className="columns h-1/2 justify-center justify-items-center px-36 py-12">
            <div className='column container relative justify-center justify-items-center items-center mx-auto p-12'>
                <h5 className='text-left p-12'>
                    {subheading}
                </h5>
                <h2 className='text-left font-normal w-4/5 px-12'>
                    {heading}
                </h2>
            </div>
            <div className='column container relative justify-center justify-items-center mx-auto p-12'>
                <p className='text-left leading-loose px-12 mt-24'>
                    {text1}
                </p>
                <p className='text-left leading-loose px-12 mt-9'>
                    {text2}
                </p>
            </div>
        </div>
    );
};

export default ContentText;
