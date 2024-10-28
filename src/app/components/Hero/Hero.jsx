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
        <section id='#' className='container pb-20 mx-auto'>
            <div className='md:flex justify-between items-center'>
                <div className='md:w-1/2 md:order-2'>
                    <Image src="/ashik_ahmed.png" alt="hero" width={500} height={500} className='mx-auto border-2 border-primary' />
                </div>
                <div className='md:w-1/2 md:order-1 mt-8 md:mt-0'>
                    <p className='text-xl mb-8'>WELCOME TO MY WORLD</p>
                    <h1 className='md:text-7xl text-3xl font-extrabold'>Hi, I&apos;m <span className='text-primary'>Ashik Ahmed</span></h1>
                    <h2 className='md:text-5xl text-2xl font-bold mt-8'> <span className='text-primary'>a</span> Software Developer</h2>

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