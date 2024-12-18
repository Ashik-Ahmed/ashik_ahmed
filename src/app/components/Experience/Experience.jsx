import React from 'react';
import styles from './Experience.module.css'

const Experience = () => {
    const experiences = [
        {
            title: "Infozillion Teletech BD Ltd.",
            organization: "Tech Support Engineer",
            period: "2019 - Present",
            description: "Managing and maintaining MNP (Mobile Number Portability) platform for Bangladesh's telecom sector. Providing technical support, and collaborating with telecom operators to resolve critical issues. From personal interest, I developed a HR Management Software for the company which automates the HR processes.",
            duration: `${Math.floor((new Date() - new Date(2019, 5)) / (1000 * 60 * 60 * 24 * 365))}+ Years`
        },
        {
            title: "Freelance Software Developer",
            organization: "",
            period: "2022 - Present",
            description: "Developing custom web applications using React.js, Next.js, Node.js, MongoDB and PostgreSQL. Delivered multiple successful projects including web-based reporting platforms and corporate websites. Maintaining strong client relationships with 90% repeat business rate.",
            duration: `${Math.floor((new Date() - new Date(2022, 5)) / (1000 * 60 * 60 * 24 * 365))}+ Years`
        },
    ];

    return (
        <section id='experience' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'> {Math.floor((new Date() - new Date(2019, 5)) / (1000 * 60 * 60 * 24 * 365))}+ YEARS OF EXPERIENCE</p>
                <h2 className='text-4xl md:text-7xl font-bold text-gray-800 my-4'>Experiences</h2>
            </div>
            <div className="max-w-4xl mx-auto p-4">
                <div className="relative">
                    {/* Main timeline */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />

                    {/* Experience items */}
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience

const ExperienceCard = ({ experience }) => {
    return (
        <div className="relative pl-8 group">
            {/* Timeline circle */}
            <div className="absolute left-0 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-gray-200 group-hover:bg-primary transition-all duration-500" />

            {/* Connection line */}
            <div className="absolute left-3 top-9 w-5 h-1 bg-gray-400" />

            {/* Experience card */}
            <div className={`${styles.card} w-[330px] md:w-[700px] rounded-lg shadow-md p-4 md:p-6 relative group`}>


                <div className='md:flex justify-between'>
                    <div>
                        <h3 className="text-md md:text-xl font-semibold mb-1">{experience?.title}</h3>
                        <p className="text-sm mb-4">
                            {experience?.organization} ({experience?.period})
                        </p>
                    </div>
                    {/* Duration badge */}
                    <div className="w-fit h-fit bg-white group-hover:bg-primary transition-all duration-500 text-primary group-hover:text-white shadow-lg rounded-md px-4 py-2 text-sm font-medium">
                        {experience?.duration}
                    </div>
                </div>
                <div className='w-full h-0.5 my-6 bg-gray-300' />
                <p>{experience?.description}</p>
            </div>
        </div >
    )
}