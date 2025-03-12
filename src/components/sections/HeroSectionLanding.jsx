import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section className='relative w-full h-screen flex flex-col items-center justify-center px-4 lg:px-16 gap-3'>
    <div className='mx-auto max-w-sm flex flex-col items-center justify-center'>
        <img src='/landing/mid-logo.png' className='w-full object-contain h-24' />
        <h2 className='text-4xl font-medium grad mt-4'>BondBridge</h2>
    </div>

    <div className='flex items-center justify-center space-x-4'>
        <h1 className='text-4xl md:text-2xl lg:text-5xl font-bold text-gray-800 leading-normal'>
            <span
                className='leading-normal text-4xl md:text-3xl lg:text-6xl bg-gradient-to-tl from-[#D220FF] to-[#1E17D0] bg-clip-text text-transparent'
                style={{
                    backgroundSize: '200% 100%',
                    backgroundPosition: '100% 73%',
                }}
            >
                Coming soon...
            </span>
        </h1>
    </div>
</section>


	);
};

export default HeroSection;
