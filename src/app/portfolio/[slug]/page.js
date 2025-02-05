import Image from "next/image";

const ProjectDetails = () => {
    const project = {
        title: "HR Management System",
        description:
            "A comprehensive HR Management System that streamlines HR processes, including recruitment, payroll, performance reviews, and employee management.",
        tags: ["Full-Stack", "Dashboard", "HR", "Web App"],
        features: [
            "User-friendly dashboard for HR operations",
            "Integrated payroll and leave management",
            "Real-time performance tracking",
            "Customizable reports and analytics",
        ],
        images: [
            "/projects/project-1.png",
            "/projects/project-1.png",
            "/projects/project-1.png",
            "/projects/project-1.png",
            "/projects/project-1.png",
        ],
        livePreview: "https://example.com/hr-management-system",
        video: "https://www.youtube.com/embed/3QfTZLm2F6A?si=eyW0_g4rN8t-ywWc",
    };

    return (
        <div className="container mx-auto px-4 max-w-7xl">
            {/* Project Header */}
            <header className="text-center my-12 space-y-6">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 bg-clip-text">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-sm font-semibold bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                    Live Preview →
                </a>
            </header>

            {/* Video Section */}
            <section className="my-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        Project Demo
                    </h2>
                    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
                        <iframe
                            src={project.video}
                            title="Project Demo Video"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="my-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {feature}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Image Gallery */}
            <section className="my-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                    Visual Showcase
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
                        >
                            <Image
                                src={image}
                                alt={`Screenshot ${index + 1}`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;