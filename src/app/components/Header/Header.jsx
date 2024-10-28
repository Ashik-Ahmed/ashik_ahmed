"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menus = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Features",
            link: "/features",
        },
        {
            id: 3,
            name: "Portfolio",
            link: "/portfolio",
        },
        {
            id: 4,
            name: "Resume",
            link: "/resume",
        },
        {
            id: 5,
            name: "Clients",
            link: "/clients",
        },
        {
            id: 6,
            name: "Pricing",
            link: "/pricing",
        },
        {
            id: 7,
            name: "Blog",
            link: "/blog",
        },
        // {
        //     id: 8,
        //     name: 'Contact',
        //     link: '/contact'
        // }
    ];

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
                            <div className="ml-4">
                                <Button label="Contact" />
                            </div>
                        </div>
                        <div className="md:hidden">

                            <Menu onClick={toggleSidebar} size={36} className="text-primary" />
                        </div>
                    </div>
                </div>
            </nav>

            {isSidebarOpen && (
                <div
                    className={`fixed inset-0 z-50 flex ${isSidebarOpen ? "sidebar-enter" : "sidebar-exit"}`}
                >
                    <div className="w-80 p-2 bg-gray-200 text-gray-700">

                        <div className="flex items-center justify-between">
                            <div>
                                <Image
                                    className="h-16 w-16 rounded-full border-4 border-white"
                                    src="/ashik_ahmed.png"
                                    alt="Ashik Ahmed"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <X onClick={toggleSidebar} className="" />
                        </div>

                        <div className="mt-8">
                            {menus.map((menu) => (
                                <Link
                                    key={menu.id}
                                    href={menu.link}
                                    onClick={toggleSidebar}
                                    className="block px-4 py-2 text-gray-800 hover:bg-primary hover:bg-opacity-20"
                                >
                                    {menu.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 bg-black opacity-50" onClick={toggleSidebar}></div>

                </div>
            )}
        </header>
    );
};

export default Header;