import { Tag } from 'lucide-react';
import React from 'react';
import styles from './Expertise.module.css'
import Image from 'next/image';

const Expertise = () => {

    const frontendSkills = [
        {
            id: 1,
            icon: "/skillIcons/frontend/JavaScript.svg",
            name: "JavaScript",
        },
        {
            id: 2,
            icon: "/skillIcons/frontend/Next.js.svg",
            name: "Next.js",
        },
        {
            id: 3,
            icon: "/skillIcons/frontend/React.svg",
            name: "React.js",
        },
    ]

    const designSkills = [
        {
            id: 1,
            icon: "/skillIcons/design/HTML5.svg",
            name: "HTML5",
        },
        {
            id: 2,
            icon: "/skillIcons/design/CSS3.svg",
            name: "CSS3",
        },
        {
            id: 3,
            icon: "/skillIcons/design/Tailwind.svg",
            name: "Tailwind",
        },
        {
            id: 4,
            icon: "/skillIcons/design/Bootstrap.svg",
            name: "Bootstrap",
        },
        {
            id: 5,
            icon: "/skillIcons/design/Primereact.svg",
            name: "PRIMEREACT",
        },
        {
            id: 6,
            icon: "/skillIcons/design/MaterialUI.svg",
            name: "Material UI",
        }
    ]


    const backendSkills = [
        {
            id: 1,
            icon: "/skillIcons/backend/Node.js.svg",
            name: "Node.js",
        },
        {
            id: 2,
            icon: "/skillIcons/backend/Express.svg",
            name: "Express.js",
        },
        {
            id: 3,
            icon: "/skillIcons/backend/restApi.svg",
            name: "REST API",
        }
    ]

    const databaseSkills = [
        {
            id: 1,
            icon: "/skillIcons/database/MongoDB.svg",
            name: "MongoDB",
        },
        {
            id: 2,
            icon: "/skillIcons/database/Mongoose.svg",
            name: "Mongoose",
        },
        {
            id: 3,
            icon: "/skillIcons/database/PostgresSQL.svg",
            name: "PostgreSQL",
        }
    ]

    const otherSkills = [
        {
            id: 1,
            icon: "/skillIcons/others/Git.svg",
            name: "Git",
        },
        {
            id: 2,
            icon: "/skillIcons/others/NGINX.svg",
            name: "Nginx",
        },
        {
            id: 3,
            icon: "/skillIcons/others/Postman.svg",
            name: "Postman",
        }
    ]

    return (
        <section id='expertise' className='container py-20 mx-auto border-b border-gray-300'>
            <p className=' text-primary'>EXPERTISE</p>
            <h2 className='text-7xl font-bold text-gray-800 my-8'>Skills I Have</h2>
            <div>
                <div className='mt-8'>
                    <p className='text-xl text-primary font-semibold'>Frontend:</p>
                    <div className='grid grid-cols-3 md:flex gap-4 mt-4'>

                        {
                            frontendSkills.map(skill => (
                                <SkillsCard key={skill.id} icon={skill.icon} name={skill.name} />
                            ))
                        }
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-xl text-primary font-semibold'>Design:</p>
                    <div className='grid grid-cols-3 md:flex gap-4 mt-4'>

                        {
                            designSkills.map(skill => (
                                <SkillsCard key={skill.id} icon={skill.icon} name={skill.name} />
                            ))
                        }
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-xl text-primary font-semibold'>Backend:</p>
                    <div className='grid grid-cols-3 md:flex gap-4 mt-4'>

                        {
                            backendSkills.map(skill => (
                                <SkillsCard key={skill.id} icon={skill.icon} name={skill.name} />
                            ))
                        }
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-xl text-primary font-semibold'>Database:</p>
                    <div className='grid grid-cols-3 md:flex gap-4 mt-4'>

                        {
                            databaseSkills.map(skill => (
                                <SkillsCard key={skill.id} icon={skill.icon} name={skill.name} />
                            ))
                        }
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='text-xl text-primary font-semibold'>Others:</p>
                    <div className='grid grid-cols-3 md:flex gap-4 mt-4'>

                        {
                            otherSkills.map(skill => (
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

            <img src={icon} alt="ashik ahmed" className='mx-auto' />

            <p className='text-xs font-semibold text-gray-800'>{name}</p>
        </div>
    );
}