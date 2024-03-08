import React, { useState } from 'react'

import { jobs } from '../data'

const FilterBar = ({ selectedCategory, clearFilters }) => {

    return (
        <div className="bg-white p-4 flex justify-between items-center mb-4 rounded-md mr-16">
            <div>
                {selectedCategory && (
                    <span className="inline-block bg-primary font-sans font-bold text-white px-2 py-1 rounded-md mr-2">{selectedCategory}</span>
                )}
            </div>
            <button className="bg-primary text-white font-sans font-bold px-4 py-2 rounded-md" onClick={clearFilters}>X</button>
        </div>
    )
}

const JobCard = ({ job, handleCategoryClick }) => {

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
                        <button key={language} onClick={() => handleCategoryClick(language)} className='mr-2 mb-2 text-sm bg-tertiary hover:bg-cyan-900 text-primary font-sans font-bold px-2 py-1 rounded-full'>{language}</button>
                    ))}
                    {tools && tools.map(tool => (
                        <button key={tool} onClick={() => handleCategoryClick(tool)} className='mr-2 mb-2 text-sm bg-tertiary hover:bg-cyan-900 text-primary font-sans font-bold px-2 py-1 rounded-full'>{tool}</button>
                    ))}
                    {level && (
                        <button onClick={() => handleCategoryClick(level)} className=' mr-2 mb-2 text-sm bg-tertiary hover:bg-cyan-900 text-primary font-sans font-bold px-2 py-1 rounded-full'>{level}</button>
                    )}
                </div>
            </div>
        </div>

    )
}

const List = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            // If the same category is clicked again, reset the filter
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    // Filter jobs based on the selected category
    const filteredJobs = selectedCategory ? jobs.filter(job => job.languages.includes(selectedCategory) || job.tools.includes(selectedCategory) || job.level === selectedCategory) : jobs;

    const clearFilters = () => {
        setSelectedCategory(null);
    };

    return (
        <div className='container mx-auto py-8'>
            {selectedCategory && <FilterBar selectedCategory={selectedCategory} clearFilters={clearFilters} />}
            {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} handleCategoryClick={handleCategoryClick} />
            ))}
        </div>
    )
}

export default List