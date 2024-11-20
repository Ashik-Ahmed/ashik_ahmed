import React from 'react';
import styles from './Contact.module.css'
import Image from 'next/image';
import SocialIcon from '../ui/SocialIcon/SocialIcon';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

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

    return (
        <section id='blogs' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'>LET&apos;S CONNECT</p>
                <h2 className='text-4xl md:text-7xl font-bold text-gray-800 my-4'>Contact</h2>
            </div>

            <div className="flex mt-8">
                <div className={`${styles.card} relative flex flex-col justify-between gap-4 w-80 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group`}>
                    <div className="w-full min-h-[14rem] bg-white rounded-xl overflow-hidden">
                        <Image
                            src="/contact.png"
                            alt="contact ashik ahmed"
                            width={288}
                            height={288}
                            className="object-cover mx-auto h-full w-full rounded-xl group-hover:scale-125 transition-all duration-500"
                        />
                    </div>

                    <div>
                        <h1 className="relative mb-2 cursor-pointer text-4xl font-bold leading-snug tracking-normal text-gray-900 antialiased line-clamp-2">Ashik Ahmed</h1>
                        <h3 className="relative mb-2 cursor-pointer text-xl font-semibold leading-snug tracking-normal text-gray-700 antialiased line-clamp-2">Software Engineer</h3>

                        <p className="my-4">I am a software engineer based in Dhaka, Bangladesh. I specialize in web development and have experience working on a wide range of projects.</p>

                        <p>Phone: <span className='hover:text-primary hover:border-primary hover:border-b'>+880 1521 464 568</span></p>
                        <p>Email: <span className='hover:text-primary hover:border-primary hover:border-b'>ashikahmed121@gmail.com</span></p>
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
                    {/* <div className="mt-6 flex-1">
                        <div className="flex items-center gap-2 text-sm">
                            <Clock4 size={16} />
                            {blog?.duration}
                        </div>
                        <div className="mt-4">
                            <h5 className="relative mb-2 cursor-pointer text-xl font-semibold leading-snug tracking-normal text-gray-900 hover:text-primary antialiased line-clamp-2">
                                {blog?.title}
                                <ArrowUpRight className="inline opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </h5>
                        </div>
                    </div> */}
                </div>
            </div>

        </section>
    );
};

export default Contact;