import React from 'react';
import Image from 'next/image';
import styles from './Blogs.module.css';
import { ArrowUpRight, Clock4 } from 'lucide-react';

const Blogs = () => {

    const blogs = [
        {
            id: 1,
            title: 'Blog 1',
            image: '/blogs/How_to_access_env_variables_after_Nextjs_13.png',
            tags: ['Full-Stack', 'Dashboard'],
            duration: "2 min read",
            post: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. Nunc felis ligula. Nunc felis ligula. Nunc felis ligula."
        },
        {
            id: 2,
            title: 'Blog 2',
            image: '/blogs/How_to_access_env_variables_after_Nextjs_13.png',
            tags: ['Full-Stack', 'Dashboard'],
            duration: "2 min read",
            post: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. Nunc felis ligula. Nunc felis ligula. Nunc felis ligula."
        },
        {
            id: 3,
            title: 'Blog 3',
            image: '/blogs/How_to_access_env_variables_after_Nextjs_13.png',
            tags: ['Full-Stack', 'Dashboard'],
            duration: "2 min read",
            post: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. Nunc felis ligula. Nunc felis ligula. Nunc felis ligula."
        },
    ]

    return (
        <section id='blogs' className='container py-20 mx-auto border-b border-gray-300'>
            <div className='text-center'>
                <p className=' text-primary'>READ MY RECENT BLOGS</p>
                <h2 className='text-4xl md:text-7xl font-bold text-gray-800 my-4'>My Blogs</h2>
            </div>
            <div>
                <button>Show All</button>
            </div>
            <div className='flex flex-wrap justify-around gap-8 mt-8'>
                {
                    blogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))
                }
            </div>
        </section>
    );
};

export default Blogs;


const BlogCard = ({ blog }) => {
    return (
        <div className={`${styles.card} relative flex flex-col justify-between gap-4 w-80 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group`}>
            <div className="w-full p-4 min-h-[14rem] bg-white rounded-xl overflow-hidden">
                <Image
                    src={blog?.image}
                    alt={blog?.title}
                    width={288}
                    height={288}
                    className="object-contain mx-auto h-full w-full rounded-xl group-hover:scale-125 transition-all duration-500"
                />
            </div>
            <div className="mt-6 flex-1">
                <div className="flex items-center gap-2 text-sm">
                    <Clock4 size={16} />
                    {blog?.duration}
                </div>
                <div className="mt-4">
                    <h5 className="relative mb-2 cursor-pointer text-xl font-semibold leading-snug tracking-normal text-gray-900 hover:text-primary antialiased line-clamp-2">
                        {blog?.title}
                        <ArrowUpRight className="inline opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h5>
                </div>
            </div>
        </div>
    )
}