import Image from 'next/image';
import React from 'react';
import SocialIcon from '../ui/SocialIcon/SocialIcon';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Hero = () => {

    const socials = [
        {
            id: 1,
            link: "https://www.facebook.com/ashik.ahmed.568",
            icon: <Linkedin />,
        },
        {
            id: 2,
            link: "https://twitter.com/ashik_ahmed",
            icon: <Facebook />,
        },
        {
            id: 3,
            link: "https://github.com/ashikahmed",
            icon: <Instagram />,
        },
    ];

    return (
        <section id='#' className='container pb-20 mx-auto border-b border-gray-300'>
            <div className='md:flex md:justify-between md:gap-x-8 items-center'>
                <div className='md:w-4/12 md:order-2'>
                    <div className="relative">
                        {/* Gray background rectangle */}
                        <div className="absolute bottom-4 left-0 w-full h-4/6 bg-gradient-to-r from-gray-300 to-gray-200 z-0 rounded-lg shadow-lg"></div>
                        {/* Image */}
                        <Image
                            src="/ashik_ahmed.png"
                            alt="ashik ahmed"
                            width={500}
                            height={500}
                            className='relative w-full h-[500px] z-10 mx-auto'
                        />
                    </div>
                </div>

                <div className='md:w-8/12 md:order-1 mt-8 md:mt-0'>
                    <p className='text-xl mb-8'>WELCOME TO MY WORLD</p>
                    <h1 className='md:text-6xl text-3xl font-extrabold'>Hi, I&apos;m <span className='text-primary'>Ashik Ahmed</span></h1>
                    <h2 className='md:text-4xl text-2xl font-bold mt-8'> <span className='text-primary'>a</span> Software Developer</h2>

                    <div className="mt-16">
                        <p>FIND WITH ME</p>
                        <div className="flex gap-4 mt-4">
                            {
                                socials.map((social) => (
                                    <SocialIcon
                                        key={social.id}
                                        link={social.link}
                                        icon={social.icon}
                                        className="hover:bg-primary hover:text-white"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;