const Experience = () => {
    const experiences = [
        {
            title: "Personal Portfolio April Fools",
            organization: "University of DVI",
            period: "1997 - 2001",
            description: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rating: 4.3
        },
        {
            title: "Examples Of Personal Portfolio",
            organization: "College of Studies",
            period: "2000 - 2002",
            description: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
            rating: 4.5
        },
    ];

    return (
        <section id='experience' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'>{`${new Date().getFullYear()}`}</p>
                <h2 className='text-4xl md:text-7xl font-bold text-gray-800 my-4'>My Portfolio</h2>
            </div>
            <div className="max-w-4xl mx-auto p-4 bg-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Company Experience</h2>
                <div className="relative">
                    {/* Main timeline */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300" />

                    {/* Experience items */}
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <div key={index} className="relative pl-8">
                                {/* Timeline circle */}
                                <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-gray-300" />

                                {/* Connection line */}
                                <div className="absolute left-2 top-8 w-6 h-0.5 bg-gray-300" />

                                {/* Experience card */}
                                <div className="bg-white rounded-lg shadow-md p-6 relative">
                                    {/* Rating badge */}
                                    <div className="absolute top-4 right-4 bg-pink-100 text-pink-600 rounded-md px-2 py-1 text-sm font-medium">
                                        {experience.rating.toFixed(2)}/5
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{experience.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {experience.organization} ({experience.period})
                                    </p>
                                    <p className="text-gray-700">{experience.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience