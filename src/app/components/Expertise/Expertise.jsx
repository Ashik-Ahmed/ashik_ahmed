import { Tag } from 'lucide-react';
import React from 'react';
import styles from './Expertise.module.css'
import Image from 'next/image';

const Expertise = () => {

    const frontendSkills = [
        {
            id: 1,
            icon: <Tag />,
            name: "JavaScript",
        },
        {
            id: 2,
            icon: <Tag />,
            name: "Next.js",
        },
        {
            id: 3,
            icon: <Tag />,
            name: "React.js",
        },
    ]

    const designSkills = [
        {
            id: 1,
            icon: <Tag />,
            name: "HTML5",
        },
        {
            id: 2,
            icon: <Tag />,
            name: "CSS3",
        },
        {
            id: 3,
            icon: <Tag />,
            name: "Tailwind",
        },
        {
            id: 4,
            icon: <Tag />,
            name: "Bootstrap",
        },
        {
            id: 5,
            icon: <Tag />,
            name: "PRIMEREACT",
        },
        {
            id: 6,
            icon: <Tag />,
            name: "Material UI",
        }
    ]


    const backendSkills = [
        {
            id: 1,
            icon: <Tag />,
            name: "Node.js",
        },
        {
            id: 2,
            icon: <Tag />,
            name: "Express.js",
        },
        {
            id: 3,
            icon: <Tag />,
            name: "REST API",
        }
    ]

    const databaseSkills = [
        {
            id: 1,
            icon: <Tag />,
            name: "MongoDB",
        },
        {
            id: 2,
            icon: <Tag />,
            name: "Mongoose",
        },
        {
            id: 3,
            icon: <Tag />,
            name: "PostgreSQL",
        }
    ]

    const otherSkills = [
        {
            id: 1,
            icon: <Tag />,
            name: "Git",
        },
        {
            id: 2,
            icon: <Tag />,
            name: "Nginx",
        },
        {
            id: 3,
            icon: <Tag />,
            name: "Postman",
        }
    ]

    return (
        <section id='expertise' className='container py-20 mx-auto border-b border-gray-300'>
            <p className=' text-primary'>EXPERTISE</p>
            <h2 className='text-7xl font-bold text-gray-800 my-8'>Skills I Have</h2>
            <div className='md:flex gap-16 items-start'>
                <div>
                    <p className='text-xl text-primary font-semibold'>Frontend:</p>
                    <div className='flex flex-wrap justify-around gap-8 mt-4'>

                        {
                            frontendSkills.map(skill => (
                                <SkillsCard key={skill.id} icon={skill.icon} name={skill.name} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className='text-xl text-primary font-semibold'>Design:</p>
                    <div className='grid grid-cols-3 gap-8 mt-4'>

                        {
                            designSkills.map(skill => (
                                <SkillsCard key={skill.id} icon={skill.icon} name={skill.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;


const SkillsCard = ({ icon, name }) => {
    return (
        <div className={`${styles.card} w-[110px] cursor-pointer shrink-0 flex flex-col items-start gap-3 group`}>

            <img src="/ashik_ahmed.png" alt="ashik ahmed" className='mx-auto' />

            <p className='text-xs font-semibold text-gray-800'>{name}</p>
        </div>
    );
}