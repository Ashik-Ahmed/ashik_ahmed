import React from 'react';
import styles from './Education.module.css'

const Education = () => {
    const educations = [
        {
            institute: "Daffodil International University",
            degree: "Bachelor of Computer Science and Engineering",
            period: "2015 - 2019",
            description: "Specialized in programming languages, data structures, and algorithms. Led development of 'Chhad Krishi' - an Android app for rooftop agriculture that connects farmers directly with Upazilla Agriculture Officers across Bangladesh and provides live price tracking of daily commodities.",
            result: "3.46/4.00"
        },
        {
            institute: "Cantonment Public School and College, Rangpur",
            degree: "Higher Secondary Certificate (HSC)",
            period: "2010 - 2012",
            description: "Completed HSC with a cumulative GPA of 5.00/5.00. Active participation in school's sports and cultural activities.",
            result: "5.00/5.00"
        },
        {
            institute: "Mirzapur High School",
            degree: "Secondary School Certificate (SSC)",
            period: "2008 - 2010",
            description: "Excelled in core subjects with perfect scores in mathematics and science. Awarded by the Member of Parliament (MP) for outstanding performance in SSC examination. Active involvement in school's extracurricular activities and leadership roles.",
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
            <div className={`${styles.card} w-[330px] md:w-[700px] rounded-lg shadow-md p-4 md:p-6 relative group`}>
                <div className='md:flex justify-between'>
                    <div>
                        <h3 className="text-md md:text-xl font-semibold mb-1">{education?.institute}</h3>
                        <p className="text-sm mb-4">
                            {education?.degree}
                            {/* ({education?.period}) */}
                        </p>
                    </div>
                    {/* Result badge */}
                    <div className="w-fit h-fit bg-white group-hover:bg-primary transition-all duration-500 text-primary group-hover:text-white shadow-lg rounded-md px-4 py-2 text-sm font-medium">
                        {education?.result}
                    </div>
                </div>
                <div className='w-full h-0.5 my-6 bg-gray-300' />
                <p>{education?.description}</p>
            </div>
        </div >
    )
}