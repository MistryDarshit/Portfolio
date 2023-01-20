import React from 'react'

const Hireme = () => {
  return (
   <section id='hireme' className='py-10 px-3 text-white bg-gray-800'>
    <div className="text-center">
      <h3 className='text-4xl font-semibold'>
        Hire <span className='text-cyan-600'>Me</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">Do You Have Any Work?</p>
    </div>
    <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
      <div>
        <h2 className='text-2xl font-semibold'>Do You want Any Work from me?</h2>
        <p className=" lg:text-left text-justifymax-w-lg text-sm mt-4 text-gray-200 leading-6">
        Work is an essential part of our lives, it is not only a source of income but also an opportunity for personal and professional growth. It allows us to develop new skills, build relationships, and contribute to the success of a team or organization.
        Do You Have Any Work for me?
        </p>
        <button className='bg-cyan-600 px-4 py-2 rounded-lg text-white hover:bg-cyan-500 mt-8'>Say Hello</button>
      </div>
      {/* <img src={{}} alt="HireMe" className='lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover'/> */}
    </div>
   
   </section>
  )
}

export default Hireme
