import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsGithub } from "react-icons/bs"
import { Pagination, Autoplay } from "swiper";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project from "../assets/project.png"
const Project = () => {
   const projects = [
    {
      img: project1,
      name: "Blog page frontend",
      github_link: "https://github.com/MistryDarshit/BlogPage",
      
    },
    {
      img: project2,
      name: "Next Genration Payment App",
      github_link: "https://github.com/MistryDarshit/bank_app-Using-Tailwind-and-Reactjs",
      
    },
    {
      img: project3,
      name: "Gpt-3 openAI",
      github_link: "https://github.com/MistryDarshit/GPT-3---one-page-application-using-ReactJs-and-Css",
      
    },
    {
      img: project4,
      name: "News-App",
      github_link:
        "https://github.com/MistryDarshit/News-Fire--A-News-App",
      
    },
    {
      img: project5,
      name: "Online BusPass Syastem",
      github_link: "https://github.com/MistryDarshit/Online-Bus-Pass",
      
    },
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
                  <div className="flex gap-3 cursor-pointer">
                  <a href={project_info.github_link} className="cursor-pointer"><BsGithub className='text-gray-500 h-6 w-6 mt-4 inline-block'/></a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project} alt="person" />
        </div>
      </div>
    </section>
  );
};

export default Project;
