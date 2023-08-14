import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import About1 from "../assets/about1.jpg";
import About2 from "../assets/about2.jpg";
import About3 from "../assets/about3.jpg";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
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

          <div className="mt-12 pb-8 max-w-screen-xl mx-auto px-5">
            <div className="py-8 px-4 sm:px-6 lg:px-8 col-span-1 md:col-span-2 text-center">
              <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Hello! I'm Ernest</h2>
                  <p className="text-lg mb-6">
                    I'm a passionate and driven Full Stack Web Developer with a
                    profound love for technology, creativity, and continuous
                    learning. From a young age, I was captivated by computers
                    and technology, leading me to pursue a fulfilling career in
                    web development. I approach each project with an insatiable
                    curiosity, embracing new challenges and staying up-to-date
                    with the latest industry trends. Collaboration is at the
                    core of my work, and I thrive in environments where ideas
                    flow freely and diverse perspectives come together.
                  </p>
                  <p className="text-lg mb-6">
                    Beyond coding, I cherish a well-rounded life, indulging in
                    hobbies, exploring the outdoors, and discovering new
                    cuisines. I believe this balance enhances my problem-solving
                    abilities and fuels my drive to achieve excellence. My
                    journey as a Full Stack Web Developer is an adventure I'm
                    excited to continue. With each project, I blend passion,
                    determination, and a touch of artistry to create remarkable
                    digital experiences. Thank you for visiting my portfolio,
                    and I can't wait to collaborate with you to bring your ideas
                    to life. Let's create something extraordinary together!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8 px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-lg mb-6">
                    A passionate and versatile Full Stack Web Developer based in
                    [Your Location]. With a background in Full Stack Web
                    Development, I have honed my skills in a diverse range of
                    technologies, including MERN, PHP, Laravel, Bootstrap,
                    Tailwind CSS, and the fundamentals of HTML, CSS, and
                    JavaScript.
                  </p>
                  <p className="text-lg mb-6">
                    I believe that every line of code has the potential to make
                    a meaningful impact, and I approach each project with a keen
                    eye for detail and a passion for innovation. My strong
                    collaboration and communication skills allow me to work
                    seamlessly teams to deliver exceptional results that align
                    perfectly with the vision. I'm always eager to learn and
                    explore new tools, frameworks, and best practices to stay
                    ahead in this ever-evolving tech landscape.
                  </p>
                  <p className="text-lg mb-6">
                    Throughout my journey as a web developer, I have had the
                    opportunity to work on a variety of exciting projects, from
                    building small projects to creating real-time web
                    applications. Each project has further enriched my expertise
                    and ignited my drive to create impactful solutions that
                    resonate with users.
                  </p>
                  <p className="text-lg">
                    I am thrilled to be a part of the tech industry, and I'm
                    always on the lookout for new opportunities to collaborate
                    and bring innovative ideas to life. Whether you have a
                    project in mind or just want to connect, I'd love to hear
                    from you! Thank you for taking the time to explore my
                    portfolio, and I'm excited about the possibility of working
                    together to create exceptional web experiences.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">My Journey</h2>
                  <p className="text-lg mb-6">
                    I began my career in the seafaring industry, serving as a
                    training officer. During this time, I played a key role in
                    guiding and educating others in maritime practices, ensuring
                    safety and compliance in marine operations. My tenure in the
                    seafaring industry instilled in me a strong sense of
                    responsibility, attention to detail, and effective
                    communication skills.
                  </p>
                  <p className="text-lg mb-6">
                    Despite my success in the seafaring field, my passion for
                    technology was undeniable. As a child, I was greatly exposed
                    to computers, and I found immense joy in troubleshooting
                    technical issues and exploring the vast world of technology.
                    My love for all things tech led me to make a conscious
                    decision to transition to the web development industry a
                    promise I made to myself for the future.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">My Strengths</h2>
                  <ul className="list-disc list-inside text-lg mb-6">
                    <li>Passionate Problem Solver</li>
                    <li>Strong Collaboration and Communication Skills</li>
                    <li>Creative Thinker and Innovative Solution Developer</li>
                    <li>Adaptability and Quick Learner</li>
                  </ul>
                  <p className="text-lg mb-6">
                    My ability to approach challenges with a positive attitude
                    and an open mind allows me to find effective solutions to
                    complex problems. I thrive in collaborative environments and
                    enjoy working with diverse teams to deliver exceptional
                    results. Innovation is at the core of my development
                    process, and I constantly seek out new technologies to
                    create cutting-edge applications.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
                  <p className="text-lg mb-6">
                    Whether you have a brilliant idea for a web application,
                    need to revamp your existing website, or want to collaborate
                    on a challenging project, I'm eager to hear from you! Feel
                    free to reach out via the contact form, and let's bring your
                    digital dreams to life together.
                  </p>
                  <p className="text-lg">
                    Thank you for taking the time to explore my portfolio. I
                    look forward to the possibility of working with you and
                    creating exceptional web experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-left flex flex-col justify-between py-4">
            {/* <p className="text-2xl  indent-10">
              Welcome to my portfolio website! I'm thrilled to have you here.
              Allow me to introduce myself; I am a passionate and creative
              full-stack web developer on a mission to turn ideas into stunning
              digital realities. From an early age, I found myself captivated by
              the infinite possibilities that technology could offer. This
              fascination led me to embark on a journey to become a skilled
              developer, and now I am proud to call myself a full-stack expert.
              With a strong foundation in both front-end and back-end
              development, I enjoy building robust and user-friendly web
              applications that leave a lasting impact. My development journey
              began with an insatiable curiosity for programming languages and
              frameworks. As the years passed, I immersed myself in various
              technologies, including HTML, CSS, JavaScript, Python, Node.js,
              React, and more. Each project I tackled honed my skills and
              deepened my understanding of software development. But being a web
              developer is not just about writing code; it's about translating
              visions into tangible solutions. I believe in the power of
              collaboration and open communication to ensure that the end
              product exceeds expectations. By working closely with clients and
              teams, I can deliver results that not only meet technical
              requirements but also resonate with the target audience. One
              aspect that sets me apart as a developer is my dedication to
              continuous learning and improvement. Technology is constantly
              evolving, and I eagerly embrace new trends and innovations to stay
              at the forefront of the industry. This adaptability allows me to
              provide modern, future-proof solutions for every project I
              undertake. In addition to my technical skills, I have a keen eye
              for design and aesthetics. I understand that user experience is
              paramount in today's digital landscape, and I take pride in
              crafting intuitive interfaces that engage and delight users.
              Throughout my portfolio, you'll find a diverse range of projects
              that showcase my versatility as a full-stack web developer.
              Whether it's building dynamic e-commerce platforms, creating
              interactive web applications, or optimizing websites for peak
              performance, I pour my heart and soul into every line of code.
              Thank you for visiting my portfolio website; I hope you enjoy
              exploring my work. If you have any questions or would like to
              collaborate on an exciting project, feel free to reach out. Let's
              bring your ideas to life together!
            </p>
            <p className="text-2xl mt-3 indent-10">
              "Embrace the winds of change, for in the realm of technology,
              continuous learning is the compass that guides us through the
              ever-evolving landscape."
            </p> */}
          </div>
        </section>
      </div>
    </div>
  );
};
