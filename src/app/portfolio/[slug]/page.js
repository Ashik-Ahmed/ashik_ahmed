import Image from "next/image";
import { CircleCheck, Code, ExternalLink, Settings, UserRoundCog, Youtube } from "lucide-react";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";

const ProjectDetails = () => {
    const project = {
        title: "HR Management System",
        description: "Revolutionizing HR operations through intelligent automation and real-time analytics.",
        tags: ["React", "Node.js", "MongoDB", "AWS", "JWT"],
        features: [
            { title: "Dashboard Analytics", icon: <Settings />, content: "Interactive data visualization for HR metrics" },
            { title: "Employee Portal", icon: <UserRoundCog />, content: "Self-service portal for leave & payroll management" },
            { title: "API Integration", icon: <Code />, content: "RESTful APIs with JWT authentication" },
            { title: "Cloud Hosting", icon: <CircleCheck />, content: "AWS EC2 deployment with auto-scaling" }
        ],
        stats: [
            { value: "85%", label: "Process Automation" },
            { value: "1.2k", label: "Daily Active Users" },
            { value: "99.9%", label: "Uptime Reliability" },
            { value: "4.8/5", label: "User Rating" }
        ],
        techStack: [
            { name: "Next.js", logo: "/tech/nextjs.svg" },
            { name: "Node.js", logo: "/tech/nodejs.svg" },
            { name: "MongoDB", logo: "/tech/mongodb.svg" },
            { name: "AWS", logo: "/tech/aws.svg" },
            { name: "Tailwind", logo: "/tech/tailwind.svg" },
            { name: "NextAuth", logo: "/tech/nextauth.svg" }
        ],
        images: ["/projects/project-1.png", "/projects/project-1.png", "/projects/project-1.png", "/projects/project-1.png", "/projects/project-1.png"],
        livePreview: "#",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center animate-fadeInUp">
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            {project.description}
                        </p>
                        <div className="flex justify-center gap-4 mb-12">
                            <a
                                href={project.livePreview}
                                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                            >
                                <ExternalLink className="text-xl" />
                                Live Preview
                            </a>
                            <a
                                href={project.video}
                                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                            >
                                <Youtube className="text-xl" />
                                Watch Demo
                            </a>
                        </div>
                    </div>

                    {/* Tech Stack Marquee */}
                    <div className="py-8 bg-white/50 backdrop-blur-md rounded-xl shadow-lg border border-gray-100">
                        <div className="flex justify-center gap-12 items-center flex-wrap">
                            {project.techStack.map((tech, index) => (
                                <div key={index} className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={40}
                                        height={40}
                                        className="h-8 w-auto"
                                    />
                                    <span className="text-gray-600 font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Demo Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            System Walkthrough
                        </span>
                    </h2>
                    <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                        <iframe
                            src={project.video}
                            className="absolute inset-0 w-full h-full"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:scale-105"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-indigo-50 rounded-xl text-indigo-600">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-indigo-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {project.stats.map((stat, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600 uppercase text-sm tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            {/* <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            User Interface Showcase
                        </span>
                    </h2>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {project.images.map((image, index) => (
                            <div key={index} className="relative group break-inside-avoid">
                                <Image
                                    src={image}
                                    alt={`Interface ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg transition-transform group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            User Interface Showcase
                        </span>
                    </h2>
                    <ImageCarousel images={project.images} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to See More?</h2>
                    <p className="text-gray-300 mb-8 text-xl">Explore the full potential of this HR solution</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href={project.livePreview}
                            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg transition-all"
                        >
                            <ExternalLink className="text-xl" />
                            Launch Live Demo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;