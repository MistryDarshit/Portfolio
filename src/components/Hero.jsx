import React from "react";
import hero from "../assets/hero.png";
import 'animate.css';
import MovingComponent from 'react-moving-text'

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold md:top-3">
            <span className="text-cyan-600 md:text-6xl relative top-3 text-5xl ">
            <MovingComponent
  type="fadeInFromRight"
  duration="1600ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
Hello!
</MovingComponent>
            </span>
  <MovingComponent
  type="fadeInFromRight"
  duration="1600ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none"
  className="text-white md:text-6xl relative top-3 text-5xl">
    I am<span> Darshit</span>
</MovingComponent>
           
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            WebDeveloper
          </h4>
          <button className="bg-cyan-600 px-4 py-2 rounded-lg text-white hover:bg-cyan-500 mt-8" href="mailto:darshitmistry2@gmail.com?body=Do Ypu Have Any FeedBack">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;