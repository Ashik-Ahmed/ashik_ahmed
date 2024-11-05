import Image from 'next/image';
import React from 'react';
import styles from './Portfolio.module.css'
import { ArrowUpRight } from 'lucide-react';

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: "HR Management System",
            image: "/projects/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
            tags: ["Full-Stack", "Dashboard"],
        },
        {
            id: 2,
            name: "A2P SMS Monitoring Portal",
            image: "/projects/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
            tags: ["Full-Stack", "Dashboard"],
        },
        {
            id: 3,
            name: "Aircraft Inventory Management System",
            image: "/projects/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
            tags: ["Full-Stack", "Dashboard"],
        },
        {
            id: 4,
            name: "Aircraft Inventory Management System",
            image: "/projects/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
            tags: ["Full-Stack", "Dashboard"],
        },
    ]

    return (
        <section id='portfolio' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'>VISIT MY PORTFOLIO FOR RECENT WORKS</p>
                <h2 className='text-4xl md:text-7xl font-bold text-gray-800 my-4'>My Portfolio</h2>
            </div>
            <div className='flex flex-wrap justify-around gap-8 mt-8'>
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Portfolio;


const ProjectCard = ({ id, name, image, description, tags }) => {

    // Generate a random hex color and adjust it for better contrast
    const getRandomColorPair = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

        // Convert hex color to RGB components
        const r = parseInt(randomColor.slice(0, 2), 16);
        const g = parseInt(randomColor.slice(2, 4), 16);
        const b = parseInt(randomColor.slice(4, 6), 16);

        // Lighten color for background and darken for text
        const lighten = (c) => Math.min(255, Math.floor(c + (255 - c) * 0.7)).toString(16).padStart(2, '0');
        const darken = (c) => Math.max(0, Math.floor(c * 0.7)).toString(16).padStart(2, '0');

        const bgColor = `#${lighten(r)}${lighten(g)}${lighten(b)}`;
        const textColor = `#${darken(r)}${darken(g)}${darken(b)}`;

        return { bgColor, textColor };
    };

    const { bgColor, textColor } = getRandomColorPair();

    return (
        <div className={`${styles.card} relative flex flex-col justify-between gap-4 w-80 h-[370px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group`}>
            <div className="w-full p-4 h-[14rem] bg-white rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={288}
                    height={288}
                    className="object-contain mx-auto h-full w-full rounded-xl group-hover:scale-125 transition-all duration-500"
                />
            </div>
            <div className="mt-6 flex-1">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{ backgroundColor: bgColor, color: textColor }}
                            className="text-xs font-semibold px-2 py-0.5 rounded-xl shadow-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4">
                    <h5 className="relative mb-2 cursor-pointer text-xl font-semibold leading-snug tracking-normal text-gray-900 hover:text-primary antialiased line-clamp-2">
                        {name}
                        <ArrowUpRight className="inline opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h5>
                </div>
            </div>
        </div>
    );
}

