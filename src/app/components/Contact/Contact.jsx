"use client";

import React from 'react';
import styles from './Contact.module.css'
import Image from 'next/image';
import SocialIcon from '../ui/SocialIcon/SocialIcon';
import { ArrowRightIcon, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {

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

    const handleEmailSubmit = (e) => {
        e.preventDefault();

        console.log("Email submitted");
        const formData = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        console.log("Form submitted with data:", formData);
    };

    return (
        <section id='contact' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'>LET&apos;S CONNECT</p>
                <h2 className='text-4xl md:text-7xl font-bold text-gray-800 my-4'>Contact</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-16 mt-8">
                <div className={`${styles.card} md:w-5/12 relative flex flex-col justify-between gap-4 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group`}>
                    <div className="w-full  bg-white rounded-xl overflow-hidden">
                        <Image
                            src="/contact.png"
                            alt="contact ashik ahmed"
                            width={288}
                            height={288}
                            className="object-cover mx-auto h-full w-full rounded-xl group-hover:scale-125 transition-all duration-500"
                        />
                    </div>

                    <div>
                        <h1 className="relative mb-2 text-4xl font-bold leading-snug tracking-normal text-gray-900 antialiased line-clamp-2">Ashik Ahmed</h1>
                        <h3 className="relative mb-2 text-xl font-semibold leading-snug tracking-normal text-gray-700 antialiased line-clamp-2">Software Engineer</h3>

                        <p className="my-4">I am a software engineer based in Dhaka, Bangladesh. I specialize in web development and have experience working on a wide range of projects.</p>

                        <p className="inline-block">
                            Whatsapp:
                            <Link
                                href="https://wa.me/+8801521464568"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 hover:text-primary group/item relative inline-block">
                                +880 1521 464 568
                                <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-primary transition-all duration-300 group-hover/item:w-full"></span>
                            </Link>
                        </p>
                        <p className="inline-block mt-2">
                            Email:
                            <Link
                                href="mailto:ashikahmed121@gmail.com"
                                className="ml-2 hover:text-primary group/item relative inline-block">
                                ashikahmed121@gmail.com
                                <span className="absolute left-0 bottom-0 block h-[1px] w-0 bg-primary transition-all duration-300 group-hover/item:w-full"></span>
                            </Link>
                        </p>


                    </div>
                    <div className="mt-16">
                        <p className="text-gray-900">FIND WITH ME</p>
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
                <form onSubmit={handleEmailSubmit} className={`${styles.card} md:w-7/12 relative flex flex-col gap-8 rounded-xl bg-clip-border text-gray-700 shadow-md`}>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2 ">
                            <span className="uppercase">Your Name</span>
                            <input id='name' name='name' type="text" required className='input input-bordered w-full h-[50px] p-2 mt-2 rounded-md border-[3px] border-gray-300 focus:outline-primary' />
                        </div>
                        <div className="w-full md:w-1/2 ">
                            <span className="uppercase">Phone Number</span>
                            <input id='phone' type="text" required className='input input-bordered w-full h-[50px] p-2 mt-2 rounded-md border-[3px] border-gray-300 focus:outline-primary' />
                        </div>
                    </div>
                    <div className="">
                        <span className="uppercase">Email</span>
                        <input id='email' type="email" required className='input input-bordered w-full h-[50px] p-2 mt-2 rounded-md border-[3px] border-gray-300 focus:outline-primary' />
                    </div>
                    <div className="">
                        <span className="uppercase">Subject</span>
                        <input id='subject' type="text" required className='input input-bordered w-full h-[50px] p-2 mt-2 rounded-md border-[3px] border-gray-300 focus:outline-primary' />
                    </div>
                    <div className="">
                        <span className="uppercase">Your Message</span>
                        <textarea id='message' type="text" required className='input input-bordered w-full h-[200px] p-2 mt-2 rounded-md border-[3px] border-gray-300 focus:outline-primary' />
                    </div>

                    <div>
                        <button type='submit' className={`${styles.button} w-full h-[50px]`}>
                            <span className='uppercase flex gap-x-2 justify-center items-center'>Send Message <ArrowRightIcon /></span>
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Contact;