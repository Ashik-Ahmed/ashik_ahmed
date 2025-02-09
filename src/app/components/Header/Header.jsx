"use client";

import React, { useState, useEffect, use } from "react";
import "./Header.css"
import Button from "../ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import SocialIcon from "../ui/SocialIcon/SocialIcon";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    const currentPath = usePathname();
    console.log(" currentPath: ", !!currentPath.split("/")[1], ": ", currentPath.split("/")[1]);
    console.log(" activeSection: ", activeSection);

    const toggleSidebar = () => {
        if (isSidebarOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsSidebarOpen(false);
                setIsClosing(false);
            }, 800); // Match the animation duration
        } else {
            setIsSidebarOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "services", "expertise", "portfolio",
                "experience", "education", "blogs", "contact"
            ];

            // Check if at top of page
            if (window.scrollY < 100 && currentPath === "/") {
                setActiveSection("/");
                return;
            }

            // Check other sections
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100 && currentPath === `/`) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menus = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Services", link: "/#services" },
        { id: 3, name: "Expertise", link: "/#expertise" },
        { id: 4, name: "Portfolio", link: "/#portfolio" },
        { id: 5, name: "Experience", link: "/#experience" },
        { id: 6, name: "Education", link: "/#education" },
        { id: 7, name: "Blogs", link: "/#blogs" },
    ];

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
        <header className={`py-2 bg-[#ECF0F3] fixed top-0 left-0 w-full z-20 ${activeSection !== "/" && "shadow-md"}`}>
            <nav className="container max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0">
                            <Image
                                className="h-16 w-16 rounded-full border-2 border-gray-300 shadow-lg"
                                src="/ashik_ahmed.png"
                                alt="Ashik Ahmed"
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className="hidden md:flex items-center">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {menus.map((menu) => (
                                    < Link
                                        key={menu.id}
                                        href={menu.link}
                                        className={`relative text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium uppercase group ${(menu.link.replace('/#', '') === activeSection)
                                            ? 'text-primary'
                                            : ''
                                            }`}
                                    >
                                        {menu.name}
                                        {
                                            // console.log("menu.link: ", menu.link)
                                        }
                                        <span className={`absolute left-0 bottom-0 block h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full ${(menu.link.replace('/#', '') === activeSection) || (!!currentPath.split("/")[1] == true && menu.link.replace('/#', '').includes(currentPath.split("/")[1]))
                                            ? 'w-full'
                                            : ''
                                            }`}></span>
                                    </Link>
                                ))}
                            </div>
                            <div className="ml-4">
                                <Link href="/#contact">
                                    <Button label="Contact" />
                                </Link>
                            </div>
                        </div>
                        {
                            !isSidebarOpen && (
                                <div
                                    className="md:hidden"
                                    onClick={toggleSidebar}
                                >
                                    <Menu size={36} className="text-primary" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>

            {
                (isSidebarOpen || isClosing) && (
                    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
                        <div className={`w-80 p-2 bg-gray-100 text-gray-700 
                    ${isSidebarOpen && !isClosing ? "sidebar-enter" : ""}
                    ${isClosing ? "sidebar-exit" : ""}`}
                        >

                            <div className="flex items-center justify-between">
                                <div>
                                    <Image
                                        className="h-16 w-16 rounded-full border-2 border-gray-300"
                                        src="/ashik_ahmed.png"
                                        alt="Ashik Ahmed"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <X onClick={toggleSidebar} size={36} className="text-primary" />
                            </div>

                            <div className="mt-8">
                                {menus.map((menu) => (
                                    <Link
                                        key={menu.id}
                                        href={menu.link}
                                        onClick={toggleSidebar}
                                        className={`block px-4 py-2 text-gray-800 hover:bg-primary hover:bg-opacity-20 ${(menu.link === "/" && activeSection === "/") ||
                                            (menu.link.replace('/#', '') === activeSection)
                                            ? 'bg-primary bg-opacity-10'
                                            : ''
                                            }`}
                                    >
                                        {menu.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="absolute bottom-28">
                                <p>FIND WITH ME</p>
                                <div className="flex gap-4 mt-4">
                                    {
                                        socials.map((social) => (
                                            <SocialIcon
                                                key={social.id}
                                                link={social.link}
                                                icon={social.icon}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </header >
    );
};

export default Header;