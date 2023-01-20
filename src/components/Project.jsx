import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
   const projects = [
  //   {
  //     img: project1,
  //     name: "Movie App",
  //     github_link: "https://github.com/Sridhar-C-25",
      
  //   },
  //   {
  //     img: project2,
  //     name: "Job search Web App",
  //     github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      
  //   },
  //   {
  //     img: project3,
  //     name: "Highking",
  //     github_link: "https://github.com/Sridhar-C-25/highking",
      
  //   },
  //   {
  //     img: project4,
  //     name: "React Nav",
  //     github_link:
  //       "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      
  //   },
  //   {
  //     img: project5,
  //     name: "Vue Country",
  //     github_link: "https://github.com/Sridhar-C-25",
      
  //   },
  ];
  return (
    <section id="projects" className="py-10 text-white bg-gray-800">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                  <a href={{}} className=""><BsGithub className='text-gray-500 h-6 w-6 mt-4 inline-block'/></a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={{}} alt="person" />
        </div>
      </div>
    </section>
  );
};

export default Project;
