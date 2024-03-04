import React from 'react'

import { jobs } from '../data'

const JobCard = ({ job }) => {

    const { company, logo, isNew, isFeatured, position, level, postedAt, contract, location, languages, tools } = job;

    return (
        <div className='flex justify-center items-center mr-20'>
            <div className='bg-white shadow-md rounded-lg p-6 mb-10 ml-2 flex w-full'>

                {/* First column */}
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="logo" className='w-20 h-20 rounded-full' />
                </div>

                {/* Second column */}
                <div className='flex flex-col justify-between ml-4'>
                    <div className='mb-4'>
                        <p className='text-primary text-sm font-sans font-bold'>{company}</p>
                        <div className='flex items-center mt-1'>
                            {isNew && <span className='mr-2 bg-primary text-xs font-sans text-white font-semibold px-2 py-1 rounded-full'>NEW!</span>}
                            {isFeatured && <span className='bg-very-dark-grayish-cyan text-xs font-sans text-white font-semibold px-2 py-1 rounded-full'>FEATURED</span>}
                        </div>
                    </div>
                    <h2 className='text-lg font-bold font-sans mb-2'>{position}</h2>
                    <div className='flex items-center'>
                        <p className='mr-4 text-dark-grayish-cyan font-sans text-sm'>{postedAt}</p>
                        <p className='mr-4 text-dark-grayish-cyan font-sans text-sm'>{contract}</p>
                        <p className='text-dark-grayish-cyan font-sans text-sm'>{location}</p>
                    </div>
                </div>

                {/* Third column */}
                <div className='justify-center ml-8 items-center flex'>
                    {languages && languages.map(language => (
                        <span key={language} className='mr-2 mb-2 text-sm bg-tertiary text-primary font-sans font-bold px-2 py-1 rounded-full'>{language}</span>
                    ))}
                    {tools && tools.map(tool => (
                        <span key={tool} className='mr-2 mb-2 text-sm bg-tertiary text-primary font-sans font-bold px-2 py-1 rounded-full'>{tool}</span>
                    ))}
                    {level && (
                        <span className=' mr-2 mb-2 text-sm bg-tertiary text-primary font-sans font-bold px-2 py-1 rounded-full'>{level}</span>
                    )}
                </div>
            </div>
        </div>

    )
}

const List = () => {

    return (
        <div className='justify-center items-center'>
            <div>
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    )
}

export default List