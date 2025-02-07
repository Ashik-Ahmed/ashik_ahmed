import {
    Code2,
    Building2,
    Briefcase,
    RocketIcon,
    SearchCode,
    Globe,
    ArrowRight
} from 'lucide-react';
import React from 'react';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: Globe,
            title: "Web Development",
            description: "Create responsive, feature-rich websites that work flawlessly on every device and screen size.",
        },
        {
            id: 2,
            icon: Code2,
            title: "Custom Software",
            description: "Transform your business with scalable, custom-built solutions that streamline operations and boost efficiency.",
        },
        {
            id: 3,
            icon: Briefcase,
            title: "API & Database Integration",
            description: "Design/ Integrate APIs and databases for smooth functionality and data access for existing applications.",
        },
        {
            id: 4,
            icon: RocketIcon,
            title: "Application Deployment",
            description: "Deploy your applications with confidence, ensuring optimal performance across all platforms.",
        },
        {
            id: 5,
            icon: Building2,
            title: "Corporate/Portfolio Website",
            description: "Build a powerful online presence with a lightning-fast, secure website that reflects your brand's professionalism.",
        },
        {
            id: 6,
            icon: SearchCode,
            title: "Website SEO",
            description: "Climb search rankings and drive organic traffic with proven SEO strategies that deliver real results.",
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

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className={`${styles.card} group flex flex-col items-start relative`}>
            {/* Background Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[5.5em] -right-[5.5em] rounded-full bg-[#6963ec] group-hover:scale-[900%] duration-500 z-[-1] op" />

            {/* Icon */}
            <Icon className="text-primary group-hover:text-white mb-8" size={50} />
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-black/80 group-hover:text-white transition-all duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className=" mt-4 text-gray-500 group-hover:text-white transition-all duration-300">
                {description}
            </p>

            {/* Arrow */}
            <span className="mt-auto text-primary group-hover:text-white self-end transition-all duration-300">
                <ArrowRight size={30} />
            </span>
        </div>
    );
};