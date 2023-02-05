import React from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import about from '../assets/about.png';

const About = () => {
  const info = [
    {
      text : 'Years experience',count:'00'
    },
    {
      text : 'Completed Project',count:'04'
    },
    {
      text : 'Having Skills',count:'03'
    },
  ]
  return (
    <section id="about" className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className="text-cyan-600">Me</span>
          
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap6 gap-12 px-10 max-w-6xl mx-auto">
          <div className='p-2'>
            <div className="text-gray-300 my-3 ">
            <p className='leading-7 text-justify w-11/12 mx-auto'>
            As a web developer, you possess a unique set of skills and experiences that make you an asset to any organization. Your proficiency in languages such as HTML, CSS, and JavaScript allows you to create visually-appealing, responsive websites that are optimized for both desktop and mobile devices. 
            </p>
            </div>
            <div className='flex mt-10 items-center gap-7 '>
              {
                info?.map((content,i) =>(
                  <div key={i}>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                    <ScrollTrigger><CountUp end={content.count} /><span className='text-cyan-600'>+</span></ScrollTrigger></h3>
                    <span className='md:text-base text-xs'>{content.text}</span>
                  </div>
                )
                )
              }

              </div>
              <br />
              <br />
              <a href="#" download>
              <button className='bg-cyan-600 px-4 py-2 rounded-lg text-white hover:bg-cyan-500 mt-8 relative
              left-0 md:mx-0'>
                Downlode CV
              </button>
              </a>
            </div>
            <div className='flex-1  md:mt-0 mt-6 flex justify-center items-center'>
                <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm  after::content-['']  after::w-full after::left-0 after::top-0 after::rounded-xl after::rotate-12 after::h-full after::absolute after::bg-grey-600 after::-z-10">
                  <img src={about} alt="Img"  className='w-full object-cover bg-cyan-600 rounded-xl'/>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About
