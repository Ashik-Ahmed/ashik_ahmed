import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section id='footer' className='container w-full mx-auto pt-12 border-t border-gray-300'>
            <p className='text-center'>
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by
                <Link href='/' className='relative text-primary font-semibold ml-1 group'>
                    <span>
                        Ashik Ahmed
                    </span>
                    <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </p>
        </section>
    );
};

export default Footer;