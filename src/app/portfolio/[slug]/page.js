import Image from "next/image";
import { CircleCheck, Code, ExternalLink, MonitorPlay, Phone, Settings, UserRoundCog, Youtube } from "lucide-react";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";
import Link from "next/link";

const ProjectDetails = () => {
    const project = {
        title: "HR Management System",
        description: "Revolutionizing HR operations through intelligent automation and real-time analytics.",
        tags: ["React", "Node.js", "MongoDB", "AWS", "JWT"],
        features: [
            { title: "Role Management", icon: <UserRoundCog />, content: "Granular access controls with custom permission sets" },
            { title: "Mobile Responsive", icon: <Phone />, content: "Fully optimized cross-device experience" },
            { title: "CI/CD Pipeline", icon: <CircleCheck />, content: "Automated deployments with GitHub Actions" },
            { title: "Documentation", icon: <Code />, content: "Comprehensive developer & user guides" },
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
            <section className="relative pt-20 pb-12 md:pt-28 md:pb-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center space-y-6">
                        <div className="inline-block bg-gradient-to-r from-primary to-secondary p-1 rounded-full mb-8 animate-fadeIn">
                            <span className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-gray-900/90">
                                Enterprise Solution
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
                            <Link
                                href={project.livePreview}
                                className="flex items-center gap-2 bg-primary hover:bg-indigo-700 text-white px-8 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-lg hover:shadow-primary/30"
                            >
                                <ExternalLink size={20} />
                                Live Preview
                            </Link>
                            <a
                                href="#video-demo"
                                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-lg hover:shadow-gray-900/30"
                            >
                                <MonitorPlay size={20} />
                                Watch Demo
                            </a>
                        </div>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200">
                        <h3 className="text-center text-gray-500 text-sm font-semibold mb-6">TECHNOLOGY STACK</h3>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            {project.techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors"
                                >
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-contain transition-all"
                                    />
                                    <span className="mt-2 text-sm text-gray-600 font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Demo Section */}
            <section id="video-demo" className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-6 bg-gray-800 flex items-center gap-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-sm text-gray-300 font-mono">demo.mp4</span>
                        </div>
                        <div className="aspect-video bg-black">
                            <iframe
                                src={project.video}
                                className="w-full h-full"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3">
                            Core Features
                        </h2>
                        <p className="text-gray-600 max-w-lg mx-auto text-sm">Key functionalities that drive efficiency</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary p-2">
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-1.5">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {project.stats.map((stat, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-5xl font-bold text-primary mb-3 animate-number">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            {/* <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
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
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            User Interface Showcase
                        </span>
                    </h2>
                    <ImageCarousel images={project.images} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Want to get this product?</h2>
                    <p className="text-gray-300 mb-8 text-xl">Explore the full potential of this Software</p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/#contact"
                            className="flex items-center gap-2 bg-primary hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg transition-all"
                        >
                            <Phone className="text-xl" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;