import Image from 'next/image';
import React from 'react';

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: "Project 1",
            image: "/ashik_ahmed.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
        },
        {
            id: 2,
            name: "Project 2",
            image: "/ashik_ahmed.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
        },
        {
            id: 3,
            name: "Project 3",
            image: "/ashik_ahmed.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
        },
    ]

    return (
        <section id='portfolio' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'>VISIT MY PORTFOLIO FOR RECENT WORKS</p>
                <h2 className='text-7xl font-bold text-gray-800 my-4'>My Portfolio</h2>
            </div>
            <div className='flex flex-wrap justify-around gap-8 mt-16'>
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Portfolio;


const ProjectCard = ({ id, name, image, description }) => {
    return (
        <div className="relative flex w-80 h-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group">
            <Image src={image} alt={name} width={288} height={160} className="relative mx-4 mt-4 group-hover:-mt-6 h-40 overflow-hidden rounded-xl bg-primary transition-all duration-500" />
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button className="opacity-0 group-hover:opacity-100 bg-primary text-white font-bold py-2 px-4 rounded transition-all duration-500">
                    Read More
                </button>
            </div>
        </div >
    );
}

