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
        livePreview: "https://example.com/hr-management-system", // Example link
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube video link
    };

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            {/* Project Title */}
            <header className="text-center my-8">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    {project.title}
                </h1>
                <p className="mt-4 text-lg text-gray-600">{project.description}</p>
                {/* Live Preview Button */}
                <div className="mt-6">
                    <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                        Live Preview
                    </a>
                </div>
            </header>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 justify-center my-6">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-sm font-semibold bg-primary text-white px-3 py-1 rounded-full shadow-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Special Features */}
            <section className="my-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                    Key Features
                </h2>
                <ul className="list-disc list-inside space-y-4 pl-4">
                    {project.features.map((feature, index) => (
                        <li key={index} className="text-gray-700">
                            {feature}
                        </li>
                    ))}
                </ul>
            </section>


            {/* Gallery */}
            <section className="my-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                    Project Screenshots
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {project.images.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            <Image
                                src={image}
                                alt={`Project Screenshot ${index + 1}`}
                                width={400}
                                height={300}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Video */}
            <section className="my-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                    Project Demo Video
                </h2>
                <div className="w-full">
                    <iframe
                        src={project.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-[500px] rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
