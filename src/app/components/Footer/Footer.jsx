import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section id='footer' className='container w-full mx-auto pt-12 border-t border-gray-300'>
            <p className='text-center'>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by <Link href='/' className='text-primary'>Ashik Ahmed</Link> </p>
        </section>
    );
};

export default Footer;