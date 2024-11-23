import { ArrowRight, Globe, Menu, Tag } from 'lucide-react';
import React from 'react';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <Tag />,
            title: "Custom Software Solution",
            description: "I create tailored software solutions designed to meet your unique business needs.",
        },
        {
            id: 2,
            icon: <Menu />,
            title: "Corporate Website",
            description: "Building fast, user-friendly, and professional websites for corporations.",
        },
        {
            id: 3,
            icon: <Menu />,
            title: "Portfolio Website",
            description: "Creating sleek and responsive portfolio websites to showcase your work effectively.",
        },
        {
            id: 4,
            icon: <Menu />,
            title: "Application Deployment",
            description: "Efficiently deploying and optimizing applications for seamless performance.",
        },
        {
            id: 5,
            icon: <Menu />,
            title: "Website SEO",
            description: "Improving your website's visibility and search engine rankings.",
        },
        {
            id: 6,
            icon: <Menu />,
            title: "Web Development",
            description: "Developing robust, scalable, and responsive web applications.",
        },
    ];

    return (
        <section id="services" className="container py-20 mx-auto px-4 border-b border-gray-300">
            <p className="text-primary text-center">SERVICES</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 text-center my-4">What I Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className={`${styles.card} group flex flex-col items-start relative`}>
            {/* Background Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[5.5em] -right-[5.5em] rounded-full bg-[#FF5800] group-hover:scale-[900%] duration-500 z-[-1] op" />

            {/* Icon */}
            <Globe className="text-primary group-hover:text-white mb-6" size={50} />

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-black/80 group-hover:text-white transition-all duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className=" text-gray-500 text-sm group-hover:text-white transition-all duration-300">
                {description}
            </p>

            {/* Arrow */}
            <span className=" text-gray-600 group-hover:text-white self-end transition-all duration-300">
                <ArrowRight />
            </span>
        </div>
    );
};
