import React from 'react';

const ProjectDetails = async ({ params }) => {
    const { slug } = await params
    console.log(slug);

    return (
        <div>
            <h1 className='text-3xl text-primary'>Project Details</h1>
            <p>{slug}</p>
        </div>
    );
};

export default ProjectDetails;