import React from 'react';
import Button from './ui/Button/Button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

    const menus = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Features',
            link: '/features'
        },
        {
            id: 3,
            name: 'Portfolio',
            link: '/portfolio'
        },
        {
            id: 4,
            name: 'Resume',
            link: '/resume'
        },
        {
            id: 5,
            name: 'Clients',
            link: '/clients'
        },
        {
            id: 6,
            name: 'Pricing',
            link: '/pricing'
        },
        {
            id: 7,
            name: 'Blog',
            link: '/blog'
        },
        // {
        //     id: 8,
        //     name: 'Contact',
        //     link: '/contact'
        // }
    ]

    return (
        <header className="py-4">
            <nav className="container max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0">
                            <Image
                                className="h-16 w-16 rounded-full border-4 border-primary"
                                src="/ashik_ahmed.png"
                                alt="Ashik Ahmed"
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className="hidden md:flex items-center">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {menus.map((menu) => (
                                    <Link
                                        key={menu.id}
                                        href={menu.link}
                                        className="text-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                                    >
                                        {menu.name}
                                    </Link>
                                ))}
                            </div>
                            <div className='ml-4'>
                                <Button label="Contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;