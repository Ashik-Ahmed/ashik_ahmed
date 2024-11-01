import { ArrowBigRight, ArrowRight, Globe, Menu, Tag } from 'lucide-react';
import React from 'react';
import styles from './Services.module.css'

const Services = () => {

    const services = [
        {
            id: 1,
            icon: <Tag />,
            title: "Web Development",
            description: "I develop websites that are fast, user-friendly, and optimized for search engines.",
        },
        {
            id: 2,
            icon: <Menu />,
            title: "UI/UX Design",
            description: "I develop websites that are fast, user-friendly, and optimized for search engines.",
        },
        {
            id: 3,
            icon: <Menu />,
            title: "Content Creation",
            description: "I develop websites that are fast, user-friendly, and optimized for search engines.",
        },
        {
            id: 4,
            icon: <Menu />,
            title: "Web Development",
            description: "I develop websites that are fast, user-friendly, and optimized for search engines.",
        },
        {
            id: 5,
            icon: <Menu />,
            title: "Web Development",
            description: "I develop websites that are fast, user-friendly, and optimized for search engines.",
        },
        {
            id: 6,
            icon: <Menu />,
            title: "Web Development",
            description: "I develop websites that are fast, user-friendly, and optimized for search engines.",
        },
    ]

    return (
        <section id='services' className='container py-20 mx-auto border-b border-gray-300'>
            <p className=' text-primary'>SERVICES</p>
            <h2 className='text-7xl font-bold text-gray-800 my-8'>What I Do</h2>
            <div className='flex flex-wrap justify-around gap-8 mt-16'>
                {
                    services.map((service) => (
                        <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description} />
                    ))
                }
            </div>
        </section>
    );
};

export default Services;


const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className={`${styles.card} cursor-pointer shrink-0 flex flex-col items-start gap-3 group`}>
            <div className="circle absolute h-[5em] w-[5em] -top-[5.5em] -right-[5.5em] rounded-full bg-[#FF5800] group-hover:scale-[900%] duration-500 z-[-1] op" />
            <Globe size={50} className='text-primary group-hover:text-white mb-6' />
            <p className="font-bold text-2xl group-hover:text-white text-black/80">
                WEBSITE SEO
            </p>
            <p className="text-gray-400 text-sm group-hover:text-white">
                Website ravida surna eveti semen the conse tusio anivite dianne one nivam
                acestion vue artin dictum.
            </p>
            <span className='text-gray-600 group-hover:text-white items-end'><ArrowRight /></span>
        </div>
    );
}