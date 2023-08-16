import React, { useEffect } from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import { FaFacebookMessenger } from "react-icons/fa";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";
import About3 from "../assets/about3.jpg";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
export const About = () => {
  return (
    <AnimatedPage>
      <div className="max-w-screen-xl mx-auto pt-20">
        <div className="text-gray-200">
          <section className="">
            <div className="flex items-center justify-center w-full lg:px-20 pt-10">
              <img src={About1} className="w-[31%] rounded-lg mx-2"></img>
              <img src={About3} className="w-[31%] rounded-lg mx-2"></img>
              <img
                src={About2}
                className="w-[31%] brightness-90 rounded-lg mx-2"
              ></img>
            </div>

            <div className="mt-12 max-w-screen-xl mx-auto px-5">
              <div className="py-8 px-4 sm:px-6 lg:px-8 col-span-1 md:col-span-2 text-center">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4">
                      Hello! I'm Ernest
                    </h2>
                    <p className="text-lg mb-6">
                      I'm a passionate and driven Full Stack Web Developer with
                      a profound love for technology, creativity, and continuous
                      learning. From a young age, I was captivated by computers
                      and technology, leading me to pursue a fulfilling career
                      in web development. I approach each project with an
                      insatiable curiosity, embracing new challenges and staying
                      up-to-date with the latest industry trends. Collaboration
                      is at the core of my work, and I thrive in environments
                      where ideas flow freely and diverse perspectives come
                      together.
                    </p>
                    <p className="text-lg mb-6">
                      Beyond coding, I cherish a well-rounded life, indulging in
                      hobbies, exploring the outdoors, and discovering new
                      cuisines. I believe this balance enhances my
                      problem-solving abilities and fuels my drive to achieve
                      excellence. My journey as a Full Stack Web Developer is an
                      adventure I'm excited to continue. With each project, I
                      blend passion, determination, and a touch of artistry to
                      create remarkable digital experiences. Thank you for
                      visiting my portfolio, and I can't wait to collaborate
                      with you to bring your ideas to life. Let's create
                      something extraordinary together!
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-7xl mx-auto">
                  <div
                    className="mb-8"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                    <p className="text-lg mb-6">
                      A passionate and versatile Full Stack Web Developer based
                      in [Your Location]. With a background in Full Stack Web
                      Development, I have honed my skills in a diverse range of
                      technologies, including MERN, PHP, Laravel, Bootstrap,
                      Tailwind CSS, and the fundamentals of HTML, CSS, and
                      JavaScript.
                    </p>
                    <p className="text-lg mb-6">
                      I believe that every line of code has the potential to
                      make a meaningful impact, and I approach each project with
                      a keen eye for detail and a passion for innovation. My
                      strong collaboration and communication skills allow me to
                      work seamlessly teams to deliver exceptional results that
                      align perfectly with the vision. I'm always eager to learn
                      and explore new tools, frameworks, and best practices to
                      stay ahead in this ever-evolving tech landscape.
                    </p>
                    <p className="text-lg mb-6">
                      Throughout my journey as a web developer, I have had the
                      opportunity to work on a variety of exciting projects,
                      from building small projects to creating real-time web
                      applications. Each project has further enriched my
                      expertise and ignited my drive to create impactful
                      solutions that resonate with users.
                    </p>
                    <p className="text-lg">
                      I am thrilled to be a part of the tech industry, and I'm
                      always on the lookout for new opportunities to collaborate
                      and bring innovative ideas to life. Whether you have a
                      project in mind or just want to connect, I'd love to hear
                      from you! Thank you for taking the time to explore my
                      portfolio, and I'm excited about the possibility of
                      working together to create exceptional web experiences.
                    </p>
                  </div>

                  <div
                    className="mb-8"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    <h2 className="text-3xl font-semibold mb-4">My Journey</h2>
                    <p className="text-lg mb-6">
                      I began my career in the seafaring industry, serving as a
                      training officer. During this time, I played a key role in
                      guiding and educating others in maritime practices,
                      ensuring safety and compliance in marine operations. My
                      tenure in the seafaring industry instilled in me a strong
                      sense of responsibility, attention to detail, and
                      effective communication skills.
                    </p>
                    <p className="text-lg mb-6">
                      Despite my success in the seafaring field, my passion for
                      technology was undeniable. As a child, I was greatly
                      exposed to computers, and I found immense joy in
                      troubleshooting technical issues and exploring the vast
                      world of technology. My love for all things tech led me to
                      make a conscious decision to transition to the web
                      development industry a promise I made to myself for the
                      future.
                    </p>
                  </div>

                  <div
                    className="mb-8"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    <h2 className="text-3xl font-semibold mb-4">
                      My Strengths
                    </h2>
                    <ul className="list-disc list-inside text-lg mb-6">
                      <li>Passionate Problem Solver</li>
                      <li>Strong Collaboration and Communication Skills</li>
                      <li>
                        Creative Thinker and Innovative Solution Developer
                      </li>
                      <li>Adaptability and Quick Learner</li>
                    </ul>
                    <p className="text-lg mb-6">
                      My ability to approach challenges with a positive attitude
                      and an open mind allows me to find effective solutions to
                      complex problems. I thrive in collaborative environments
                      and enjoy working with diverse teams to deliver
                      exceptional results. Innovation is at the core of my
                      development process, and I constantly seek out new
                      technologies to create cutting-edge applications.
                    </p>
                  </div>

                  <div
                    className="mb-8"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    <h2 className="text-5xl font-semibold mb-4">
                      Let's Collaborate
                    </h2>
                    <p className="text-lg mb-6">
                      Whether you have a brilliant idea for a web application,
                      need to revamp your existing website, or want to
                      collaborate on a challenging project, I'm eager to hear
                      from you! Feel free to reach out via the contact form, and
                      let's bring your digital dreams to life together.
                    </p>
                    <p className="text-lg">
                      Thank you for taking the time to explore my portfolio. I
                      look forward to the possibility of working with you and
                      creating exceptional web experiences.
                    </p>
                  </div>
                  <div
                    className="w-full flex justify-center items-center"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    <a
                      href="http://m.me/ernest07dec"
                      className="text-5xl flex justify-end items-end animate-bounce"
                      target="_blank"
                    >
                      Connect with <FaFacebookMessenger className="ml-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="max-w-screen-xl pb-10 px-10 mx-auto"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <h2 className="text-5xl mb-10 text-center">or</h2>
            <form className="max-w-screen-md mx-auto flex flex-col justify-center bg-gray-900 p-10 rounded-2xl">
              <h2 className="text-5xl mb-10">Let's Connect!</h2>
              <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_phone"
                    id="floating_phone"
                    className=" block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
                <div className="relative z-0 w-full md:col-span-2 mb-6 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className=" block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company
                  </label>
                </div>
              </div>
              <div className="my-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-left font-medium dark:text-white"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className=" ring-2 ring-blue-200 text-lg hover:ring-4 hover:ring-blue-300 font-medium text-sm px-6 py-2 text-center mt-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};
