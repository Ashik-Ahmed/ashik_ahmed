import Image from 'next/image';
import React from 'react';
import styles from './Portfolio.module.css'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: "Project 1",
            image: "/projects/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
        },
        {
            id: 2,
            name: "Project 2",
            image: "/projects/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
        },
        {
            id: 3,
            name: "Project 3",
            image: "/projects/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
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
        <div className={`${styles.card} relative flex flex-col justify-between gap-4 w-80 h-[350px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group`}>
            <div className='w-full p-4 min-h-56 overflow-hidden bg-white rounded-xl'>
                <Image src={image} alt={name} width={288} height={288} className="relative object-contain mx-auto h-52 overflow-hidden rounded-xl group-hover:scale-125 transition-all duration-500" />
            </div>
            <div className='mt-6'>
                <div className='flex flex-wrap gap-2'>
                    <span className='bg-green-500 text-xs text-white font-semibold px-2 py-0.5 rounded-xl'>Full-stack</span>
                    <span className='bg-blue-500 text-xs text-white font-semibold px-2 py-0.5 rounded-xl'>Dasboard</span>
                </div>
                <div className="mt-4">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h5>
                    {/* <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p> */}
                </div>
                {/* <div className="">
                    <button className="opacity-0 group-hover:opacity-100 bg-primary text-white font-bold py-2 px-4 rounded transition-all duration-500">
                        Read More
                    </button>
                </div> */}
            </div>
        </div >
    );
}

