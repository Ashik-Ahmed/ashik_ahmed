import React from 'react';
import styles from './Education.module.css'

const Education = () => {
    const educations = [
        {
            institute: "Daffodil International University",
            degree: "Bachelor of Computer Science and Engineering",
            period: "2015 - 2019",
            description: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            result: "3.46/4.00"
        },
        {
            institute: "Cantonment Public School and College, Rangpur",
            degree: "Higher Secondary Certificate (HSC)",
            period: "2010 - 2012",
            description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            result: `5.00/5.00`
        },
        {
            institute: "Mirzapur High School",
            degree: "Secondary School Certificate (SSC)",
            period: "2008 - 2010",
            description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            result: "5.00/5.00"
        },
    ];

    return (
        <section id='education' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'>MY EDUCATIONAL QUALIFICATIONS</p>
                <h2 className='text-4xl md:text-7xl font-bold text-gray-800 my-4'>Education</h2>
            </div>
            <div className="max-w-4xl mx-auto p-4">
                <div className="relative">
                    {/* Main timeline */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />

                    {/* Education items */}
                    <div className="space-y-12">
                        {educations.map((education, index) => (
                            <EducationCard key={index} education={education} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education

const EducationCard = ({ education }) => {
    return (
        <div className="relative pl-8 group">
            {/* Timeline circle */}
            <div className="absolute left-0 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-gray-200 group-hover:bg-primary transition-all duration-500" />

            {/* Connection line */}
            <div className="absolute left-3 top-9 w-5 h-1 bg-gray-400" />

            {/* Experience card */}
            <div className={`${styles.card} rounded-lg shadow-md p-6 relative group`}>
                <div className='flex justify-between'>
                    <h3 className="text-xl font-semibold mb-1">{education?.institute}</h3>
                    {/* Result badge */}
                    <div className="bg-white h-full group-hover:bg-pink-500 transition-all duration-500 text-primary group-hover:text-white shadow-lg rounded-md px-4 py-2 text-sm font-medium">
                        {education?.result}
                    </div>
                </div>
                <p className="text-sm mb-4">
                    {education?.organization} ({education?.period})
                </p>
                <div className='w-full h-0.5 my-6 bg-gray-300' />
                <p>{education?.description}</p>
            </div>
        </div >
    )
}