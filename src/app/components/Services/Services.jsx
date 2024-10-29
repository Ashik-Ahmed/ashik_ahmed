import { Menu, Tag } from 'lucide-react';
import React from 'react';

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

        </section>
    );
};

export default Services;


const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className='w-1/3 p-4'>
        </div>
    )
}